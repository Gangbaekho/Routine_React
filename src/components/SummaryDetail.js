import React, { useState, useEffect } from 'react'
import axios from 'axios'
import { useHistory, withRouter } from 'react-router-dom'
import Question from '../components/Question'

const SummaryDetail = (props) => {

    const history = useHistory();

    // create state for getting summary
    const [summary, setSummary] = useState([])
    const [questions, setQuestions] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/summary/${props.match.params.username}/${props.match.params.id}`,
            {
                headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem('token')
                }
            }).then((data) => setSummary(data.data))
            .catch((error) => console.log('can not fetch the summary'))

        axios.get(`http://localhost:8080/question/${props.match.params.username}/${props.match.params.id}`,
            {
                headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem('token')
                }
            }).then((data) => setQuestions(data.data))
            .catch((error) => console.log('can not fetch the summary'))
    }, [])

    const onClick = () => {
        history.push(`/question/${props.match.params.username}/${props.match.params.id}`)
    }

    return (
        <div>
            <h1>{summary.title}</h1>
            <h2>{summary.content}</h2>
            <p>{summary.understanding}</p>
            <p>{summary.folder}</p>
            <button className="btn btn-success"
                onClick={onClick}>Create Question</button>
            <hr />
            {questions.map((question) => (
                <Question key={question.id} {...question} />
            ))}

        </div>
    )
}

export default SummaryDetail