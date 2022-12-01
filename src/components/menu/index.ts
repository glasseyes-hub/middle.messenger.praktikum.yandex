import {Block} from '../../utils/Block';
import './index.scss'


type Props = {
  title: string,
  type: string,
  name: string,
  value: string,
  error: boolean,
  errorMessage: string
}

export class MenuComponent extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        onInputClick() {
          console.log('input click')
        },
        ontitleClick() {
          console.log('title click')
        },
        onInputBlur(event: Event) {
          console.log('input blur', event)
        }
      }

    });

  }

  render() {
    // language=hbs
    return `<ul class="menu {{#if show}}menu_show{{/if}} {{#if position}}menu_{{position}}{{/if}}"></ul>`
  }
}