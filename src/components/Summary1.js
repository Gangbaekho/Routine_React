import React, { useContext, useState } from 'react'
import SummaryContext from '../context/summaryContext'
import Question from '../components/Question'

const Summary1 = ({ id, title, content, understanding, folder, questions, related }) => {

    const { summaries } = useContext(SummaryContext)

    const [toggleShowSummaryDetail, setToggleShowSummaryDetail] = useState(false)
    const [toggleShowQuestions, setToggleShowQuestions] = useState(true)

    let myQuestions = summaries.find((summary) => summary.id === id).questions

    if (myQuestions === undefined) {
        myQuestions = []
    }
    return (
        <div>
            <h1 onClick={() => {
                setToggleShowSummaryDetail(!toggleShowSummaryDetail)
            }}>{title}</h1>
            {toggleShowSummaryDetail &&
                (<div>
                    <table className="table table-striped">
                        <thead>
                            <tr>
                                <th>Title</th>
                                <th>Content</th>
                                <th>UnderStanding</th>
                                <th>Folder</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{title}</td>
                                <td>{content}</td>
                                <td>{understanding}</td>
                                <td>{folder}</td>
                            </tr>
                        </tbody>
                    </table>

                </div>)
            }

        </div>
    )
}

export default Summary1