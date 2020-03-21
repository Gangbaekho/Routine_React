import React, { useState, useEffect, useReducer } from 'react'
import axios from 'axios'
import AuthenticationService from '../api/AuthenticationService'
import { useHistory, withRouter } from 'react-router-dom'
import Summary from '../components/Summary'
import summaryReducer from '../reducers/SummaryReducer'
import SummaryContext from '../context/summaryContext'
import SummaryService from '../api/SummaryService'
import Summary1 from '../components/Summary1'
import SummaryForm from '../components/SummaryForm'
import QuestionList from '../components/QuestionList'
import { getSummaries } from '../actions/SummaryActions'
import uuid from 'uuid'

const SummaryRenderPage = (props) => {

    const [summaries, dispatch] = useReducer(summaryReducer, [])
    const [toggleShowSummaryForm, setToggleShowSummaryForm] = useState(false)

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
            <button className="btn btn-success"
                onClick={() => setToggleShowSummaryForm(!toggleShowSummaryForm)}>Create Summary</button>
            {toggleShowSummaryForm && <SummaryForm />}
            {summaries.map((summary) => (
                <div key={uuid()}>
                    <Summary1 {...summary} />
                    <QuestionList questions={summary.questions} summaryId={summary.id} />
                </div>
            ))}
        </SummaryContext.Provider>
    )
}

export default withRouter(SummaryRenderPage)