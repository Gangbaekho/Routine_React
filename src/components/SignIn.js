import React, { useState, useEffect } from 'react'
import AuthenticationService from '../api/AuthenticationService'

const SignIn = (props) => {

    // create state for username and password by useState
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const [hasLoginFailed, setHasLoginFailed] = useState(false)
    const [showSuccessMessage, setShowSuccessMessage] = useState(false)


    // login click event
    const loginClicked = (e) => {

        e.preventDefault();

        AuthenticationService.
            executeJwtAuthenticationService(username, password)
            .then((response) => {
                AuthenticationService.registerSuccessfulLoginForJwt(username, response.data.jwt)
                // this.props.history.push(`/welcome/${this.state.username}`)
                console.log(response.data.jwt)
            }).catch(() => {
                setHasLoginFailed(true)
                setShowSuccessMessage(false)
                console.log('failed')
            })
    }

    return (
        <div className="container">
            <form onSubmit={loginClicked} method="POST">
                <div className="col-xs-3">
                    <input type="text" placeholder="ID"
                        name="username" className="form-control"
                        onChange={(e) => setUsername(e.target.value)} />
                </div>
                <input type="password" placeholder="PASSWORD"
                    name="password" className="form-control"
                    onChange={(e) => setPassword(e.target.value)} />
                <button className="btn btn-info btn-xl">Sign in</button>
            </form>
        </div>
    )
}

export default SignIn