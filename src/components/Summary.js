import React, { useContext } from 'react'
import { useHistory, withRouter } from 'react-router-dom'
import SummaryContext from '../context/summaryContext'

const Summary = ({ id, title, content, understanding, folder }) => {

    const { mySummaries, dispatch } = useContext(SummaryContext)

    const history = useHistory()

    return (
        <div>
            <h1 onClick={() => {
                history.push(`/summary/${sessionStorage.getItem('authenticatedUser')}/${id}`)
            }}>Title : {title}</h1>
            <h2>Content : {content}</h2>
            <p>Understanding : {understanding}</p>
            <p>Folder name : {folder}</p>
            <button onClick={() => {
                dispatch({
                    type: 'ADD_SUMMARY', summary: {
                        title: 'test1',
                        content: 'test1',
                        understanding: 'test1',
                        folder: 'test1'
                    }
                })
            }}>Add redux</button>
        </div>
    )
}

export default withRouter(Summary)