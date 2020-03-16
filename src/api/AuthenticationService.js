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

}

export default new AuthenticationService()