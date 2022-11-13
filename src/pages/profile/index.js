import template from './index.hbs'
import { render } from '../../utils/render'


export default function (params = {}) {
     render(template, {
        email: "pochta@yandex.ru", 
        login: "ivanivanov", 
        first_name: "Иван", 
        second_name: "Иванов", 
        display_name: 'Иван', 
        phone: '+7 (909) 967 30 30', 
        ...params
    })
}
