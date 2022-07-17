import { httpService } from './http.service';

console.log(process.env.NODE_ENV);

export const toyService = {
    query,
    remove,
    save,
    getEmptyToy,
    getById
}


function query(filterBy) {
    return httpService.get('toy', filterBy)
}

function remove(toy) {
    return httpService.delete(`toy/${toy._id}`)
}

function save(toy) {
    if (toy._id) return httpService.put(`toy/${toy._id}`, toy)
    return httpService.post('toy', toy)
}

function getById(toyId) {
    return httpService.get('toy/' + toyId)
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


//old way

// function query(filterBy) {
//     return axios.get(API, { params: filterBy }, { withCredentials: true }).then(({ data }) => data)
// }

// function remove(toy) {
//     console.log(toy);
//     return axios.delete(`${API}/${toy._id}`, { withCredentials: true }).then(({ data }) => data)
// }

// function save(toy) {
//     if (toy._id) return axios.put(`${API}/${toy._id}`, toy, { withCredentials: true }).then(({ data }) => data);
//     return axios.post(API, toy).then(({ data }) => data)

// }

// function getById(toyId) {
//     return axios.get(API + '/' + toyId).then(({ data }) => data)
// }

// function getEmptyToy() {
//     return {
//         _id: null,
//         name: "",
//         price: 0,
//         labels: [],
//         createdAt: Date.now(),
//         inStock: true
//     }

// }

