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

    forgotMail(mail: string) {
        console.log(mail);
        fetch(URI + '/auth/forgotMail', {
            method: 'POST',
            body: JSON.stringify(mail),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => response.json())
            .then(response => console.log(JSON.stringify(response)));
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
            .catch(err => console.log(err));
    }
}