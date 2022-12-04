import {Block} from '../../utils/Block';
import {ProfileController} from '../../controllers/ProfileController'


export class ProfilePage extends Block {
  constructor() {
    const data = ProfileController.get()

		super(data)
	}

  render() {
    // language=hbs
    return `
      {{#ProfileContainer displayName=display_name backLink="/"}}
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
          {{{ProfileInput 
            title="Телефон"
            name="phone" 
            value=phone 
            disabled=true
          }}}
        {{/ProfileContainerBlock}}
      
        {{#ProfileContainerBlock}}
          {{{ProfileLink 
            title="Изменить данные" 
            to="/profile/edit/data"
          }}}
          {{{ProfileLink 
            title="Изменить пароль" 
            to="/profile/edit/password"
          }}}
          {{{ProfileLink 
            title="Выйти" 
            to="/logout" 
            color="#FF0000"
          }}}
        {{/ProfileContainerBlock}}
      {{/ProfileContainer}}
    `
  }
}