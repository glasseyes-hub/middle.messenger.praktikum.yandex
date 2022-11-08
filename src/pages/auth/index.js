import  './index.scss'
import template from './index.hbs'
import test from '../../components/test'


export default function render(params = {}) {
    console.log('render auth')

    return template({name: 'Alexey', slot: test,  value: '123123123', ...params})
}