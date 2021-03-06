import { store } from "@/store";

const URI = 'http://localhost:3000';
export default {
    getUser(id: number) {
        return fetch(URI + '/user/' + id, {
            method: 'GET',
            headers: {
                "Authorization": `bearer ${store.state.bearer}`,
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then((response => {
                if (response.status == 200) {
                    return response.json()
                } else {
                    throw new Error();
                }
            }))
            .catch((error) => { return error })

    }
}