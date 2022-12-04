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


export class AuthController {
  static login(data: UserLogin) {
    console.log(data)
  }

  static registration(data: UserRegistration) {
    console.log(data)
  }
}