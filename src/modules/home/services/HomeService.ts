import { store } from '@/store';
const uri = "http://localhost:3000";

export default {
    fetchReviews(limit = 0) {
        return fetch(uri + '/reviews?limit=' + limit, {
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