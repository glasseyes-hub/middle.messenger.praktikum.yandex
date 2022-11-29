import {Block} from '../../../utils/Block';
import './index.scss'

type Props = {
  title: string,
  name: string,
  type: string,
  value: string,
  disabled: boolean,
}

export class ProfileInputComponent extends Block {
  constructor(props: Props) {
    super(props);
  }

  render() {
    // language=hbs
    return `
      {{#ProfileLine}}
        <h3>{{title}}</h3>
        <input 
          class="profile__input" 
          name="{{name}}" 
          type="{{type}}" 
          value="{{value}}" 
          {{#if disabled}}disabled{{/if}} 
        />
      {{/ProfileLine}}
    
    `
  }
}