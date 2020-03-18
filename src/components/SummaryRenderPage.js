import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AuthenticationService from '../api/AuthenticationService'

const SummaryRenderPage = (props) => {

    const [summaries, setSummaries] = useState([])

    useEffect(() => {

        axios.get(`http://localhost:8080/summary/${sessionStorage.getItem('authenticatedUser')}`, {
            headers: {
                authorization: 'Bearer ' + sessionStorage.getItem('token')
            }
        }).then((data) => setSummaries(data.data))
            .catch((error) => console.log(error))
    })

    // make handleGetSummaries event handler for getting summaries from server
    const handleGetSummaries = () => {

        axios.get(`http://localhost:8080/summary/${sessionStorage.getItem('authenticatedUser')}`, {
            headers: {
                authorization: 'Bearer ' + sessionStorage.getItem('token')
            }
        }).then((data) => setSummaries(data.data))
            .catch((error) => console.log(error))

    }




    return (
        <div>
            Hello! {props.match.params.username} <br />
            these are your summary

            <button className="btn btn-info"
                onClick={handleGetSummaries}>get summary</button>

            {summaries.map((item) => (
                <div key={item.id}>
                    <h1>{item.title}</h1>
                    <h2>{item.content}</h2>
                </div>
            ))}
        </div>
    )
}

export default SummaryRenderPage