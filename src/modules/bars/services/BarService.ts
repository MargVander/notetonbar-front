import { store } from "@/store";

const uri = "http://localhost:3000";

export default {
    async fetchBars(limit = 0) {
        return await fetch(uri + '/bars?limit=' + limit, {
            method: 'GET',
            headers: {
                "Authorization": `bearer ${store.state.bearer}`,
            },
        })
            .then((res) => {
                return res.json()
            })
            .then((datas) => {
                return datas
            })
    },
    async fetchBarsByPopularity(limit = 0) {
        return await fetch(uri + '/bars/bypopularity?limit=' + limit, {
            method: 'GET',
            headers: {
                "Authorization": `bearer ${store.state.bearer}`,
            },
        })
            .then((res) => {
                return res.json()
            })
            .then((datas) => {
                return datas
            })
    },
    async fetchBar(id: number) {
        return await fetch(uri + '/bars/' + id, {
            method: 'GET',
            headers: {
                "Authorization": `bearer ${store.state.bearer}`,
            },
        })
            .then((res) => {
                return res.json()
            })
            .then((datas) => {
                return datas
            })
    },
    async fetchReviews(id: number, limit = 0) {
        return await fetch(uri + '/bars/' + id + '/reviews?limit=' + limit, {
            method: 'GET',
            headers: {
                "Authorization": `bearer ${store.state.bearer}`,
            },
        })
            .then((res) => {
                return res.json()
            })
            .then((datas) => {
                return datas
            })
    }
}
