import {Block} from '../../../utils/Block';
import './index.scss'


type Props = {
  title: string,
  type: string,
  name: string,
  value: string,
  error: boolean,
  errorMessage: string
}

export class InputRoundedComponent extends Block {
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
    return `
    <input
      class="
        input-rounded 
        {{#if round}}input-rounded_{{round}}{{/if}}
        {{#if error}}input-rounded_error{{/if}} 
      "
      type="{{type}}"
      name="{{name}}"
      value="{{value}}"
      placeholder="{{title}}"
      click=onInputClick
      blur=onInputBlur
    />
    `
  }
}