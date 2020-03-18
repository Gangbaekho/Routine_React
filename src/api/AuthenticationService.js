import axios from 'axios'

class AuthenticationService {

    // create user post method to server
    createUser(username, password, enabled) {
        axios.post('http://localhost:8080/users', {
            username,
            password,
            enabled
        })
    }

    // get jwt token from server
    executeJwtAuthenticationService(username, password) {
        return axios.post(`http://localhost:8080/authenticate`, {
            username,
            password
        })
    }

    // remove sessionStorage for logout
    logout() {
        sessionStorage.removeItem('authenticatedUser')
    }

    // check whether user login or not
    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null) return false
        return true
    }

    // session login and set axios interceptor with jwt token
    // when user login
    registerSuccessfulLoginForJwt(username, token) {
        sessionStorage.setItem('authenticatedUser', username)
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null) return ''
        return user
    }

    // jwt token for authentication
    createJWTToken(token) {
        return 'Bearer ' + token
    }


    // set axios interceptor for not sending header authorization every request
    setupAxiosInterceptors(token) {

        axios.interceptors.request.use(
            (config) => {
                if (this.isUserLoggedIn()) {
                    config.headers.authorization = token
                }
                return config
            }
        )
    }


}

// axios authenticationService
export default new AuthenticationService()