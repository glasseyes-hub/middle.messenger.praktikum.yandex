import {Block} from '../../utils/Block';


export class RegistrationPage extends Block {
  constructor() {
		super({
			email:"email@email.ru",
			login:"ivanivanov",
			first_name: "Ivan",
			second_name: "Ivanov",
			phone: "1234567890",
			password: "1234567890",
			password_repeat: "1234567890",
		})
	}

  render() {
    // language=hbs
    return `
      {{#Page centered="true"}}
        {{#Card title="Регистрация"}}
          {{#CardContent}}
            {{#Form id="registration" method="post"}}
              {{{Input 
                title="Почта" 
                name="email" 
                type="text" 
                value=email
              }}}
              {{{Input 
                title="Логин" 
                name="login" 
                type="text" 
                value=login
              }}}
              {{{Input 
                title="Имя" 
                name="first_name" 
                type="text" 
                value=first_name
              }}}
              {{{Input 
                title="Фамилия" 
                name="second_name" 
                type="text" 
                value=second_name
              }}}
              {{{Input 
                title="Телефон" 
                name="phone" 
                type="text" 
                value=phone
              }}}
              {{{Input 
                title="Пароль" 
                name="password" 
                type="password" 
                value=password 
                error="true"
              }}}
              {{{Input 
                title="Пароль (еще раз)" 
                name="password_repeat" 
                type="password" 
                value=password_repeat 
                error="true"
                errorMessage="Неверный логин"
              }}}
            {{/Form}}
          {{/CardContent}}
      
          {{#CardControls}}
            {{{ButtonSubmit 
              form="registration" 
              title="Зарегистрироваться"
              href="/"
            }}}
            {{{Link title="Войти" href="/auth" }}}
          {{/CardControls}}
        {{/Card}}
      {{/Page}}
    `
  }
}