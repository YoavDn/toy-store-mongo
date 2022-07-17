
import { userService } from '../services/user.service.js';

export const userStore = {
    state: {
        user: null
    },

    mutations: {
        setUser: (state, { user }) => state.user = user,

    },

    getters: {
        getUser: ({ user }) => user
    },

    actions: {
        async getLoggedInUser({ commit }) {
            try {
                const user = await userService.getLoggedInUser()
                commit({ type: 'setUser', user })
            } catch {
                console.log('No user is logged in');
            }
        },

        async addUser({ commit }, { userToAdd }) {
            const user = await userService.addUser(userToAdd)
            commit({ type: 'setUser', user })

        },
        async login({ commit }, { userInputs }) {
            const user = await userService.getUser(userInputs)
            commit({ type: 'setUser', user })
            return user
        },
        logout({ commit }) {
            userService.logout()
            commit({ type: 'setUser' })
        }
    }


}

