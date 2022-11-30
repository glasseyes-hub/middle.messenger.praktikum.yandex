import {Block} from '../../../utils/Block';
import './index.scss'


export class AvatarSimpleComponent extends Block {
  render() {
    // language=hbs
    return `
      <div class="avatar-simple {{#if size}}avatar-simple_{{size}}{{/if}} ">
        <img src="{{src}}" alt="{{alt}}">
      </div>
    `
  }
}