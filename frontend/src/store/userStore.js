
import { userService } from '../services/user.service.js';

export const userStore = {
    state: {
        user: null
    },

    mutations: {
        setUser: (state, { newUser }) => state.user = newUser,

    },

    getters: {
        getUser: ({ user }) => user
    },

    actions: {

        async addUser({ commit }, { userToAdd }) {
            const newUser = await userService.addUser(userToAdd)
            commit({ type: 'setUser', newUser })

        },
        async login({ commit }, { userInputs }) {
            const user = await userService.getUser(userInputs)
            commit({ type: 'setUser', user })
            return user
        }
    }


}

