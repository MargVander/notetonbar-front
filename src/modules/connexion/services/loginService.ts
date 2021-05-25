import ForgotPasswordModel from '../models/forgotPasswordModel';
import LoginModel from '../models/loginModel';
import NewMdpModel from '../models/newMdpModel';
import SignUpModel from '../models/signUpModel';
import ValidateUserModel from '../models/validateUserModel';

const URI = 'http://localhost:3000'
export default {

    signUp(state: SignUpModel) {
        console.log(state);
        return fetch(URI + '/user', {
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

    addPicture(file: any, id: number) {
        const formData = new FormData();
        formData.append('photo', file)

        return fetch(URI + `/user/avatar/${id}`, {
            method: 'POST',
            body: formData,
        }).then(response => {
            if (response.status == 201) {
                return response.json()
            } else {
                throw new Error();
            }
        })
    },

    getQuestion() {
        return fetch(URI + '/user/signUp/question', {
            method: 'GET',
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

}