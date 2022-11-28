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

export class InputComponent extends Block {
  constructor(props: Props) {
    super(props);
  }

  render() {
    // language=hbs
    return `
      <label class="input">
        <span class="input__label">{{title}}</span>
        <input
          class="input__value {{#if error}}input__value_error{{/if}}"
          type="{{type}}"
          name="{{name}}"
          value="{{value}}"
          placeholder="{{title}}"
        />
        <span class="input__warning">{{errorMessage}}</span>
      </label>
    `
  }
}