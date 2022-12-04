type Chat = {
    id: number,
    avatar: string,
    name: string,
    author?: string,
    message: string,
    date: string,
    count?: number
    selected?: boolean
}

type ChatMessage = {
  id: number,
  isAuthor: boolean,
  text: string,
  images: string[],
  date: string,
  status: number,
}

type ChatMessages = {
  date: string,
  items: ChatMessage[],
}

type ChatData = {
  id: number,
  title:string,
  messages: ChatMessages[]
}

type SendMessageData = {
  message: string
}

type AddUserToChatData = {
  login: string
}


export class ChatController {
  static getChats(): Chat[] {
    const data = [
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
    ]

    return data
  }

  static getChatData(id: number): ChatData  {
    const data = {
      id: id,
      title: 'Вадим',
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
    }

    return data
  }

  static sendMessage(data: SendMessageData) {
    console.log(data)
  }

  static addUserToChat(data: AddUserToChatData) {
    console.log(data)
  }
}