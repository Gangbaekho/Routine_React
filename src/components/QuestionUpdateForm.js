import React, { useState, useEffect } from 'react'
import { withRouter } from 'react-router-dom'
import axios from 'axios'

const QuestionUpdateForm = (props) => {

    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const id = props.match.params.questionId

    const handleUpdateQuestion = (e) => {

        e.preventDefault()

        axios.put(`http://localhost:8080/question/${props.match.params.username}`,
            { id, title, content }, {
            headers: {
                authorization: 'Bearer ' + sessionStorage.getItem('token')

            }
        }).then(() => console.log('success'))
            .catch((error) => console.log('failed'))
    }

    useEffect(() => {

        axios.get(`http://localhost:8080/question/${props.match.params.username}/${props.match.params.questionId}`,
            {
                headers: {
                    authorization: 'Bearer ' + sessionStorage.getItem('token')

                }
            }).then((data) => {
                setTitle(data.data.title)
                setContent(data.data.content)
                console.log('success')
            }).catch((error) => console.log('failed get question'))
    }, [])

    return (
        <div>
            <form onSubmit={handleUpdateQuestion}>
                <input type="text" name="title"
                    placeholder="update title"
                    className="form-control"
                    defaultValue={title}
                    onChange={(e) => setTitle(e.target.value)} />
                <input type="text" name="content"
                    placeholder="update Content"
                    className="form-control"
                    defaultValue={content}
                    onChange={(e) => setContent(e.target.value)} />
                <button className="btn btn-success">Update</button>
            </form>
        </div>
    )
}

export default withRouter(QuestionUpdateForm)