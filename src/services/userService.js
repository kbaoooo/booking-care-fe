import axios from "../axios"

export const handleLoginApi = (username, password) => {
    return axios.post('/api/login', {email: username, password})
}

export const getAllUsers = () => {
    return axios.get('/api/get-all-users')
}

export const createNewUser = (data) => {
    return axios.post('/api/create-new-user', data)
}