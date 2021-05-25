const uri = "http://localhost:3000";

export default {
    fetchReviews(limit = 0) {
        return fetch(uri + '/reviews?limit=' + limit, {
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