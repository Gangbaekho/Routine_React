import React from 'react'
import { NavLink } from 'react-router-dom'

const Header = (props) => {

    return (
        <div className="header_container">
            <nav>
                <h2 className="logo">Routine</h2>
                <ul className="nav-links">
                    <NavLink className="links" to="/about" activeClassName="is-active">About</NavLink>
                    <NavLink className="links" to="/signup" activeClassName="is-active">Sign up</NavLink>
                    <NavLink className="links" to="/signin" activeClassName="is-active">Sign in</NavLink>
                </ul>
            </nav>
            <div className="welcome">
                <h1>Welcome</h1>
                <p>make your study more efficirently</p><br />
                <button className="btn btn-info btn-lg"
                    onClick={() => console.log(props.history.push('/signin'))}>Login</button>
            </div>
        </div >
    )
}

export default Header