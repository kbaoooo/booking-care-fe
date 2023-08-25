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

export const getUserById = (id) => {
    return axios.get(`/api/detail-user/${id}`)
}

export const deleteUser = (id) => {
    return axios.delete(`/api/delete-user/${id}`)
}

export const editUser = (id, data) => {
    return axios.put(`/api/edit-user/${id}`, data)
}