import template from './index.hbs'
import { render } from '../../../../utils/render'


export default function (params = {}) {
    render(template, {
        password: '1234567890', 
        ...params
    })
}
