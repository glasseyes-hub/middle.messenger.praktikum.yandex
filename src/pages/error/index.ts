import {Block} from '../../utils/Block';
import './index.scss'


type Props = {
  code: string
}

export class ErrorPage extends Block {
  constructor(props: Props) {
		super(props)
	}

  render() {
    // language=hbs
    return `
      {{#Page centered="true"}}
        <div class="error-message">
          <header class="error-message__header">
            <h1 class="error-message__title">{{code}}</h1>
            <span class="error-message__text">Мы уже фиксим</span>
          </header>
      
          {{{Link title="Назад к чатам" href="/" }}}
        </div>
      {{/Page}}
    `
  }
}