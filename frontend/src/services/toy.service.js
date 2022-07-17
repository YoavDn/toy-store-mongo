import axios from 'axios';

axios.defaults.withCredentials = true

console.log(process.env.NODE_ENV);
const API = (process.env.NODE_ENV === 'development')
    ? 'http://localhost:3030/api/toy'
    : 'api/toy'

export const toyService = {
    query,
    remove,
    save,
    getEmptyToy,
    getById
}

function query(filterBy) {
    return axios.get(API, { params: filterBy }, { withCredentials: true }).then(({ data }) => data)
}

function remove(toy) {
    console.log(toy);
    return axios.delete(`${API}/${toy._id}`, { withCredentials: true }).then(({ data }) => data)
}

function save(toy) {
    if (toy._id) return axios.put(`${API}/${toy._id}`, toy, { withCredentials: true }).then(({ data }) => data);
    return axios.post(API, toy).then(({ data }) => data)

}

function getById(toyId) {
    return axios.get(API + '/' + toyId).then(({ data }) => data)
}

function getEmptyToy() {
    return {
        _id: null,
        name: "",
        price: 0,
        labels: [],
        createdAt: Date.now(),
        inStock: true
    }

}

