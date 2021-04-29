const uri = "http://localhost:3000";

export default {
    fetchReviews(id: number) {
        return fetch(uri + '/reviews' + id, {
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

}