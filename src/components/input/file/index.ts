import {Block} from '../../../utils/Block';
import './index.scss'

type Props = {
  file: string,
  title: string,
  type: string,
  name: string,
}

export class InputFileComponent extends Block {
  constructor(props: Props) {
    super(props);
  }

  render() {
    // language=hbs
    return `
      <div class="input-file {{#if file}}input-file_selected{{/if}}">
        <label class="input-file__label" for="{{name}}">
          {{#if file}} {{file}}
          {{else}} {{title}}
          {{/if}}
        </label>
        <input
          class="input-file__input"
          type="file"
          id="{{name}}"
          name="{{name}}"
          accept=".jpg, .jpeg, .png"
        />
      </div>
  
    `
  }
}