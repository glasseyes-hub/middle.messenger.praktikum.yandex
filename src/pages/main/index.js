import template from './index.hbs'
import { render } from '../../utils/render'


export function mainPage(params = {}) {
     render(template, params)
}
