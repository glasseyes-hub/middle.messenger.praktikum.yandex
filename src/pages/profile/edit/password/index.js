import template from './index.hbs'
import { render } from '../../../../utils/render'


export function profileEditPasswordPage(params = {}) {
    render(template, {
        password: '1234567890', 
        ...params
    })
}
