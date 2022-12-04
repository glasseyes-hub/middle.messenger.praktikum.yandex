import {Block} from '../../utils/Block';
import './index.scss'

type Props = {
  show: boolean,
  error: boolean,
  title: string,
}

export class ModalComponent extends Block {
  constructor(props: Props) {
    super(props);
  }

  render() {
    // language=hbs
    return `
      <div class="modal {{#if show}}modal_show{{/if}}">
        <div class="modal__container">
          <h3 class="modal__container__title {{#if error}}modal__container__title_error{{/if}}">
            {{#if error}} {{error}}
            {{else}} {{title}}
            {{/if}}
          </h3>
          <div class="modal__content">
            <slot></slot>
          </div>
        </div>
      </div>
    `
  }
}