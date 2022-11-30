import {Block} from '../../utils/Block';
import './index.scss'


type Props = {
  color: string,
  href: string,
  title: string
}

export class LinkComponent extends Block {
  constructor(props: Props) {
    super(props);
  }

  render() {
    // language=hbs
    return `
    <a 
      class="link" 
      {{#if color}}style="color: {{color}} !important;"{{/if}} 
      href="{{href}}"
    >
      <span class="link__title">
        {{title}}
      </span>
      <div class="link__icon">
        <slot></slot>
      </div>
    </a>

    `
  }
}