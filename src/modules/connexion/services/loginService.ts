import Ilogin from '../interfaces/Ilogin';

const URI = 'http://localhost:3000/auth'
export default {
    login(state: Ilogin) {
        fetch(URI + '/login', {
            method: 'POST',
            body: JSON.stringify(state),
            headers: { ' Content-Type': 'application/json' }
        })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)))
    }
}