import { store } from "@/store";
import config from '../../../config'

const uri = config.uri;

export default {
    async fetchReviews(limit = 0) {
        return await fetch(uri + '/reviews?limit=' + limit, {
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
    async createReview(data: Record<string, any>) {
        return await fetch(uri + '/reviews', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `bearer ${store.state.bearer}`,

            }
        })
            .then((res) => {
                return res
            })
    },
    async deleteReview(id: number) {
        return await fetch(uri + '/reviews/' + id, {
            method: 'DELETE',
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json',
                "Authorization": `bearer ${store.state.bearer}`,
            }
        })
        .then((res) => {
            return res
        })
    }
}
