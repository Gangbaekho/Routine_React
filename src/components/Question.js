import React, { useContext } from 'react'
import axios from 'axios'
import { useHistory, withRouter } from 'react-router-dom'
import SummaryContext from '../context/summaryContext'
import { removeQuestion } from '../actions/SummaryActions'

const Question = (props) => {

    const { dispatch } = useContext(SummaryContext)

    const handleDeleteQuestion = () => {
        axios.delete(`http://localhost:8080/question/${props.match.params.username}/${props.id}`,
            {
                headers: {
                    authorization: 'Bearer ' + sessionStorage.getItem('token')

                }
            }).then(() => {
                console.log('question delete success')
                dispatch(removeQuestion(props.summaryId, props.id))
            })
    }

    return (
        <div>
            <h2>{props.title}</h2>
            <h3>{props.content}</h3>
            <button className="btn btn-danger btn-sm"
                onClick={handleDeleteQuestion}>Delete Question</button>
            <button className="btn btn-info btn-sm">Update Question</button>
        </div>
    )
}

export default withRouter(Question)