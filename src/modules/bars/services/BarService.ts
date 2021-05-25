const uri = "http://localhost:3000";

export default {
    async fetchBars(limit = 0) {
        return await fetch(uri + '/bars?limit=' + limit, {
            method: 'GET',
            mode: 'cors'
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
            mode: 'cors'
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
            mode: 'cors'
        })
            .then((res) => {
                return res.json()
            })
            .then((datas) => {
                return datas
            })
    }
}
