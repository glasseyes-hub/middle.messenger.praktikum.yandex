import {Block} from '../../utils/Block';
import './index.scss'



export class ButtonComponent extends Block {
  render() {
    // language=hbs
    return `<button class="button {{#if active}}button_active{{/if}}"></button>`
  }
}