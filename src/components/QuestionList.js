import React, { useState, useEffect, useContext } from 'react'
import Question from './Question'
import QuestionForm from './QuestionForm'
import uuid from 'uuid'

const QuestionList = (props) => {

    let questions = []

    const [toggleShowQuestions, setToggleShowQuestions] = useState(false)
    const [toggleCreateQuestionForm, setToggleCreateQuestionForm] = useState(false)

    if (props.questions !== undefined) {
        questions = props.questions
    }





    return (
        <div>
            <button className="btn btn-success btn-sm"
                onClick={() => setToggleShowQuestions(!toggleShowQuestions)}>Show Question</button>
            <button className="btn btn-info btn-sm"
                onClick={() => setToggleCreateQuestionForm(!toggleCreateQuestionForm)}
            >Create Question</button>
            {toggleCreateQuestionForm && (<QuestionForm summaryId={props.summaryId} />)}
            {toggleShowQuestions && questions.map((question) => (
                <Question key={uuid()} {...question} summaryId={props.summaryId} />
            ))}
        </div>
    )
}

export default QuestionList