import React, { useState, useEffect } from 'react'
import AuthenticationService from '../api/AuthenticationService'
import { useHistory, withRouter } from 'react-router-dom'

const SignUp = (props) => {

    const history = useHistory()

    // create state for username and password by useState
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [enabled, setEnabled] = useState(true)

    const onSubmit = (e) => {
        e.preventDefault()
        AuthenticationService.createUser(username, password, enabled)
        history.push('/signin')
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

export default withRouter(SignUp)