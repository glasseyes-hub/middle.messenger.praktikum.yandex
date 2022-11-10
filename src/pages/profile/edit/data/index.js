import template from './index.hbs'


export default function render(params = {}) {
    return template({
        password: '1234567890', 
        ...params
    })
}