import React, { useState, useEffect } from 'react'
import AuthenticationService from '../api/AuthenticationService'

const SignUp = (props) => {

    // create state for username and password by useState
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [enabled, setEnabled] = useState(1)

    const onSubmit = (e) => {
        e.preventDefault()
        AuthenticationService.createUser(username, password, enabled)
    }

    return (
        <div className="container">
            <form onSubmit={onSubmit}>
                <div className="col-xs-3">
                    <input type="text" placeholder="ID"
                        name="username" className="form-control"
                        onChange={(e) => setUsername(e.target.value)} />
                </div>
                <input type="password" placeholder="PASSWORD"
                    name="password" className="form-control"
                    onChange={(e) => setPassword(e.target.value)} />
                <button className="btn btn-info btn-xl">Sign up</button>
            </form>
        </div>
    )
}

export default SignUp