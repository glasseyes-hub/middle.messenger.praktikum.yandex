import {Block} from '../../utils/Block';
import './index.scss'
import  '../../utils/validate'
import { validate, VALIDATE_ERRORS } from '../../utils/validate';
import {PASSWORD_COMPARE_ERROR} from  '../../constants/errors'


type Props = {
  title: string,
  type: string,
  name: string,
  value: string,
  error: string
  validate: string,
  onValidate?({isValid, error}:{isValid: boolean, error: string}):void
  onInput?(value: string):void
}

export class InputComponent extends Block {
  isValid = true

  constructor(props: Props) {
    super({
      ...props,
      events: {
        validate: () => {
          this.validate()
        },
        onInput: (event: Event) => {
          const input = event?.target as HTMLInputElement

          if(props.onInput) props.onInput(input.value)
        }
      }
    });
  }

  get value() {
    return (this.element as HTMLInputElement).value
  }

  validate(value?: string) {
    const input = this.element as HTMLInputElement
    const props = this.props as Props

    if(props.validate || value) {
      this.isValid = validate(props.validate, input.value)

      if(props.onValidate) props.onValidate({
        isValid: this.isValid, 
        error: !this.isValid ? VALIDATE_ERRORS[props.validate] : ''
      })
    }
  }

  compareValue(value: string) {
    const input = this.element as HTMLInputElement
    const props = this.props as Props
    const isSame  = input.value == value

    this.setProps({...this.props, value: input.value, error: !isSame})

    if(this.isValid)  {
      if(props.onValidate) props.onValidate({
        isValid: isSame, 
        error: !isSame ? PASSWORD_COMPARE_ERROR : ''
      })
    }

    return isSame
  }

  render() {
    // language=hbs
    return `
      <input
        class="input {{#if error}}input_error{{/if}}"
        type="{{type}}"
        name="{{name}}"
        value="{{value}}"
        placeholder="{{title}}"
        focus=validate
        blur=validate
        input=onInput
      />
    `
  }
}