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

    executeJwtAuthenticationService(username, password) {
        return axios.post(`http://localhost:8080/authenticate`, {
            username,
            password
        })
    }

    logout() {
        sessionStorage.removeItem('authenticatedUser')
    }

    isUserLoggedIn() {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null) return false
        return true
    }

    registerSuccessfulLoginForJwt(username, token) {
        sessionStorage.setItem('authenticatedUser', username)
        this.setupAxiosInterceptors(this.createJWTToken(token))
    }

    getLoggedInUserName() {
        let user = sessionStorage.getItem('authenticatedUser')
        if (user === null) return ''
        return user
    }

    createJWTToken(token) {
        return 'Bearer ' + token
    }


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

export default new AuthenticationService()