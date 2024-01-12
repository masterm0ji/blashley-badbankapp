export default class AccountData {
    constructor(formElement) {
        this.formElement = formElement;
    }

    getUsername() {
        return this.formElement.querySelector('#username').value;
    }

    getEmail() {
        return this.formElement.querySelector('#email').value;
    }

    getPassword() {
        return this.formElement.querySelector('#password').value;
    }

}
