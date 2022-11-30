import {Block} from '../../../utils/Block';
import './index.scss'


type Props = {
  title: string,
  type: string,
  name: string,
  value: string,
  error: boolean,
  errorMessage: string
}

export class ChatMessageComponent extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        onInputClick() {
          console.log('input click')
        },
        ontitleClick() {
          console.log('title click')
        },
        onInputBlur(event: Event) {
          console.log('input blur', event)
        }
      }

    });

  }

  render() {
    // language=hbs
    return `
      <div class="chat-message__container">
        <div clas="chat-message__border"></div>

        <div class="chat-message {{#if selected}} chat-message_selected {{/if}}">
          <div>
            {{{AvatarSimple avatar="{{avatar}}"}}}
          </div>
          <div class="chat-message__content">
            <span class="chat-message__name">{{name}}</span>
            <p class="chat-message__message">
              {{#if author}}
                <span class="chat-message__message__author">{{author}}:</span>
              {{/if}}
              {{message}}
            </p>
          </div>
          <div class="chat-message__info">
            <span class="chat-message__info__date">{{date}}</span>
            {{#if count}}
              <div class="chat-message__info__count">{{count}}</div>  
            {{/if}}
          </div>
        </div>

        <div clas="chat-message__border"></div>
      </div>
    `
  }
}