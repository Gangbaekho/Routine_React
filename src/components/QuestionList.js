import React, { useState, useEffect, useContext } from 'react'
import Question from './Question'
import uuid from 'uuid'

const QuestionList = (props) => {

    let questions = []

    const [toggleShowQuestions, setToggleShowQuestions] = useState(false)

    if (props.questions !== undefined) {
        questions = props.questions
    }





    return (
        <div>
            <button className="btn btn-success btn-sm"
                onClick={() => setToggleShowQuestions(!toggleShowQuestions)}>Show Question</button>
            {toggleShowQuestions && questions.map((question) => (
                <Question key={uuid()} {...question} summaryId={props.summaryId} />
            ))}
        </div>
    )
}

export default QuestionList