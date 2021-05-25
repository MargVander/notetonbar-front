import { store } from "@/store";

const uri = "http://localhost:3000";

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
        console.log("create review");
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
    }
}
