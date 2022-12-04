import {Block} from '../../../utils/Block';
import './index.scss'


type Props = {
  form: string,
  title: string,
  error: string
  onClick?():void
}

export class ButtonSumbitComponent extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        onClick: props.onClick
      }
    });
  }

  render() {
    // language=hbs
    return `
      <div class="button_submit">
        <button class="button_submit__button" click=onClick>{{title}}</button>
        {{#if error}}
          <span class="button_submit__error">{{error}}</span>
        {{/if}}
      </div>
    `
  }
}