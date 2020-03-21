import React, { useState, useContext } from 'react'
import axios from 'axios'
import SummaryContext from '../context/summaryContext'
import { addSummary } from '../actions/SummaryActions'
import uuid from 'uuid'
const SummaryForm = (props) => {

    const { dispatch } = useContext(SummaryContext)

    const id = uuid()
    // create state for register summary
    const [title, setTitle] = useState('')
    const [content, setContent] = useState('')
    const [understanding, setUnderstanding] = useState('')
    const [folder, setFolder] = useState('')



    const onSubmit = (e) => {

        // prevent default
        e.preventDefault()

        // make summary object for sending server
        const summary = { title, content, understanding, folder }

        axios.post(
            `http://localhost:8080/summary/${sessionStorage.getItem('authenticatedUser')}`,
            summary,
            {
                headers: {
                    authorization: 'Bearer ' + sessionStorage.getItem('token')

                }
            }).then(() => {
                console.log('summary form submit sccess')
                dispatch(addSummary(summary))
            })
            .catch('summary form send failed')


        // send to server to register

    }

    return (
        <div>
            <h2>Welcome to create-summary service {sessionStorage.getItem('authenticatedUser')}</h2>
            <form onSubmit={onSubmit}>
                Title <input type="text" name="title"
                    placeholder="Title" className="form-control"
                    onInput={(e) => setTitle(e.target.value)} />
                Content <input type="text" name="content"
                    placeholder="Content" className="form-control"
                    onInput={(e) => setContent(e.target.value)} />
                Understanding <input type="number" name="understaning"
                    placeholder="1~3 number" className="form-control"
                    onInput={(e) => setUnderstanding(e.target.value)} />
                Folder <input type="text" name="folder"
                    placeholder="Folder" className="form-control"
                    onInput={(e) => setFolder(e.target.value)} />
                <button className="btn btn-success">Submit</button>
            </form>
        </div>
    )
}

export default SummaryForm
