import React, { useContext, useState } from 'react'
import SummaryContext from '../context/summaryContext'
import SummaryUpdateForm from './SummaryUpdateForm'
import axios from 'axios'
import { removeSummary } from '../actions/SummaryActions'


const Summary1 = ({ id, title, content, understanding, folder, questions, related }) => {

    const { summaries, dispatch } = useContext(SummaryContext)

    const [toggleShowSummaryDetail, setToggleShowSummaryDetail] = useState(false)
    const [toggleShowSummaryUpdateForm, setToggleShowUpdateForm] = useState(false)

    const handleBack = () => {
        setToggleShowUpdateForm(!toggleShowSummaryUpdateForm)
        setToggleShowSummaryDetail(!toggleShowSummaryDetail)
    }

    const handleRemoveSummary = () => {
        axios.delete(
            `http://localhost:8080/summary/${sessionStorage.getItem('authenticatedUser')}/${id}`,
            {
                headers: {
                    authorization: 'Bearer ' + sessionStorage.getItem('token')

                }
            }).then(() => {
                console.log('summary remove  success')
                dispatch(removeSummary(id))
            })
            .catch('summary form send failed')
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
                                    <button className="btn btn-danger btn-sm"
                                        onClick={handleRemoveSummary}>Remove</button>
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