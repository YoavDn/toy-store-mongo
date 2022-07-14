import { createStore } from 'vuex'
import { toyStore } from './toyStore.js';
const store = createStore({
    strict: true,
    modules: {
        toyStore
    }
})

export default store

