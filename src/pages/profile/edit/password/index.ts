import {Block} from '../../../../utils/Block';


export class ProfileEditPasswordPage extends Block {
  constructor() {
		super({
      password: '1234567890', 
		})
	}

  render() {
    // language=hbs
    return `
      {{#ProfileContainer displayName=display_name backLink="/profile" }}
        {{#ProfileContainerBlock}}
          {{#Form id="editPassword" method="post"}}
            {{{ProfileInput 
              title="Старый пароль" 
              name="oldPassword" 
              type="password" 
              value=password
            }}}
            {{{ProfileInput 
              title="Новый пароль" 
              name="newPassword" 
              type="password"
            }}}
            {{{ProfileInput 
              title="Повторите новый пароль" 
              name="newPasswordRepeat" 
              type="password"
            }}}
          {{/Form}}
        {{/ProfileContainerBlock}}

        {{{ButtonSubmit title="Сохранить" form="editPassword"}}}
      {{/ProfileContainer}}
    `
  }
}