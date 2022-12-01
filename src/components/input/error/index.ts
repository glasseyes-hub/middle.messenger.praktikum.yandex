import {Block} from '../../../utils/Block';
import './index.scss'


type Props = {
  text: string,
  show: boolean
}

export class InputErrorComponent extends Block {
  constructor(props: Props) {
    super({...props, show: false});
  }

  render() {
    // language=hbs
    return `<span class="input-error {{#if show}}input-error_show{{/if}}">{{text}}</span>`
  }
}