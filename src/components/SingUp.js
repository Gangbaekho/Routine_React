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
        <div>
            <form onSubmit={onSubmit}>
                <input type="text" placeholder="ID"
                    name="username" className="form-control"
                    onChange={(e) => setUsername(e.target.value)} />
                <input type="password" placeholder="PASSWORD"
                    name="password" className="form-control"
                    onChange={(e) => setPassword(e.target.value)} />
                <button className="btn btn-info btn-xl">Sign up</button>
            </form>
        </div>
    )
}

export default SignUp