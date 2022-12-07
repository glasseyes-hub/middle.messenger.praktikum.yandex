import {Block} from '../../utils/Block';
import './index.scss'
import {router} from '../../router'


type Props = {
  color: string,
  to: string,
  title: string
}

export class LinkComponent extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        onClick: () => {
          router.push(props.to)
        }
      }
    });
  }

  render() {
    // language=hbs
    return `
    <div 
      class="link" 
      {{#if color}}style="color: {{color}} !important;"{{/if}} 
      click=onClick
    >
      <span class="link__title">
        {{title}}
      </span>
      <div class="link__icon">
        <slot></slot>
      </div>
    </div>

    `
  }
}