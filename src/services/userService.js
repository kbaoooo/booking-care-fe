import axios from "../axios"

export const handleLoginApi = (username, password) => {
    return axios.post('/api/login', {email: username, password})
}