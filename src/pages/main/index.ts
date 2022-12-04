import {Block} from '../../utils/Block';
import './index.scss'
import {InputRoundedComponent} from '../../components/input/rounded'


export class MainPage extends Block {
  message: string

  constructor() {
    super({
      title: 'Вадим',
      chats: [
        {
          id: 1,
          avatar: '',
          name: 'Андрей',
          message: 'Изображение',
          date: '10:49',
          count: 2
        },{
          id: 2,
          avatar: '',
          name: 'Киноклуб',
          author: 'Вы',
          message: 'Изображение',
          date: '12:00',
        },{
          id: 3,
          avatar: '',
          name: 'Илья',
          message: 'Друзья, у меня для вас особенный выпуск новостей! Друзья, у меня для',
          date: '15:12',
          count: 4
        },{
          id: 4,
          avatar: '',
          name: 'Вадим',
          author: 'Вы',
          message: 'Круто!',
          date: 'Пт',
          selected: true
        },{
          id: 5,
          avatar: '',
          name: 'тет-а-теты',
          message: 'И Human Interface Guidelines и Material Design рекомендуют трали вали трали вали',
          date: 'Ср',
        },{
          id: 6,
          avatar: '',
          name: '1, 2, 3',
          message: 'Миллионы россиян ежедневно проводят десятки часов своего времени за просмотром',
          date: 'Пн',
        },{
          id: 7,
          avatar: '',
          name: 'Design Destroyer',
          message: 'В 2008 году художник Jon Rafman  начал собирать пожеванные жевачки и собрал',
          date: 'Пн',
        },{
          id: 8,
          avatar: '',
          name: 'Day.',
          message: 'Так увлёкся работой по курсу, что совсем забыл его анонсировать',
          date: '1 Мая 2020',
        },{
          id: 9,
          avatar: '',
          name: 'Стас Рогозин',
          message: 'Можно или сегодня или завтра вечером.',
          date: '12 Апр 2020',
        },{
          id: 10,
          avatar: '',
          name: 'Андрей',
          message: 'Изображение',
          date: '10:49',
          count: 2
        },{
          id: 11,
          avatar: '',
          name: 'Киноклуб',
          author: 'Вы',
          message: 'Изображение',
          date: '12:00',
        },{
          id: 12,
          avatar: '',
          name: 'Илья',
          message: 'Друзья, у меня для вас особенный выпуск новостей! Друзья, у меня для',
          date: '15:12',
          count: 4
        },{
          id: 13,
          avatar: '',
          name: 'Вадим',
          author: 'Вы',
          message: 'Круто!',
          date: 'Пт',
        },
      ],
      messages: [
        {
          date: '18 июня',
          items: [
            {
              id: 1,
              isAuthor: false,
              text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.\n\nХассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
              images: [],
              date: '11:56',
              status: 0
            },{
              id: 2,
              isAuthor: false,
              text: '',
              images: [
                'https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg', 
              ],
              date: '11:58',
              status: 0,
            },{
              id: 3,
              isAuthor: true,
              text: 'Круто!',
              images: [],
              date: '12:00',
              status: 2,
            }
          ]
        },
        {
          date: '19 июня',
          items: [
            {
              id: 1,
              isAuthor: false,
              text: 'Привет! Смотри, тут всплыл интересный кусок лунной космической истории — НАСА в какой-то момент попросила Хассельблад адаптировать модель SWC для полетов на Луну. Сейчас мы все знаем что астронавты летали с моделью 500 EL — и к слову говоря, все тушки этих камер все еще находятся на поверхности Луны, так как астронавты с собой забрали только кассеты с пленкой.\n\nХассельблад в итоге адаптировал SWC для космоса, но что-то пошло не так и на ракету они так никогда и не попали. Всего их было произведено 25 штук, одну из них недавно продали на аукционе за 45000 евро.',
              images: [],
              date: '11:56',
              status: 0
            },{
              id: 2,
              isAuthor: false,
              text: '',
              images: [
                'https://www.seiu1000.org/sites/main/files/main-images/camera_lense_0.jpeg', 
              ],
              date: '11:58',
              status: 0,
            },{
              id: 3,
              isAuthor: true,
              text: 'Круто!',
              images: [],
              date: '12:00',
              status: 2,
            }
          ]
        }
      ],
      onMessageInput: (message: string) => {
        this.message = message
      },
      onMessageSubmit: () => {
        if(this.message) {
          (this.refs.messageInput as InputRoundedComponent).value = ''

          console.log({
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
              {{{Avatar size="small"}}}
              <span class="chat-content__info__title">{{title}}</span>
            </div>

            {{{ChatDropdownTop}}}
          </header>
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