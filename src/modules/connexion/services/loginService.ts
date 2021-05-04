import Ilogin from '../interfaces/Ilogin';
import ISignup from '../interfaces/ISignUp';

const URI = 'http://localhost:3000'
export default {
    login(state: Ilogin) {
        fetch(URI + '/auth/login', {
            method: 'POST',
            body: JSON.stringify(state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)))
    },

    forgotPassword(mail: string) {
        return fetch(URI + '/user/forgotPassword', {
            method: 'POST',
            body: JSON.stringify({ mail: mail }),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
    },

    checkResponse(param: any) {
        return fetch(URI + '/user/checkResponse', {
            method: 'POST',
            body: JSON.stringify(param),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)))
    },

    signUp(state: ISignup) {
        console.log(state);
        fetch(URI + '/user', {
            method: 'POST',
            body: JSON.stringify(state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)))
    }
}