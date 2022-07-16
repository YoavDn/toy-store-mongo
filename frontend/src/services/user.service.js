import axios from "axios"

export const userService = {
    getUser,
    addUser,
}

function addUser(newUser) {
    console.log(newUser);
}

function getUser() {
    console.log('get User');
}
