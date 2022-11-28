import {registerComponent} from './utils/registerComponent'
import {router} from './router'

import {PageComponent} from './components/page'
import {CardComponent} from './components/card'
import {CardContentComponent} from './components/card/content'
import {CardControlsComponent} from './components/card/controls'
import {FormComponent} from './components/form'
import {InputComponent} from './components/input'
import {ButtonSumbitComponent} from './components/button/submit'
import {LinkComponent} from './components/link'

// import './main.scss'

// import {router} from './router'
// import Handlebars from 'handlebars/dist/handlebars.runtime'

// import {inputFile} from './components/input/file'
// import {buttonRounded} from './components/button/rounded'
// import {avatar} from './components/avatar'
// import {sidebar} from './components/sidebar'
// import {profileContainer} from './components/profile/container'
// import {profileContainerBlock} from './components/profile/container/block'
// import {profileLine} from './components/profile/line'
// import {profileInput} from './components/profile/input'
// import {profileLink} from './components/profile/link'
// import {modal} from './components/modal'


// Handlebars.registerPartial('inputFile', inputFile)
// Handlebars.registerPartial('buttonRounded', buttonRounded)
// Handlebars.registerPartial('avatar', avatar)
// Handlebars.registerPartial('sidebar', sidebar)
// Handlebars.registerPartial('profileContainer', profileContainer)
// Handlebars.registerPartial('profileContainerBlock', profileContainerBlock)
// Handlebars.registerPartial('profileLine', profileLine)
// Handlebars.registerPartial('profileInput', profileInput)
// Handlebars.registerPartial('profileLink', profileLink)
// Handlebars.registerPartial('modal', modal)

registerComponent('Page', PageComponent)
registerComponent('Card', CardComponent)
registerComponent('CardContent', CardContentComponent)
registerComponent('CardControls', CardControlsComponent)
registerComponent('Form', FormComponent)
registerComponent('Input', InputComponent)
registerComponent('ButtonSubmit', ButtonSumbitComponent)
registerComponent('Link', LinkComponent)

document.addEventListener('DOMContentLoaded', () => {   
    router.push(window.location.pathname)

})


