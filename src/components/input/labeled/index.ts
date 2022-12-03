import {Block} from '../../../utils/Block';
import {InputComponent} from '../'
import './index.scss'
import  '../../../utils/validate'


type Props = {
  title: string,
  type: string,
  name: string,
  value: string,
  validate?: string
  onInput?(value: string):void
}

export class InputLabeledComponent extends Block {
  constructor(props: Props) {
    super({
      ...props,
      onValidate: ({isValid, error}:{isValid: boolean, error: string}) => {
        this.refs.error.setProps({show: !isValid, text: error})
      },
      onInput: props.onInput
    });
  }

  get value() {
    return (this.refs.input as InputComponent).value
  }

  get isValid() {
    return (this.refs.input as InputComponent).isValid
  }

  validate() {
    (this.refs.input as InputComponent).validate()
  }

  compareValue(value: string) {
   return (this.refs.input as InputComponent).compareValue(value)
  }

  render() {
    // language=hbs
    return `
      <label class="input-labeled">
        <span class="input-labeled__label" click=ontitleClick>{{title}}</span>
        {{{Input
          ref="input"
          type=type
          name=name
          value=value
          placeholder=title
          validate=validate
          onValidate=onValidate
          onInput=onInput
        }}}
        {{{InputError ref="error"}}}
      </label>
    `
  }
}