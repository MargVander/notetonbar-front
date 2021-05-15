import Ilogin from '../interfaces/Ilogin';
import ISignup from '../interfaces/ISignUp';
import ForgotPasswordModel from '../models/forgotPasswordModel';
import LoginModel from '../models/loginModel';
import NewMdpModel from '../models/newMdpModel';
import ValidateUserModel from '../models/validateUserModel';

const URI = 'http://localhost:3000'
export default {
    login(state: LoginModel) {
        return fetch(URI + '/auth/login', {
            method: 'POST',
            body: JSON.stringify(state),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.status == 201) {
                    return response.json()
                } else {
                    throw new Error();
                }
            })
            .catch((error) => { return error })
    },

    forgotPassword(mail: ForgotPasswordModel) {
        return fetch(URI + '/user/forgotPassword', {
            method: 'POST',
            body: JSON.stringify(mail),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.status == 201) {
                    return response.json()
                } else {
                    throw new Error();
                }
            })
            .catch((error) => { return error })
    },

    checkResponse(param: ValidateUserModel) {
        return fetch(URI + '/user/checkResponse', {
            method: 'POST',
            body: JSON.stringify(param),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.status == 201) {
                    return response.json()
                } else {
                    throw new Error();
                }
            })
            .catch((error) => { return error })
    },

    newMdp(param: NewMdpModel) {
        return fetch(URI + '/user/newMdp', {
            method: 'PATCH',
            body: JSON.stringify(param),
            headers: {
                'Accept': 'application/json',
                'Content-Type': 'application/json'
            }
        })
            .then(response => {
                if (response.status == 200) {
                    return response.json()
                } else {
                    throw new Error();
                }
            })
            .catch((error) => { return error })
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