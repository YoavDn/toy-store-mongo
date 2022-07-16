import { createStore } from 'vuex'
import { toyStore } from './toyStore.js';
import { userStore } from './userStore';
const store = createStore({
    strict: true,
    modules: {
        toyStore,
        userStore
    }
})

export default store

