import React, { useContext, useState } from 'react'
import SummaryContext from '../context/summaryContext'
import Question from '../components/Question'

const Summary1 = ({ id, title, content, understanding, folder, questions, related }) => {

    const { summaries, dispatch } = useContext(SummaryContext)

    const [toggleShowSummaryDetail, setToggleShowSummaryDetail] = useState(false)
    const [toggleShowQuestions, setToggleShowQuestions] = useState(true)

    const myQuestions = summaries.find((summary) => summary.id === id).questions

    return (
        <div>
            <h1 onClick={() => {
                setToggleShowSummaryDetail(!toggleShowSummaryDetail)
            }}>{title}</h1>
            {toggleShowSummaryDetail &&
                (<div>
                    <h2>{content}</h2>
                    <p>{understanding}</p>
                    <p>{folder}</p>
                    {toggleShowQuestions && myQuestions.map((question) => (
                        // <div key={question.id}>
                        //     <h1>Question Title : {question.title}</h1>
                        //     <h2>Question Content : {question.content}</h2>
                        // </div>
                        <Question key={question.id} {...question} />
                    ))}
                    <button className="btn btn-success"
                        onClick={() => setToggleShowQuestions(!toggleShowQuestions)}
                    >Questions</button>
                </div>)
            }

        </div>
    )
}

export default Summary1