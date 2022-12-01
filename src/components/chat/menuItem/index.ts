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

export class ChatMenuItemComponent extends Block {
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
      <div class="chat-menu-item__container">
        <div clas="chat-menu-item__border"></div>

        <div class="chat-menu-item {{#if selected}} chat-menu-item_selected {{/if}}">
          <div>
            {{{AvatarSimple avatar="{{avatar}}"}}}
          </div>
          <div class="chat-menu-item__content">
            <span class="chat-menu-item__name">{{name}}</span>
            <p class="chat-menu-item__message">
              {{#if author}}
                <span class="chat-menu-item__message__author">{{author}}:</span>
              {{/if}}
              {{message}}
            </p>
          </div>
          <div class="chat-menu-item__info">
            <span class="chat-menu-item__info__date">{{date}}</span>
            {{#if count}}
              <div class="chat-menu-item__info__count">{{count}}</div>  
            {{/if}}
          </div>
        </div>

        <div clas="chat-menu-item__border"></div>
      </div>
    `
  }
}