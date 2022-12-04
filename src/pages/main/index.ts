import {Block} from '../../utils/Block';
import './index.scss'
import {ChatContentComponent} from '../../components/chat/content'


export class MainPage extends Block {
  constructor() {
    super({
      onChatSelect: (id: number) => {
        (this.refs.chatContent as ChatContentComponent).loadMessages(id)
      }
    })
  }

  render() {
    // language=hbs
    return `
      <div class="chat">
        {{{ChatSidebar onSelect=onChatSelect}}}

        {{{ChatContent ref="chatContent"}}}
      </div>
    `
  }
}