export class ProfileController {
  static get(): UserData {
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

  static update(data: UserData) {
    console.log(data)
  }

  static changePassword(data: UserPasswordChangeData) {
    console.log(data)
  }

  static changeAvatar(data: UserAvatarChangeData) {
    console.log(data)
  }
}