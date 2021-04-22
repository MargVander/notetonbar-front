const uri = "http://localhost:3000";

export default {
    fetchBars() {
        return fetch(uri + '/bars', { method: 'GET',
        mode: 'cors' })
        .then((res) => {
            return res.json()
        })
        .then((datas) => {
            return datas
        })},
        fetchBar(id) {
            return fetch(uri + '/bars/' + id, { method: 'GET',
            mode: 'cors' })
            .then((res) => {
                return res.json()
            })
            .then((datas) => {
                return datas
            })}
        
    }