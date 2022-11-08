import template from './index.hbs'


export default function render(params = {}) {
    console.log('render main')
    return template({ ...params})
}