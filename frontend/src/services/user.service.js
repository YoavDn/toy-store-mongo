import axios from "axios"

const API = (process.env.NODE_ENV !== 'development')
    ? 'api/toy'
    : 'http://localhost:3030/api/auth'

export const userService = {
    getUser,
    addUser,
}

function addUser(newUser) {
    return axios.post(API + '/signup', newUser).then(({ data }) => data)
}

function getUser(user) {
    console.log(user);
    return axios.post(API + '/login', user).then(({ data }) => data)
}
