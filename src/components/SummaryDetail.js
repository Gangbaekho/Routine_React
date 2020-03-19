import React, { useState, useEffect } from 'react'
import axios from 'axios'

const SummaryDetail = (props) => {

    // create state for getting summary
    const [summary, setSummary] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/summary/${props.match.params.username}/${props.match.params.id}`,
            {
                headers: {
                    'Authorization': 'Bearer ' + sessionStorage.getItem('token')
                }
            }).then((data) => setSummary(data.data))
            .catch((error) => console.log('can not fetch the summary'))
    }, [])

    return (
        <div>
            <h1>{summary.title}</h1>
            <h2>{summary.content}</h2>
            <p>{summary.understanding}</p>
            <p>{summary.folder}</p>
        </div>
    )
}

export default SummaryDetail