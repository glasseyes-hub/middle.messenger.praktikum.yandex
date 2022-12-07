import {Block} from '../../../../utils/Block';
import {ProfileInputComponent} from '../../../../components/profile/input'
import {ProfileController} from '../../../../controllers/ProfileController'


export class ProfileEditDataPage extends Block {
  email: string
  login: string
  first_name:  string
  second_name:  string
  display_name: string
  phone: string

  constructor() {
    const data = ProfileController.get()

		super({
      ...data,
      onSubmit: () => {
        let isFormValid = true;

        for(const InputLabeled of Object.values(this.refs)) {
          const input = InputLabeled as ProfileInputComponent

          input.validate()


          if(!input.isValid) {
            isFormValid = false
          }
        }

        if(isFormValid) {
          ProfileController.update({
            email: this.email ?? this.props.email,
            login: this.login ?? this.props.login,
            first_name: this.first_name ?? this.props.first_name,
            second_name: this.second_name ?? this.props.second_name,
            display_name: this.display_name ?? this.props.display_name,
            phone: this.phone ?? this.props.phone,
          })
        }
      },
      onEmailChange: (email: string) => {
        this.email = email
      },
      onLoginChange: (login: string) => {
        this.login = login
      },
      onFirstNameChange: (first_name: string) => {
        this.first_name = first_name
      },
      onSecondNameChange: (second_name: string) => {
        this.second_name = second_name
      },
      onPhoneChange: (phone: string) => {
        this.phone = phone
      },
		})
	}

  render() {
    // language=hbs
    return `
      {{#ProfileContainer displayName=display_name backLink="/profile" }}
        {{#Form }}
          {{#ProfileContainerBlock}}
            {{{ProfileInput 
              ref="email"
              title="Почта" 
              name="email" 
              value=email
              validate="email"
              onInput=onEmailChange
            }}}
            {{{ProfileInput 
              ref="login"
              title="Логин" 
              name="login" 
              value=login
              validate="login"
              onInput=onLoginChange
            }}}
            {{{ProfileInput 
              ref="first_name"
              title="Имя" 
              name="first_name" 
              value=first_name
              validate="name"
              onInput=onFirstNameChange
            }}}
            {{{ProfileInput 
              ref="second_name"
              title="Фамилия" 
              name="second_name" 
              value=second_name
              validate="name"
              onInput=onSecondNameChange
            }}}
            {{{ProfileInput 
              ref="display_name"
              title="Имя в чате" 
              name="display_name" 
              value=display_name
              validate="name"
              onInput=onDisplayNameChange
            }}}
            {{{ProfileInput 
              ref="phone"
              title="Телефон" 
              name="phone" 
              value=phone
              validate="phone"
              onInput=onPhoneChange
            }}}
            {{/ProfileContainerBlock}}
          {{/Form}}

        {{{ButtonSubmit title="Сохранить" onClick=onSubmit}}}
      {{/ProfileContainer}}
    `
  }
}