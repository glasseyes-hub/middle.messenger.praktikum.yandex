import template from './index.hbs'
import { render } from '../../utils/render'


export function registrationPage(params = {}) {
     render(template, {
        email: "pochta@yandex.ru", 
        login: "ivanivanov", 
        first_name: "Иван", 
        second_name: "Иванов", 
        display_name: 'Иван', 
        phone: '+7 (909) 967 30 30', 
        password: '1234567890', 
        password_repeat: '123456789012', 
        ...params
    })
}
