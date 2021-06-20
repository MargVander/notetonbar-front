import { store } from '@/store';
import config from '../../../config'

const uri = config.uri;

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