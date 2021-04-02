const uri = "http://localhost:3000/bars/";

export default {
    fetchBars() {
        return fetch(uri, { method: 'GET',
        mode: 'cors' })
        .then((res) => {
            return res.json()
        })
        .then((datas) => {
            return datas
        })}
        
    }