import React, { useContext } from 'react'
import SummaryContext from '../context/summaryContext'

const Summary1 = (props) => {

    const [summaries, dispatch] = useContext(SummaryContext)
    const summary = summaries[props.id]

    return (
        <div>
            <h1>{summary.title}</h1>
        </div>
    )
}

export default Summary1