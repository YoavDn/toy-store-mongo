import { httpService } from './http.service';

const API = (process.env.NODE_ENV === 'development')
    ? 'http://localhost:3030/api/auth'
    : 'api/auth'

export const userService = {
    getUser,
    addUser,
}

// function addUser(newUser) {
//     return axios.post(API + '/signup', newUser, { withCredentials: true }).then(({ data }) => data)
// }

// function getUser(user) {
//     console.log(user);
//     return axios.post(API + '/login', user, { withCredentials: true }).then(({ data }) => data)
// }

async function addUser(newUser) {
    const user = await httpService.post('auth/signup', newUser)
    return user.data
}

async function getUser(user) {
    const resUser = await httpService.post('auth/login', user)
    return resUser.data
}



