import {Block} from '../../../../utils/Block';


export class ProfileEditDataPage extends Block {
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
      {{#ProfileContainer displayName=display_name backLink="/profile" }}
        {{#ProfileContainerBlock}}
          {{#Form id="editData" method="post"}}
            {{{ProfileInput 
              title="Почта" 
              name="email" 
              value=email
              validate="email"
            }}}
            {{{ProfileInput 
              title="Логин" 
              name="login" 
              value=login
              validate="login"
            }}}
            {{{ProfileInput 
              title="Имя" 
              name="first_name" 
              value=first_name
              validate="name"
            }}}
            {{{ProfileInput 
              title="Фамилия" 
              name="second_name" 
              value=second_name
              validate="name"
            }}}
            {{{ProfileInput 
              title="Имя в чате" 
              name="display_name" 
              value=display_name
            }}}
            {{{ProfileInput 
              title="Телефон" 
              name="phone" 
              value=phone
              validate="phone"
            }}}
          {{/Form}}
        {{/ProfileContainerBlock}}

        {{{ButtonSubmit title="Сохранить" form="editData"}}}
      {{/ProfileContainer}}
    `
  }
}