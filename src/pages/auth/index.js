import  './index.scss'
import template from './index.hbs'


export default function render(params = {}) {
    return template(params)
}