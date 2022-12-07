type UserLogin = {
  login:string
  password:string
}
  
type UserRegistration = {
  email: string
  login: string
  first_name: string
  second_name: string
  phone: string
  password: string
  password_repeat: string
}

type UserData = {
  email: string
  login: string
  first_name: string
  second_name: string
  display_name: string
  phone: string
}

type UserPasswordChangeData = {
  password:string
  password_new:string
  password_new_repeat:string
}

type UserAvatarChangeData = {
  file:File
}
