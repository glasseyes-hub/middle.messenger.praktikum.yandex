import {Block} from '../../utils/Block';
import {InputLabeledComponent} from '../../components/input/labeled'
import {AuthController} from '../../controllers/AuthController'


export class RegistrationPage extends Block {
  email: string
  login: string
  first_name: string
  second_name: string
  phone: string
  password: string
  password_repeat: string

  constructor() {
		super({
      onSubmit: () => {
        let passwordsIsSame = true;
        let isFormValid = true;

        for(const [name, InputLabeled] of Object.entries(this.refs)) {
          const input = InputLabeled as InputLabeledComponent

          input.validate()

          if(name === 'password') {
            passwordsIsSame = input.compareValue(this.password_repeat)
          }

          if(name === 'password_repeat') {
            passwordsIsSame = input.compareValue(this.password)
          }


          if(!input.isValid || !passwordsIsSame) {
            isFormValid = false
          }
        }

        if(isFormValid) {
          AuthController.registration({
            email: this.email,
            login: this.login,
            first_name: this.first_name,
            second_name: this.second_name,
            phone: this.phone,
            password: this.password,
            password_repeat: this.password_repeat
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
      onPasswordChange: (password: string) => {
        this.password = password
      },
      onPasswordRepeatChange: (password_repeat: string) => {
        this.password_repeat = password_repeat
      }
		})
	}

  render() {
    // language=hbs
    return `
      {{#Page centered="true"}}
        {{#Card title="??????????????????????"}}
          {{#CardContent}}
            {{#Form id="registration" method="post"}}
              {{{InputLabeled 
                ref="email" 
                title="??????????" 
                name="email" 
                type="text" 
                validate="email"
                onInput=onEmailChange
              }}}
              {{{InputLabeled 
                ref="login" 
                title="??????????" 
                name="login" 
                type="text" 
                validate="login"
                onInput=onLoginChange
              }}}
              {{{InputLabeled 
                ref="first_name" 
                title="??????" 
                name="first_name" 
                type="text" 
                validate="name"
                onInput=onFirstNameChange
              }}}
              {{{InputLabeled 
                ref="second_name" 
                title="??????????????" 
                name="second_name" 
                type="text" 
                validate="name"
                onInput=onSecondNameChange
              }}}
              {{{InputLabeled 
                ref="phone" 
                title="??????????????" 
                name="phone" 
                type="text" 
                validate="phone"
                onInput=onPhoneChange
              }}}
              {{{InputLabeled 
                ref="password" 
                title="????????????" 
                name="password" 
                type="password" 
                validate="password"
                onInput=onPasswordChange
              }}}
              {{{InputLabeled 
                ref="password_repeat" 
                title="???????????? (?????? ??????)" 
                name="password_repeat" 
                type="password" 
                validate="password"
                onInput=onPasswordRepeatChange
              }}}
            {{/Form}}
          {{/CardContent}}
      
          {{#CardControls}}
            {{{ButtonSubmit 
              title="????????????????????????????????????"
              onClick=onSubmit
            }}}
            {{{Link title="??????????" to="/auth" }}}
          {{/CardControls}}
        {{/Card}}
      {{/Page}}
    `
  }
}