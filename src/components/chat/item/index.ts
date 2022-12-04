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

export class ChatItemComponent extends Block {
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
      <div class="chat-item__container">
        <div clas="chat-item__border"></div>

        <div class="chat-item {{#if selected}} chat-item_selected {{/if}}">
          <div>
            {{{Avatar avatar="{{avatar}}"}}}
          </div>
          <div class="chat-item__content">
            <span class="chat-item__name">{{name}}</span>
            <p class="chat-item__message">
              {{#if author}}
                <span class="chat-item__message__author">{{author}}:</span>
              {{/if}}
              {{message}}
            </p>
          </div>
          <div class="chat-item__info">
            <span class="chat-item__info__date">{{date}}</span>
            {{#if count}}
              <div class="chat-item__info__count">{{count}}</div>  
            {{/if}}
          </div>
        </div>

        <div clas="chat-item__border"></div>
      </div>
    `
  }
}