import {Block} from '../../utils/Block';
import './index.scss'
import  '../../utils/validate'
import { validate } from '../../utils/validate';
import {INCORRECT_PASSWORD} from '../../constant/errors'


type Props = {
  title: string,
  type: string,
  name: string,
  value: string,
  error: boolean,
  errorMessage: string
  validate?: string
}

export class InputComponent extends Block {
  private isError = false

  constructor(props: Props) {
    super({
      ...props,
      events: {
        validate: (event: Event) => {
          const input = (event.target as HTMLInputElement)

          if(this.isError) {
            this.refs.error.setProps({show: false})
            this.isError = false
          }

          if(props.validate && !validate(props.validate, input.value)) {
            this.refs.error.setProps({show: true, text: INCORRECT_PASSWORD})
            this.isError = true
          }
        }
      }
    });
    }

  render() {
    // language=hbs
    return `
      <label class="input">
        <span class="input__label" click=ontitleClick>{{title}}</span>
        <input
          class="input__value {{#if error}}input__value_error{{/if}}"
          type="{{type}}"
          name="{{name}}"
          value="{{value}}"
          placeholder="{{title}}"
          focus=validate
          blur=validate
        />
        {{{InputError ref="error"}}}
      </label>
    `
  }
}