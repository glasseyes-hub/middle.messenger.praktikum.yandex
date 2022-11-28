import {Block} from '../../utils/Block';


export class AuthPage extends Block {
  constructor() {
		super({
			login:"ivanivanov",
			password: "1234567890",
		})
	}

  render() {
    // language=hbs
    return `
			{{#Page centered="true"}}
				{{#Card title="Вход"}}
					{{#CardContent}}
						{{#Form id="auth" method="post" }}
							{{{Input title="Логин" name="login" value=login errorMessage="Неверный логин"}}}
							{{{Input title="Пароль" type="password" name="password" value=password}}}
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