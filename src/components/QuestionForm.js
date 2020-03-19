import React, { useState } from 'react'
import { useHistory, withRouter } from 'react-router-dom'
import axios from 'axios'

const QuestionForm = (props) => {

    const history = useHistory()

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')

    const onSubmit = (e) => {

        e.preventDefault()

        axios.post(`http://localhost:8080/question/${props.match.params.username}/${props.match.params.summaryId}`,
            { title, content }, {
            headers: {
                authorization: 'Bearer ' + sessionStorage.getItem('token')

            }
        }).then(() => history.push(`/summary/${props.match.params.username}/${props.match.params.summaryId}`))
            .catch((error) => console.log('send data failed'))
    }

    return (
        <div>
            Hello {props.match.params.username} <br />
            This is QuestionForm about {props.match.params.summaryId}
            <form onSubmit={onSubmit}>
                <input type="text" name="title"
                    className="form-control" placeholder="Title"
                    onChange={(e) => setTitle(e.target.value)} />
                <textarea name="content" className="form-control"
                    placeholder="Content"
                    onChange={(e) => setContent(e.target.value)} />
                <button className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default withRouter(QuestionForm)