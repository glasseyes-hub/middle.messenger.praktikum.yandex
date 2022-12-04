import {Block} from '../../../../utils/Block';
import {ProfileInputComponent} from '../../../../components/profile/input'
import {ProfileController} from '../../../../controllers/ProfileController'


export class ProfileEditPasswordPage extends Block {
  password: string
  password_new: string
  password_new_repeat: string

  constructor() {
		super({
      onSubmit: () => {
        let passwordsIsSame = true;
        let isFormValid = true;

        for(const [name, InputLabeled] of Object.entries(this.refs)) {
          const input = InputLabeled as ProfileInputComponent

          input.validate()

          if(name === 'password_new') {
            passwordsIsSame = input.compareValue(this.password_new_repeat)
          }

          if(name === 'password_new_repeat') {
            passwordsIsSame = input.compareValue(this.password_new)
          }


          if(!input.isValid || !passwordsIsSame) {
            isFormValid = false
          }


          if(!input.isValid) {
            isFormValid = false
          }
        }

        if(isFormValid) {
          ProfileController.changePassword({
            password: this.password,
            password_new: this.password_new,
            password_new_repeat: this.password_new_repeat,
          })
        }
      },
      onPasswordChange: (password: string) => {
        this.password = password
      },
      onPasswordNewChange: (password_new: string) => {
        this.password_new = password_new
      },
      onPasswordNewRepeatChange: (password_new_repeat: string) => {
        this.password_new_repeat = password_new_repeat
      },
		})
	}

  render() {
    // language=hbs
    return `
      {{#ProfileContainer displayName=display_name backLink="/profile" }}
        {{#Form}}
          {{#ProfileContainerBlock}}
              {{{ProfileInput 
                title="Старый пароль" 
                name="password" 
                type="password" 
                value=password
                onInput=onPasswordChange
              }}}
              {{{ProfileInput 
                ref="password_new"
                title="Новый пароль" 
                name="newPassword" 
                type="password"
                validate="password"
                onInput=onPasswordNewChange
              }}}
              {{{ProfileInput 
                ref="password_new_repeat"
                title="Повторите новый пароль" 
                name="newPasswordRepeat" 
                type="password"
                validate="password"
                onInput=onPasswordNewRepeatChange
              }}}
          {{/ProfileContainerBlock}}
        {{/Form}}

        {{{ButtonSubmit title="Сохранить" onClick=onSubmit}}}
      {{/ProfileContainer}}
    `
  }
}