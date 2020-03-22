import React, { useState, useContext } from 'react'
import axios from 'axios'
import SummaryContext from '../context/summaryContext'
import { updateSummary } from '../actions/SummaryActions'


const SummaryUpdateForm = (props) => {

    const { summaries, dispatch } = useContext(SummaryContext)

    const { id, title, content, understanding, folder, questions, related } = summaries.find((summary) => summary.id === props.id)

    // create state for register summary
    const [newTitle, setNewTitle] = useState(title)
    const [newContent, setNewContent] = useState(content)
    const [newUnderstanding, setNewUnderstanding] = useState(understanding)
    const [newFolder, setNewFolder] = useState(folder)

    const onSubmit = (e) => {

        // prevent default
        e.preventDefault()

        // make summary object for sending server
        const summary = {
            id,
            title: newTitle,
            content: newContent,
            understanding: newUnderstanding,
            folder: newFolder,
            questions,
            related
        }

        axios.put(
            `http://localhost:8080/summary/${sessionStorage.getItem('authenticatedUser')}/${id}`,
            summary,
            {
                headers: {
                    authorization: 'Bearer ' + sessionStorage.getItem('token')

                }
            }).then(() => {
                console.log('summary update success')
                dispatch(updateSummary(summary))
            })
            .catch('summary form send failed')


        // send to server to register

    }

    return (
        <div><form onSubmit={onSubmit}>
            Title <input type="text" name="title"
                placeholder="Title" className="form-control"
                defaultValue={title}
                onInput={(e) => setNewTitle(e.target.value)} />
                Content <input type="text" name="content"
                placeholder="Content" className="form-control"
                defaultValue={content}
                onInput={(e) => setNewContent(e.target.value)} />
                Understanding <input type="number" name="understaning"
                placeholder="1~3 number" className="form-control"
                defaultValue={understanding}
                onInput={(e) => setNewUnderstanding(e.target.value)} />
                Folder <input type="text" name="folder"
                placeholder="Folder" className="form-control"
                defaultValue={folder}
                onInput={(e) => setNewFolder(e.target.value)} />
            <button className="btn btn-success">Submit</button>
        </form>
            <button className="btn btn-danger btn-sm"
                onClick={props.handleBack}>Back</button>
        </div>
    )
}

export default SummaryUpdateForm