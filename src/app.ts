import './main.css'
import {registerComponent} from './utils/registerComponent'
import './utils/ifEqualsHelper'
import {router} from './router'

import {PageComponent} from './components/page'
import {CardComponent} from './components/card'
import {CardContentComponent} from './components/card/content'
import {CardControlsComponent} from './components/card/controls'
import {FormComponent} from './components/form'
import {InputComponent} from './components/input'
import {InputLabeledComponent} from './components/input/labeled'
import {InputRoundedComponent} from './components/input/rounded'
import {InputFileComponent} from './components/input/file'
import {InputErrorComponent} from './components/input/error'
import {ButtonComponent} from './components/button'
import {ButtonSumbitComponent} from './components/button/submit'
import {ButtonRoundedComponent} from './components/button/rounded'
import {LinkComponent} from './components/link'
import {AvatarComponent} from './components/avatar'
import {SidebarComponent} from './components/sidebar'
import {ProfileContainerComponent} from './components/profile/container'
import {ProfileContainerBlockComponent} from './components/profile/container/block'
import {ProfileLineComponent} from './components/profile/line'
import {ProfileInputComponent} from './components/profile/input'
import {ProfileLinkComponent} from './components/profile/link'
import {ProfileAvatarComponent} from './components/profile/avatar'
import {ModalComponent} from './components/modal'
import {ChatItemComponent} from './components/chat/item'
import {ChatMessageComponent} from './components/chat/message'
import {ChatContentComponent} from './components/chat/content'
import {ChatSidebarComponent} from './components/chat/sidebar'
import {ChatDropdownTopComponent} from './components/chat/dropdown/dropdownTop'
import {ChatDropdownBottomComponent} from './components/chat/dropdown/dropdownBottom'
import {ChatDropdownItemComponent} from './components/chat/dropdown/item'


registerComponent('Page', PageComponent)
registerComponent('Card', CardComponent)
registerComponent('CardContent', CardContentComponent)
registerComponent('CardControls', CardControlsComponent)
registerComponent('Form', FormComponent)
registerComponent('Input', InputComponent)
registerComponent('InputLabeled', InputLabeledComponent)
registerComponent('InputRounded', InputRoundedComponent)
registerComponent('InputFile', InputFileComponent)
registerComponent('InputError', InputErrorComponent)
registerComponent('Button', ButtonComponent)
registerComponent('ButtonSubmit', ButtonSumbitComponent)
registerComponent('ButtonRounded', ButtonRoundedComponent)
registerComponent('Link', LinkComponent)
registerComponent('Avatar', AvatarComponent)
registerComponent('Sidebar', SidebarComponent)
registerComponent('ProfileContainer', ProfileContainerComponent)
registerComponent('ProfileContainerBlock', ProfileContainerBlockComponent)
registerComponent('ProfileLine', ProfileLineComponent)
registerComponent('ProfileInput', ProfileInputComponent)
registerComponent('ProfileLink', ProfileLinkComponent)
registerComponent('ProfileAvatar', ProfileAvatarComponent)
registerComponent('Modal', ModalComponent)
registerComponent('ChatItem', ChatItemComponent)
registerComponent('ChatMessage', ChatMessageComponent)
registerComponent('ChatContent', ChatContentComponent)
registerComponent('ChatSidebar', ChatSidebarComponent)
registerComponent('ChatDropdownTop', ChatDropdownTopComponent)
registerComponent('ChatDropdownBottom', ChatDropdownBottomComponent)
registerComponent('ChatDropdownItem', ChatDropdownItemComponent)

document.addEventListener('DOMContentLoaded', () => {   
    const query = '?' + window.location.href.split('?')[1]

    router.push(window.location.pathname + query)
})


