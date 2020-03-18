import React from 'react'
import { NavLink } from 'react-router-dom'

const WelcomePage = (props) => {

    return (
        <div>
            Welocome {props.match.params.username} to my world
            <NavLink to={`/summary/${props.match.params.username}`}>To Summary</NavLink>
        </div>
    )
}

export default WelcomePage