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
    createReview(data: Record<string, any>) {
        console.log("create review");
        return fetch(uri + '/reviews', {
            method: 'POST',
            mode: 'cors',
            body: JSON.stringify(data),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((res) => {
                return res
            })
    }
}