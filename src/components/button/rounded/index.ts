import {Block} from '../../../utils/Block';
import './index.scss'


type Props = {
  href: string,
}

export class ButtonRoundedComponent extends Block {
  constructor(props: Props) {
    super(props);
  }

  render() {
    // language=hbs
    return `<a class="button_rounded" href="{{href}}"></a>`
  }
}