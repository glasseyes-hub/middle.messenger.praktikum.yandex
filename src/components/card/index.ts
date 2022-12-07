import {Block} from '../../utils/Block';
import './index.scss'


type Props = {
  title: string
}

export class CardComponent extends Block {
  constructor(props: Props) {
    super(props);
  }

  render() {
    // language=hbs
    return `
      <div class="card">
        <h1 class="card__title">
          {{title}}
        </h1>
        <div class="card__container">
          <slot></slot>
        </div>
      </div>
    `
  }
}