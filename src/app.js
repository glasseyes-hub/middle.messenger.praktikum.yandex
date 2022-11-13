import './main.scss'

import router from './router'
import Handlebars from 'handlebars/dist/handlebars.runtime'

import {page} from './components/page'
import {card} from './components/card'
import {cardContent} from './components/card/content'
import {cardControls} from './components/card/controls'
import {form} from './components/form'
import {input} from './components/input'
import {inputFile} from './components/input/file'
import {link} from './components/link'
import {buttonSubmit} from './components/button/submit'
import {buttonRounded} from './components/button/rounded'
import {avatar} from './components/avatar'
import {sidebar} from './components/sidebar'
import {profileContainer} from './components/profile/container'
import {profileContainerBlock} from './components/profile/container/block'
import {profileLine} from './components/profile/line'
import {profileInput} from './components/profile/input'
import {profileLink} from './components/profile/link'
import {modal} from './components/modal'


Handlebars.registerPartial('page', page)
Handlebars.registerPartial('card', card)
Handlebars.registerPartial('cardContent', cardContent)
Handlebars.registerPartial('cardControls', cardControls)
Handlebars.registerPartial('form', form)
Handlebars.registerPartial('input', input)
Handlebars.registerPartial('inputFile', inputFile)
Handlebars.registerPartial('link', link)
Handlebars.registerPartial('buttonSubmit', buttonSubmit)
Handlebars.registerPartial('buttonRounded', buttonRounded)
Handlebars.registerPartial('avatar', avatar)
Handlebars.registerPartial('sidebar', sidebar)
Handlebars.registerPartial('profileContainer', profileContainer)
Handlebars.registerPartial('profileContainerBlock', profileContainerBlock)
Handlebars.registerPartial('profileLine', profileLine)
Handlebars.registerPartial('profileInput', profileInput)
Handlebars.registerPartial('profileLink', profileLink)
Handlebars.registerPartial('modal', modal)


document.addEventListener('DOMContentLoaded', () => {   
    router.push(window.location.pathname)
})
