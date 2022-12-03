import {Block} from '../../../utils/Block';
import './index.scss'
import {router} from '../../../router'


type Props = {
  to: string,
}

export class ButtonRoundedComponent extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        onClick: () => {
          if(props.to) {
            router.push(props.to)
          }
        }
      }
    });
  }

  render() {
    // language=hbs
    return `<div class="button_rounded" click=onClick></div>`
  }
}