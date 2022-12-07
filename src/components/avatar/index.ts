import {Block} from '../../utils/Block';
import './index.scss'


export class AvatarComponent extends Block {
  render() {
    // language=hbs
    return `
      <div class="avatar {{#if size}}avatar_{{size}}{{/if}} ">
        <img src="{{src}}" alt="{{alt}}">
      </div>
    `
  }
}