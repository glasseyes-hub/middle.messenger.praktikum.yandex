
type Validator = (value: unknown) => boolean;

const validators: {[type: string]: Validator} = {
    'password': (password: string) => /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])[0-9a-zA-Z]{3,}/.test(password)
}

export function validate(type: string, value: unknown) {
    return validators[type](value)
} 