const INCORRECT_NAME = 'Латиница или кириллица, первая буква должна быть заглавной, без пробелов и без цифр, нет спецсимволов (допустим только дефис)'
const INCORRECT_LOGIN = 'От 3 до 20 символов, латиница, может содержать цифры, но не состоять из них, без пробелов, без спецсимволов (допустимы дефис и нижнее подчёркивание)'
const INCORRECT_PASSWORD = 'От 8 до 40 символов, обязательно хотя бы одна заглавная буква и цифра'
const INCORRECT_EMAIL = 'Некорректный адрес элеметронной'
const INCORRECT_PHONE = 'Некорректный номер телефона'
const INCORRECT_MESSAGE = 'Сообщение не может быть пустым'

export const VALIDATE_ERRORS: Record<string, string> = {
    'name': INCORRECT_NAME,
    'login': INCORRECT_LOGIN,
    'password': INCORRECT_PASSWORD,
    'email': INCORRECT_EMAIL,
    'phone': INCORRECT_PHONE,
    'message': INCORRECT_MESSAGE,
}