import React, { useContext, useState } from 'react'
import SummaryContext from '../context/summaryContext'
import SummaryUpdateForm from './SummaryUpdateForm'


const Summary1 = ({ id, title, content, understanding, folder, questions, related }) => {

    const { summaries, dispatch } = useContext(SummaryContext)

    const [toggleShowSummaryDetail, setToggleShowSummaryDetail] = useState(false)
    const [toggleShowSummaryUpdateForm, setToggleShowUpdateForm] = useState(false)

    const handleBack = () => {
        setToggleShowUpdateForm(!toggleShowSummaryUpdateForm)
        setToggleShowSummaryDetail(!toggleShowSummaryDetail)
    }

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
                                <th>Update</th>
                                <th>Remove</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                                <td>{title}</td>
                                <td>{content}</td>
                                <td>{understanding}</td>
                                <td>{folder}</td>
                                <td>
                                    <button className="btn btn-success btn-sm"
                                        onClick={() => {
                                            setToggleShowUpdateForm(!toggleShowSummaryUpdateForm)
                                            setToggleShowSummaryDetail(!toggleShowSummaryDetail)
                                        }}>Update</button>
                                </td>
                                <td>
                                    <button className="btn btn-danger btn-sm">Remove</button>
                                </td>
                            </tr>
                        </tbody>
                    </table>

                </div>)
            }
            {
                toggleShowSummaryUpdateForm && <SummaryUpdateForm id={id} handleBack={handleBack} />
            }

        </div>
    )
}

export default Summary1