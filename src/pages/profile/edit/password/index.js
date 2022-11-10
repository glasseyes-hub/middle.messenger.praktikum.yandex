import template from './index.hbs'


export default function render(params = {}) {
    return template({
        email: "pochta@yandex.ru", 
        login: "ivanivanov", 
        first_name: "Иван", 
        second_name: "Иванов", 
        display_name: 'Иван', 
        phone: '+7 (909) 967 30 30', 
        ...params
    })
}