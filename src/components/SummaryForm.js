import React, { useState } from 'react'
import { useHistory } from 'react-router-dom'
import axios from 'axios'

const SummaryForm = (props) => {

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
            }).then(() => console.log('send success'))
            .catch((error) => console.log('can not send data to server'))


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
