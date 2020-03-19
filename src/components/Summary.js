import React from 'react'
import { useHistory, withRouter } from 'react-router-dom'

const Summary = ({ id, title, content, understanding, folder }) => {

    const history = useHistory()

    return (
        <div>
            <h1 onClick={() => {
                history.push(`/summary/${sessionStorage.getItem('authenticatedUser')}/${id}`)
            }}>Title : {title}</h1>
            <h2>Content : {content}</h2>
            <p>Understanding : {understanding}</p>
            <p>Folder name : {folder}</p>
        </div>
    )
}

export default withRouter(Summary)