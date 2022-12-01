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
      <div class="chat-message {{#if isAuthor}}chat-message_author{{/if}}">
        <div class="chat-message__content">
          {{#if text}}
            <p class="chat-message__text">{{text}}</p>
          {{/if}}
          {{#if images}}
            <ul class="chat-message__images">
              {{#images}}
                <li class="chat-message__images__item">
                  <img class="chat-message__image" src="{{this}}" alt="Girl in a jacket">
                </li>
              {{/images}}
            </ul>
          {{/if}}
        </div>
        
        <div class="
          chat-message__info 
          {{#ifEquals status 2}}chat-message__info_readed{{/ifEquals}}
          {{#ifEquals status 1}}chat-message__info_delivered{{/ifEquals}}
        ">
          <svg class="chat-message__info__status" width="11" height="5" viewBox="0 0 11 5" fill="none" xmlns="http://www.w3.org/2000/svg">
            <line y1="-0.5" x2="3.765" y2="-0.5" transform="matrix(0.705933 0.708278 -0.705933 0.708278 0.700195 2.33313)" stroke="#3369F3"/>
            <line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 3.35828 5)" stroke="#3369F3"/>
            <line y1="-0.5" x2="5.6475" y2="-0.5" transform="matrix(0.705933 -0.708278 0.705933 0.708278 6.01587 5)" stroke="#3369F3"/>
          </svg>
          <span class="chat-message__date">{{date}}</span>
        </div>
      </div>
    `
  }
}