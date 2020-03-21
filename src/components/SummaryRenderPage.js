import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import AuthenticationService from '../api/AuthenticationService'
import { useHistory, withRouter } from 'react-router-dom'
import Summary from '../components/Summary'
import summaryReducer from '../reducers/SummaryReducer'
import SummaryContext from '../context/summaryContext'
import SummaryService from '../api/SummaryService'
import Summary1 from '../components/Summary1'
import { getSummaries } from '../actions/SummaryActions'

const SummaryRenderPage = (props) => {

    const [summaries, dispatch] = useReducer(summaryReducer, [])

    const history = useHistory()

    useEffect(() => {
        axios.get(`http://localhost:8080/summary/${sessionStorage.getItem('authenticatedUser')}`, {
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')
            }
        }).then((data) => dispatch(getSummaries(data.data)))
            .catch((error) => console.log(error))
    }, [])





    return (
        <SummaryContext.Provider value={{ summaries, dispatch }}>
            {summaries.map((summary) => (
                <Summary1 key={summary.id} {...summary} />
            ))}
        </SummaryContext.Provider>
    )
}

export default withRouter(SummaryRenderPage)