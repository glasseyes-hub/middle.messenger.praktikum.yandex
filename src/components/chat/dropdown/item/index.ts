import {Block} from '../../../../utils/Block';
import './index.scss'


type Props = {
  title: string,
  onClick?():void
}

export class ChatDropdownItemComponent extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        onClick: () => {
          if(props.onClick) props.onClick()
        },
      }
    });
  }

  render() {
    // language=hbs
    return `
      <li class="chat-dropdown-item" click=onClick>
        <slot></slot>
        <span class="chat-dropdown-item__title">{{title}}</span>
      </li>
    `
  }
}