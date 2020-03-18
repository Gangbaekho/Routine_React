import React, { useState, useEffect } from 'react'
import axios from 'axios'
import AuthenticationService from '../api/AuthenticationService'

const SummaryRenderPage = (props) => {

    const [summaries, setSummaries] = useState([])

    // make handleGetSummaries event handler for getting summaries from server
    const handleGetSummaries = () => {

        axios.get('http://localhost:8080/summary/kimjinhyun/1', {
            headers: {
                authorization: 'Bearer ' + sessionStorage.getItem('token')
            }
        }).then((data) => console.log(data.data))
            .catch((error) => console.log(error))



    }




    return (
        <div>
            Hello! {props.match.params.username} <br />
            these are your summary

            <button className="btn btn-info"
                onClick={handleGetSummaries}>get summary</button>
        </div>
    )
}

export default SummaryRenderPage