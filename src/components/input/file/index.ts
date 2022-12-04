import {Block} from '../../../utils/Block';
import './index.scss'

type Props = {
  file: string,
  title: string,
  type: string,
  name: string,
  onInput?(file: File):void
}

export class InputFileComponent extends Block {
  constructor(props: Props) {
    super({
      ...props,
      events: {
        onInput: (event: Event) => {
          const input = event.target as HTMLInputElement

          if(input.files?.length) {
            if(props.onInput) {
              props.onInput(input.files[0])
            }

            this.setProps({...this.props, file: input.files[0].name})
          }
        }
      }
    });
  }

  render() {
    // language=hbs
    return `
      <div class="input-file {{#if file}}input-file_selected{{/if}}">
        <label class="input-file__label" for=name>
          {{#if file}} {{file}}
          {{else}} {{title}}
          {{/if}}
        </label>
        <input
          class="input-file__input"
          id=name
          type="file"
          name=name
          accept=".jpg, .jpeg, .png"
          input=onInput
        />
      </div>
  
    `
  }
}