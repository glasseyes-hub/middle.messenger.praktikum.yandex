import {Block} from '../../../utils/Block';
import './index.scss'
import {ChatController} from '../../../controllers/ChatController'
import {InputRoundedComponent} from '../../input/rounded'


type Props = {
  id: number
}

export class ChatContentComponent extends Block {
  message: string

  constructor(props: Props) {
    super({
      ...props,
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
    });
  }

  loadMessages(id: number) {
    const data = ChatController.getChatData(id)

    this.setProps({...this.props, ...data, id})

  }

  scrollBottom() {
    setTimeout(() => {
      if(this.element) {
        this.element.scrollTop = this.element.scrollHeight
      }
    }, 100)
  }


  componentDidUpdate() {
    this.scrollBottom()
  }


  render() {
    // language=hbs
    return `
      <div  class="chat-content">
        <header class="chat-content__header">
          <div class="chat-content__info">
            {{{Avatar src=avatar size="small"}}}
            <span class="chat-content__info__title">{{title}}</span>
          </div>

          {{{ChatDropdownTop}}}
        </header>

        {{#if id}}
          {{#if messages.length}}
            <ul class="chat-content__messages">
              {{#messages}}
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
              {{/messages}}
            </ul>
          {{else}}
            <div class="chat-content__notify">Нет сообщений</div>
          {{/if}}
        {{else}}
          <div class="chat-content__notify">Выберите чат (4й с сообщениями)</div>    
        {{/if}}

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
    `
  }
}