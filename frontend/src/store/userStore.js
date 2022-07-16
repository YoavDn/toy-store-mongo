
import { userService } from '../services/user.service.js';

export const userStore = {
    state: {
        user: null
    },

    mutations: {
    },

    actions: {
        addUser({ commit }, { newUser }) {
            userService.addUser()
            // console.log(newUser);
        }
    }


}

