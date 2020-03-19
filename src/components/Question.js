import React from 'react'
import axios from 'axios'
import { useHistory, withRouter } from 'react-router-dom'

const Question = (props) => {

    const history = useHistory()

    const handleDeleteQuestion = () => {
        axios.delete(`http://localhost:8080/question/${props.match.params.username}/${props.id}`,
            {
                headers: {
                    authorization: 'Bearer ' + sessionStorage.getItem('token')

                }
            }).then(() => console.log('success'))
    }

    return (
        <div>
            <h2>{props.title}</h2>
            <h3>{props.content}</h3>
            <button className="btn btn-danger"
                onClick={handleDeleteQuestion}>Delete Question</button>
            <button className="btn btn-info"
                onClick={() => history.push(`/question/${props.match.params.username}/${props.id}/update`)}>Update Question</button>
        </div>
    )
}

export default withRouter(Question)