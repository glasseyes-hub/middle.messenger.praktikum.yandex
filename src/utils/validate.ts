
type Validator = (value: string) => boolean;

const validators: {[type: string]: Validator} = {
    'name': (name: string) => /^[A-ZА-Я]{1}[a-zа-я-]{1,40}$/.test(name),
    'login': (login: string) => /^(?=.*[A-Za-z0-9-_]$)[A-Za-z][A-Za-z\d._-]{2,20}$/.test(login),
    'password': (password: string) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{8,40}/.test(password),
    'email': (email: string) => /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email),
    'phone': (phone: string) => /^[+]?[0-9]{10,15}$/.test(phone),
    'message': (message: string) => /^.+$/.test(message),
}

export function validate(type: string, value: string) {
    return validators[type](value)
} 