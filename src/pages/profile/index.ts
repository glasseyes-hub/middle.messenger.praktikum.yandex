import {Block} from '../../utils/Block';


export class ProfilePage extends Block {
  constructor() {
		super({
      email: "pochta@yandex.ru", 
      login: "ivanivanov", 
      first_name: "Иван", 
      second_name: "Иванов", 
      display_name: 'Иван', 
      phone: '+7 (909) 967 30 30', 
		})
	}

  render() {
    // language=hbs
    return `
      {{#ProfileContainer displayName=display_name backLink="/"}}
        {{#Modal 
          title="Загрузите файл" 
          show=false 
          error="Ошибка, попробуйте еще раз"
        }}
          {{#Form
            id="changeAvatar" 
            method="post" 
            enctype="multipart/form-data"
          }}
            {{{InputFile 
              name="avatar" 
              title="Выбрать файл на компьютере" 
              file="pic.jpg"
            }}}
          {{/Form}}
          {{{ButtonSubmit 
            title="Поменять" 
            form="changeAvatar" 
            error="Нужно выбрать файл"
          }}}
        {{/Modal}}
      
        {{#ProfileContainerBlock}}
          {{{ProfileInput 
            title="Почта" 
            name="email" 
            value=email 
            disabled=true
          }}}
          {{{ProfileInput 
            title="Логин" 
            name="login" 
            value=login 
            disabled=true
          }}}
          {{{ProfileInput 
            title="Имя" 
            name="first_name" 
            value=first_name 
            disabled=true
          }}}
          {{{ProfileInput 
            title="Фамилия" 
            name="second_name" 
            value=second_name 
            disabled=true
          }}}
          {{{ProfileInput 
            title="Имя в чате" 
            name="display_name" 
            value=display_name 
            disabled=true
          }}}
          {{{PprofileInput 
            title="Телефон"
            name="phone" 
            value=phone 
            disabled=true
          }}}
        {{/ProfileContainerBlock}}
      
        {{#ProfileContainerBlock}}
          {{{ProfileLink 
            title="Изменить данные" 
            href="/profile/edit/data"
          }}}
          {{{ProfileLink 
            title="Изменить пароль" 
            href="/profile/edit/password"
          }}}
          {{{ProfileLink 
            title="Выйти" 
            href="/logout" 
            color="#FF0000"
          }}}
        {{/ProfileContainerBlock}}
      {{/ProfileContainer}}
    `
  }
}