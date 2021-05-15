export default class ValidateUserModel {
    mail: string | string[]
    response: string

    constructor(mail: string | string[], response: string) {
        this.mail = mail
        this.response = response
    }
}