import template from './index.hbs'


export default function render(params = {}) {
    return template({
        login:"ivanivanov",
        password: "1234567890",
        ...params
    })
}