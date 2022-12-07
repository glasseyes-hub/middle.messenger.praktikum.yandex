// import {Block} from '../../../utils/Block';
import {InputLabeledComponent} from '../../../components/input/labeled'
import './index.scss'

export class ProfileInputComponent extends InputLabeledComponent {
  get isValid() {
    return (this.refs.inputLabeled as InputLabeledComponent).isValid
  }

  validate() {
    (this.refs.inputLabeled as InputLabeledComponent).validate()
  }

  compareValue(value: string) {
    return (this.refs.inputLabeled as InputLabeledComponent).compareValue(value)
   }

  render() {
    // language=hbs
    return `
      {{{InputLabeled
        ref="inputLabeled"
        class="profile__input" 
        title=title
        name=name 
        type=type
        value=value
        validate=validate
        disabled=disabled
        onInput=onInput
      }}}
    `
  }
}