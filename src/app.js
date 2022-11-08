import './main.scss'

import router from './router'
import Handlebars from 'handlebars/dist/handlebars.runtime'
import page from './components/page'
import card from './components/card'
import input from './components/input'
import button from './components/button'
import buttonPrimary from './components/button/primary'


Handlebars.registerPartial('page', page)
Handlebars.registerPartial('card', card)
Handlebars.registerPartial('input', input)
Handlebars.registerPartial('button', button)
Handlebars.registerPartial('buttonPrimary', buttonPrimary)


document.addEventListener('DOMContentLoaded', () => {   
    router.push(window.location.pathname)
})
