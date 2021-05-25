export default class NewMdpModel {
    mail: string | string[];
    password: string;
    response: string | string[];

    constructor(mail: string | string[], password: string, response: string | string[]) {
        this.mail = mail
        this.password = password
        this.response = response
    }
}