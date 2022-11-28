import {Block} from '../../../utils/Block';
import './index.scss'


type Props = {
  form: string,
  title: string,
  error: string
}

export class ButtonSumbitComponent extends Block {
  constructor(props: Props) {
    super(props);
  }

  render() {
    // language=hbs
    return `
      <div class="button_submit">
        <button
          class="button_submit__button"
          type="submit"
          form="{{form}}"
        >{{title}}</button>
        {{#if error}}
          <span class="button_submit__error">{{error}}</span>
        {{/if}}
      </div>
    `
  }
}