import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import AuthenticationService from '../api/AuthenticationService'
import { useHistory, withRouter } from 'react-router-dom'
import Summary from '../components/Summary'
import summaryReducer from '../reducers/SummaryReducer'
import SummaryContext from '../context/summaryContext'

const SummaryRenderPage = (props) => {

    const [mySummaries, dispatch] = useReducer(summaryReducer, [])

    // to use history.push(somewhere)
    const history = useHistory()

    const [summaries, setSummaries] = useState([])

    useEffect(() => {
        axios.get(`http://localhost:8080/summary/${props.match.params.username}`, {
            headers: {
                authorization: 'Bearer ' + sessionStorage.getItem('token')
            }
        }).then((data) => setSummaries(data.data))
            .catch((error) => console.log(error))
    }, [])


    // make handleGetSummaries event handler for getting summaries from server
    const handleGetSummaries = () => {

        axios.get(`http://localhost:8080/summary/${sessionStorage.getItem('authenticatedUser')}`, {
            headers: {
                'Authorization': 'Bearer ' + sessionStorage.getItem('token')
            }
        }).then((data) => setSummaries(data.data))
            .catch((error) => console.log(error))

    }

    return (
        <SummaryContext.Provider value={{ mySummaries, dispatch }}>
            Hello! {props.match.params.username} <br />
            these are your summary

            <button onClick={() => console.log(mySummaries)}>Check redux</button>

            <button className="btn btn-info"
                onClick={handleGetSummaries}>get summary</button>
            <button className="btn btn-success"
                onClick={() => history.push(`/summary/${sessionStorage.getItem('authenticatedUser')}/create-summary`)}
            >Create Summary</button>

            {summaries.map((item) => (
                <Summary key={item.id} {...item} />
            ))}

        </SummaryContext.Provider>
    )
}

export default withRouter(SummaryRenderPage)