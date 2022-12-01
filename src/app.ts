import './main.scss'
import {registerComponent} from './utils/registerComponent'
import './utils/ifEqualsHelper'
import {router} from './router'

import {PageComponent} from './components/page'
import {CardComponent} from './components/card'
import {CardContentComponent} from './components/card/content'
import {CardControlsComponent} from './components/card/controls'
import {FormComponent} from './components/form'
import {InputComponent} from './components/input'
import {InputRoundedComponent} from './components/input/rounded'
import {InputFileComponent} from './components/input/file'
import {InputErrorComponent} from './components/input/error'
import {ButtonComponent} from './components/button'
import {ButtonSumbitComponent} from './components/button/submit'
import {ButtonRoundedComponent} from './components/button/rounded'
import {LinkComponent} from './components/link'
import {AvatarComponent} from './components/avatar'
import {AvatarSimpleComponent} from './components/avatar/simple'
import {SidebarComponent} from './components/sidebar'
import {ProfileContainerComponent} from './components/profile/container'
import {ProfileContainerBlockComponent} from './components/profile/container/block'
import {ProfileLineComponent} from './components/profile/line'
import {ProfileInputComponent} from './components/profile/input'
import {ProfileLinkComponent} from './components/profile/link'
import {ModalComponent} from './components/modal'
import {MenuComponent} from './components/menu'
import {MenuItemComponent} from './components/menu/item'
import {ChatMenuItemComponent} from './components/chat/menuItem'
import {ChatMessageComponent} from './components/chat/message'


registerComponent('Page', PageComponent)
registerComponent('Card', CardComponent)
registerComponent('CardContent', CardContentComponent)
registerComponent('CardControls', CardControlsComponent)
registerComponent('Form', FormComponent)
registerComponent('Input', InputComponent)
registerComponent('InputRounded', InputRoundedComponent)
registerComponent('InputFile', InputFileComponent)
registerComponent('InputError', InputErrorComponent)
registerComponent('Button', ButtonComponent)
registerComponent('ButtonSubmit', ButtonSumbitComponent)
registerComponent('ButtonRounded', ButtonRoundedComponent)
registerComponent('Link', LinkComponent)
registerComponent('Avatar', AvatarComponent)
registerComponent('AvatarSimple', AvatarSimpleComponent)
registerComponent('Sidebar', SidebarComponent)
registerComponent('ProfileContainer', ProfileContainerComponent)
registerComponent('ProfileContainerBlock', ProfileContainerBlockComponent)
registerComponent('ProfileLine', ProfileLineComponent)
registerComponent('ProfileInput', ProfileInputComponent)
registerComponent('ProfileLink', ProfileLinkComponent)
registerComponent('Modal', ModalComponent)
registerComponent('Menu', MenuComponent)
registerComponent('MenuItem', MenuItemComponent)
registerComponent('ChatMenuItem', ChatMenuItemComponent)
registerComponent('ChatMessage', ChatMessageComponent)

document.addEventListener('DOMContentLoaded', () => {   
    router.push(window.location.pathname)
})


