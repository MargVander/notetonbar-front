export default class SignUpModel {
    pseudo: string;
    mail: string;
    password: string;
    question: string;
    response: string;
    age: number;

    constructor(pseudo: string, mail: string, password: string, question: string, response: string, age: number) {
        this.pseudo = pseudo
        this.mail = mail
        this.password = password,
            this.question = question,
            this.response = response,
            this.age = age
    }
}