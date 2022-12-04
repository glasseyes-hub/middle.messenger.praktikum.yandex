import {Block} from '../../utils/Block';
import './index.scss'

type Props = {
  text: string,
  show: boolean
  onClick?():void
}


export class ButtonComponent extends Block {
  constructor(props:Props) {
    super({
      ...props,
      events: {
        onClick: () => {
          if(props.onClick) props.onClick()
        }
      }
    })
  }

  render() {
    // language=hbs
    return `<button class="button {{#if active}}button_active{{/if}}" click=onClick></button>`
  }
}