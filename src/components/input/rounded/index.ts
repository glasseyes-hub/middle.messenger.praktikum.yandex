import {InputComponent} from '../../input';
import './index.scss'

export class InputRoundedComponent extends InputComponent {
  render() {
    // language=hbs
    return `
      {{{Input
        class="input-rounded"
        type=type
        name=name
        value=value
        title=title
        placeholder=title
        click=onInputClick
        blur=onInputBlur
      }}}
    `
  }
}