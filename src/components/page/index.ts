import {Block} from '../../utils/Block';
import './index.scss'


type Props = {
  centered: boolean
}

export class PageComponent extends Block {
  constructor(props: Props) {
    super(props);
  }

  render() {
    // language=hbs
    return `
      <div 
        class="page 
        {{#if centered}}page_centered{{/if}}"
      ></div>
    `
  }
}