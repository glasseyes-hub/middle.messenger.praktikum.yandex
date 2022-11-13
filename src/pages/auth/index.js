import template from './index.hbs'
import { render } from '../../utils/render'


export function authPage(params = {}) {
    render(template, {
        login:"ivanivanov",
        password: "1234567890",
        ...params
    })
}
