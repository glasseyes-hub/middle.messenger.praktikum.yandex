type Chat = {
  id: number,
  avatar: string,
  name: string,
  author?: string,
  message: string,
  date: string,
  count?: number
  selected: boolean
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
