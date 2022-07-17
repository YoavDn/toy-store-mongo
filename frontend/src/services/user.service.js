import { httpService } from './http.service';


export const userService = {
    getUser,
    addUser,
    getLoggedInUser,
    logout
}

function addUser(newUser) {
    return httpService.post('auth/signup', newUser)
}

function getUser(user) {
    return httpService.post('auth/login', user)
}

function getLoggedInUser() {
    return httpService.get('auth')
}

function logout() {
    return httpService.post('auth/logout')
}