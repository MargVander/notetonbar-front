export default class SignUpModel {
    pseudo: string;
    mail: string;
    password: string;
    question: string;
    response: string;
    age: number;
    picture: string

    constructor(pseudo: string, mail: string, password: string, question: string, response: string, age: number, picture: string) {
        this.pseudo = pseudo
        this.mail = mail
        this.password = password,
            this.question = question,
            this.response = response,
            this.age = age
        this.picture = picture
    }
}