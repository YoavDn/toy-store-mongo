import { toyService } from "../services/toy.service.js"

export const toyStore = {
    state: {
        toys: [],
         filterBy: {
                query: '',
                filters: {
                    inStock: false,
                    checkedLabels: [],
                    sortBy: [],

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
        deleteToy: (state, { toys }) => state.toys = toys,
        saveToy: (state, { toys }) => state.toys = toys,
        setFilter: (state, {filterBy}) => state.filterBy = filterBy
        // setQuery: (state, { query }) => state.filterBy.query = query,
        // setFilter: ({ filterBy }, { filter }) => filterBy.filters[filter] = !filterBy.filters[filter],
        // setCheckedLabels: ({filterBy}, {checkedLabels}) =>  filterBy.filters.checkedLabels = checkedLabels,

    },
    getters: {
        getToys: ({ toys }) => toys,
        getFilter: ({ filterBy }) => filterBy,
        // toysToShow({toys, filterBy}) {
        //     const { query, filters } = filterBy
        //     const regex = new RegExp(query, 'i')
        //     let filterToys = toys.filter(toy => regex.test(toy.name))
        //     if (filters.inStock) return filterToys.filter(toy => toy.inStock)
        //     return filterToys
        // }
    },
    actions: {
        loadToys: ( context ) => {
            const  filterBy =  {...context.state.filterBy}
            toyService.query(filterBy)
                .then(toys => {
                    context.commit({ type: 'setToys', toys })
                    return toys
                })
        },
    
        deleteToy: ({ commit }, { toy }) => {
            toyService.remove(toy)
                .then(toys => commit({ type: 'deleteToy', toys }))
        },
        saveToy: ({ commit }, { toy }) => {
            toyService.save(toy)
                .then(toys => commit({ type: 'saveToy', toys }))
        },
        setFilter({commit, dispatch}, {filterBy}) {
            commit({type: 'setFilter', filterBy})
                dispatch({type: 'loadToys'})
            // .then(toys => commit({type:'setToys', toys} ))
            // .catch(err => console.log('coulnt filter Toys'))
        }
    }
}

