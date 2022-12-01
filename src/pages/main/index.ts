import {Block} from '../../utils/Block';
import './index.scss'


export class MainPage extends Block {
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
      ]
    })
  }

  render() {
    // language=hbs
    return `
      <div class="chat">
        {{#Modal show=true title="Добавить пользователя"}}
          {{#Form id="changeLogin"}}
            {{{Input title="Логин" name="login" value="ivanivanov"}}}
          {{/Form}}
          {{{ButtonSubmit form="changeLogin" title="Добавить"}}}
        {{/Modal}}

        <aside class="chat-sidebar">
          <header class="chat-sidebar__header">
            <div class="chat-sidebar__profile">
              {{#Link title="Профиль" href="/profile" color="#999999"}}
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
                {{{ChatMenuItem 
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
              {{{AvatarSimple size="small"}}}
              <span class="chat-content__info__title">{{title}}</span>
            </div>
            <div class="chat-content__dropdown">
              {{#Button active=true}}
                <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <circle cx="1.5" cy="2" r="1.5" fill="#1E1E1E"/>
                  <circle cx="1.5" cy="8" r="1.5" fill="#1E1E1E"/>
                  <circle cx="1.5" cy="14" r="1.5" fill="#1E1E1E"/>
                </svg>
              {{/Button}}
              {{#Menu show=true position="top"}}
                {{#MenuItem title="Добавить пользователя"}}
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="10.25" stroke="#3369F3" stroke-width="1.5"/>
                    <line x1="10.9999" y1="5.5" x2="10.9999" y2="16.5" stroke="#3369F3" stroke-width="1.5"/>
                    <line x1="5.49988" y1="11" x2="16.4999" y2="11" stroke="#3369F3" stroke-width="1.5"/>
                  </svg>
                {{/MenuItem}}
                {{#MenuItem title="Удалить пользователя"}}
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="11" cy="11" r="10.25" stroke="#3369F3" stroke-width="1.5"/>
                    <line x1="7.11077" y1="7.11103" x2="14.8889" y2="14.8892" stroke="#3369F3" stroke-width="1.5"/>
                    <line x1="7.11078" y1="14.8891" x2="14.889" y2="7.11093" stroke="#3369F3" stroke-width="1.5"/>
                  </svg>
                {{/MenuItem}}
              {{/Menu}}
            </div>
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
            <div class="chat-content__dropdown">
              {{#Button}}
                <svg width="30" height="30" viewBox="0 0 30 30" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M6.18662 12.5L13.7628 4.92389L14.7056
                  5.8667L7.12943 13.4428L6.18662 12.5Z" fill="#999999"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70067 15.0141L16.2768 7.43793L17.2196
                  8.38074L9.64348 15.9569L8.70067 15.0141Z" fill="#999999"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M14.0433 20.3567L21.6195 12.7806L22.5623
                  13.7234L14.9861 21.2995L14.0433 20.3567Z" fill="#999999"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5574 22.8708L24.1335 15.2946L25.0763
                  16.2374L17.5002 23.8136L16.5574 22.8708Z" fill="#999999"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M16.5574 22.8709C13.9423 25.486 9.71181
                  25.4954 7.10831 22.8919C4.50482 20.2884 4.51424 16.0579 7.12936 13.4428L6.18655 12.5C3.0484
                    15.6381 3.0371 20.7148 6.16129 23.839C9.28549 26.9632 14.3621 26.9518 17.5003 23.8137L16.5574
                    22.8709Z" fill="#999999"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M21.6195 12.7806L22.5623 13.7234C25.003
                  11.2826 25.0118 7.3341 22.5819 4.90417C20.152 2.47424 16.2035 2.48303 13.7627 4.92381L14.7055
                    5.86662C16.6233 3.94887 19.7257 3.94196 21.6349 5.85119C23.5441 7.76042 23.5372 10.8628
                    21.6195 12.7806Z" fill="#999999"/>
                  <path fill-rule="evenodd" clip-rule="evenodd" d="M8.70092 15.0144C6.95751 16.7578 6.95123
                  19.5782 8.68689 21.3138C10.4226 23.0495 13.2429 23.0432 14.9863 21.2998L14.0435 20.357C12.8231
                    21.5774 10.8489 21.5818 9.63391 20.3668C8.41894 19.1518 8.42334 17.1776 9.64373 15.9572L8.70092
                    15.0144Z" fill="#999999"/>
                </svg>
              {{/Button}}
              {{#Menu show=true position="bottom"}}
                {{#MenuItem title="Фото или Видео"}}
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1.5H18C19.3807 1.5 20.5 2.61929 20.5 4V14L14.5194 12.4052C13.5108 12.1362 12.4714 12 11.4275 12H10.5725C9.52864 12 8.48921 12.1362 7.48057 12.4052L1.5 14V4C1.5 2.61929 2.61929 1.5 4 1.5ZM0 4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V18C22 20.2091 20.2091 22 18 22H4C1.79086 22 0 20.2091 0 18V4ZM8 6C8 7.10457 7.10457 8 6 8C4.89543 8 4 7.10457 4 6C4 4.89543 4.89543 4 6 4C7.10457 4 8 4.89543 8 6Z" fill="#3369F3"/>
                  </svg>    
                {{/MenuItem}}
                {{#MenuItem title="Файл"}}
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M4 1.5H18C19.3807 1.5 20.5 2.61929 20.5 4V12H16C13.7909 12 12 13.7909 12 16V20.5H4C2.61929 20.5 1.5 19.3807 1.5 18V4C1.5 2.61929 2.61929 1.5 4 1.5ZM12 22H4C1.79086 22 0 20.2091 0 18V4C0 1.79086 1.79086 0 4 0H18C20.2091 0 22 1.79086 22 4V12V18C22 20.2091 20.2091 22 18 22H12Z" fill="#3369F3"/>
                  </svg>
                {{/MenuItem}}
                {{#MenuItem title="Локация"}}
                  <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                    <path fill-rule="evenodd" clip-rule="evenodd" d="M20.5 11C20.5 16.2467 16.2467 20.5 11 20.5C5.75329 20.5 1.5 16.2467 1.5 11C1.5 5.75329 5.75329 1.5 11 1.5C16.2467 1.5 20.5 5.75329 20.5 11ZM22 11C22 17.0751 17.0751 22 11 22C4.92487 22 0 17.0751 0 11C0 4.92487 4.92487 0 11 0C17.0751 0 22 4.92487 22 11ZM11 14C12.6569 14 14 12.6569 14 11C14 9.34315 12.6569 8 11 8C9.34315 8 8 9.34315 8 11C8 12.6569 9.34315 14 11 14Z" fill="#3369F3"/>
                  </svg>
                {{/MenuItem}}
              {{/Menu}}
            </div>

            {{{InputRounded title="Сообщение" round="full"}}}
              {{#ButtonRounded}}
                <svg width="13" height="12" viewBox="0 0 13 12" fill="none" xmlns="http://www.w3.org/2000/svg">
                  <rect y="5.19995" width="11" height="1.6" fill="white"/>
                  <path d="M7 1L11 6L7 11" stroke="white" stroke-width="1.6"/>
                </svg>
              {{/ButtonRounded}}
          </footer>
        </div>
      </div>
    `
  }
}