type ProfileData = {
    email: string
    login: string
    first_name: string
    second_name: string
    display_name: string
    phone: string
}

type PasswordChangeData = {
  password:string
  password_new:string
  password_new_repeat:string
}

type AvatarChangeData = {
  file:File
}


export class ProfileController {
  static get(): ProfileData {
    const data = {
      email: "pochta@yandex.ru", 
      login: "ivanivanov", 
      first_name: "Иван", 
      second_name: "Иванов", 
      display_name: 'Иван', 
      phone: '+7 (909) 967 30 30', 
    }

    return data
  }

  static update(data: ProfileData) {
    console.log(data)
  }

  static changePassword(data: PasswordChangeData) {
    console.log(data)
  }

  static changeAvatar(data: AvatarChangeData) {
    console.log(data)
  }
}