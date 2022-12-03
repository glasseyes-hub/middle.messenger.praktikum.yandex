import {Block} from '../../utils/Block';
import {InputLabeledComponent} from '../../components/input/labeled'

export class AuthPage extends Block {
  login:string
  password:string

  constructor() {
		super({
      onSubmit: () => {
        let isFormValid = true;

        for(const inputLabeled of Object.values(this.refs)) {
          const input = inputLabeled as InputLabeledComponent

          input.validate()

          if(!input.isValid) {
            isFormValid = false
          }
        }

        if(isFormValid) {
          console.log({
            login: this.login,
            password: this.password
          })

        }
      },
      onLoginChange: (login: string) => {
        this.login = login
      },
      onPasswordChange: (password: string) => {
        this.password = password
      }
		})
	}

  render() {
    // language=hbs
    return `
			{{#Page centered="true"}}
				{{#Card title="Вход"}}
					{{#CardContent}}
						{{#Form}}
							{{{InputLabeled 
                ref="login" 
                title="Логин" 
                name="login" 
                validate="login"
                onInput=onLoginChange
              }}}
							{{{InputLabeled 
                ref="password" 
                title="Пароль" 
                type="password" 
                name="password" 
                validate="password"
                onInput=onPasswordChange
              }}}
						{{/Form}}
					{{/CardContent}}
			
					{{#CardControls}}
						{{{ButtonSubmit title="Авторизоваться" onClick=onSubmit }}}
						{{{Link title="Нет аккаунта?" to="/registration" }}}
					{{/CardControls}}
				{{/Card}}
			{{/Page}}
    `
  }
}