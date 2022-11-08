import  './index.scss'
import template from './index.hbs'


export default function render(params = {}) {
    console.log('render registration')

    return template(params)
}