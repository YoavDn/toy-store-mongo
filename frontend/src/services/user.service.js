import axios from "axios"

const API = (process.env.NODE_ENV === 'development')
    ? 'http://localhost:3030/api/auth'
    : 'api/toy'

export const userService = {
    getUser,
    addUser,
}

function addUser(newUser) {
    return axios.post(API + '/signup', newUser, { withCredentials: true }).then(({ data }) => data)
}

function getUser(user) {
    console.log(user);
    return axios.post(API + '/login', user, { withCredentials: true }).then(({ data }) => data)
}
