import React from 'react'

const Question = ({ title, content }) => {

    return (
        <div>
            <h2>{title}</h2>
            <h3>{content}</h3>
        </div>
    )
}

export default Question