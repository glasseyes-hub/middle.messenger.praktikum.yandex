import {Block} from '../../utils/Block';
import './index.scss'
import {InputRoundedComponent} from '../../components/input/rounded'
import {ChatController} from '../../controllers/ChatController'


export class MainPage extends Block {
  message: string

  constructor() {
    const chats = ChatController.getChats()
    const chatData = ChatController.getChatData(1)

    super({
      chat: chatData,
      chats,
      onMessageInput: (message: string) => {
        this.message = message
      },
      onMessageSubmit: () => {
        if(this.message) {
          (this.refs.messageInput as InputRoundedComponent).value = ''

          ChatController.sendMessage({
            message: this.message
          })

          this.message = ''          
        }
      }
    })
  }

  render() {
    // language=hbs
    return `
      <div class="chat">
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
                  avatar=avatar 
                  name=name
                  author=author
                  message=message
                  date=date
                  count=count
                  selected=selected
                }}}            
              </li>
            {{/chats}}
          </ul>
        </aside>

        <div class="chat-content">
          <header class="chat-content__header">
            <div class="chat-content__info">
              {{{Avatar src=chat.avatar size="small"}}}
              <span class="chat-content__info__title">{{chat.title}}</span>
            </div>

            {{{ChatDropdownTop}}}
          </header>
          <ul class="chat-content__messages">
            {{#chat.messages}}
              <li class="chat-content__messages__date">{{date}}</li>
              {{#items}}
                <li class="chat-content__messages__item {{#if isAuthor}}chat-content__messages__item_right{{/if}}">
                  {{{ChatMessage
                    text=text 
                    date=date
                    images=images
                    isAuthor=isAuthor
                    status=status
                  }}}
                </li>
              {{/items}}
            {{/chat.messages}}
          </ul>
          <footer class="chat-content__footer">
            {{{ChatDropdownBottom}}}

            {{{InputRounded ref="messageInput" title="Сообщение" onInput=onMessageInput}}}

            <div>
              {{#ButtonRounded onClick=onMessageSubmit}}
                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="5.19995" width="11" height="1.6" fill="white"/>
                  <path d="M7 1L11 6L7 11" stroke="white" stroke-width="1.6"/>
                </svg>
              {{/ButtonRounded}}
            </div>
          </footer>
        </div>
      </div>
    `
  }
}