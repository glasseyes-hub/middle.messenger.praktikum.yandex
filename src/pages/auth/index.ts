import {Block} from '../../utils/Block';


export class AuthPage extends Block {
  constructor() {
		super({
			login:"ivanivanov",
			password: "1234567890",
      // checkPassword: (value: string) => {
      //   if(validatePassword(value)) {
      //     console.log(value)
      //   } else {
      //     this.refs.password.setProps({value, error: true, errorMessage: 'Error'})
      //   }

      // }
		})
	}

  render() {
    // language=hbs
    return `
			{{#Page centered="true"}}
				{{#Card title="Вход"}}
					{{#CardContent}}
						{{#Form id="auth" method="post" }}
							{{{Input 
                title="Логин" 
                name="login" 
                value=login 
                errorMessage="Неверный логин"
              }}}
							{{{Input 
                ref="password" 
                title="Пароль" 
                type="password" 
                name="password" 
                value=password 
                validate="password"
              }}}
						{{/Form}}
					{{/CardContent}}
			
					{{#CardControls}}
						{{{ButtonSubmit title="Авторизоваться" form="auth" }}}
						{{{Link title="Нет аккаунта?" href="/registration" }}}
					{{/CardControls}}
				{{/Card}}
			{{/Page}}
    `
  }
}