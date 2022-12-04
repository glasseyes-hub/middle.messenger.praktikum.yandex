import {Block} from '../../../utils/Block';
import './index.scss'
import {ChatController} from '../../../controllers/ChatController'


type Props = {
  onSelect?(id: number): void
}

export class ChatSidebarComponent extends Block {
  message: string

  constructor(props: Props) {
    const chats = ChatController.getChats().map(chat => {
      return {
        ...chat,
        onChatClick: (id: number) => {
          if(props.onSelect) props.onSelect(id)

          const chats = (this.props.chats as Chat[]).map((chat) => {
            if(chat.id === id) chat.selected = true
            else chat.selected = false

            return chat
          })

          this.setProps({...this.props, chats})
        }
      }
    })

    super({
      ...props,
      chats,
    });
  }

  render() {
    // language=hbs
    return `
      <aside class="chat-sidebar">
        <header class="chat-sidebar__header">
          <div class="chat-sidebar__profile">
            {{#Link title="Профиль" to="/profile" color="#999999"}}
              <svg width="6" height="10" viewBox="0 0 6 10" fill="none" xmlns="http://www.w3.org/2000/svg">
                <path d="M1 9L5 5L1 1" stroke="#999999"/>
              </svg>
            {{/Link}}
          </div>
          {{{InputRounded title="Поиск"}}}
        </header>

        <ul class="chat-sidebar__chats">
          {{#chats}}
            <li class="chat-sidebar__chats__item">
              {{{ChatItem 
                id=id
                avatar=avatar 
                name=name
                author=author
                message=message
                date=date
                count=count
                selected=selected
                onClick=onChatClick
              }}}            
            </li>
          {{/chats}}
        </ul>
      </aside>
    `
  }
}