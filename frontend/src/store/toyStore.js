import { toyService } from "../services/toy.service.js"

export const toyStore = {
    state: {
        toys: [],
        filterBy: {
            query: '',
            filters: {
                inStock: false,
                checkedLabels: [],
                sortBy: '',

            },
            labels: [
                'On wheels',
                'Box game',
                'Art',
                'Baby',
                'Doll',
                'Puzzle',
                'Outdoor',
                'Battery powered',
            ],
            sorts: [
                'price',
                'date',
                'name',
            ]
        },

    },
    mutations: {
        setToys: (state, { toys }) => state.toys = toys,
        deleteToy: (state, { toy }) => {
            const idx = state.toys.findIndex(currToy => currToy._id === toy._id)
            return state.toys.splice(idx, 1)
        },
        saveToy: (state, { toy }) => {
            const idx = state.toys.findIndex(currToy => currToy._id === toy._id)
            return state.toys[idx] = toy
        },
        setFilter: (state, { filterBy }) => state.filterBy = filterBy
    },
    getters: {
        getToys: ({ toys }) => toys,
        getFilter: ({ filterBy }) => filterBy,
    },
    actions: {
        loadToys: (context) => {
            const filterBy = { ...context.state.filterBy }
            toyService.query(filterBy)
                .then(toys => {
                    context.commit({ type: 'setToys', toys })
                    return toys
                })
        },

        deleteToy: ({ commit }, { toy }) => {
            toyService.remove(toy)
                .then(toy => commit({ type: 'deleteToy', toy }))
        },
        saveToy: ({ commit }, { toy }) => {
            toyService.save(toy)
                .then(toy => commit({ type: 'saveToy', toy }))
        },
        setFilter({ commit, dispatch }, { filterBy }) {
            commit({ type: 'setFilter', filterBy })
            dispatch({ type: 'loadToys' })
            // .then(toys => commit({type:'setToys', toys} ))
            // .catch(err => console.log('coulnt filter Toys'))
        }
    }
}

