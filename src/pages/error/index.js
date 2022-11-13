import  './index.scss'
import template from './index.hbs'
import { render } from '../../utils/render'


export default function (params = {}) {
    render(template, params)
}
