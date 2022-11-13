import  './index.scss'
import template from './index.hbs'
import { render } from '../../utils/render'


export function errorPage(params = {}) {
    render(template, params)
}
