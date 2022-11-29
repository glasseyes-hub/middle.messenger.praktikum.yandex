import {Block} from '../../../utils/Block';
import './index.scss'

type Props = {
  backLink: string,
  image: string,
  displayName: string,
}

export class ProfileContainerComponent extends Block {
  constructor(props: Props) {
    super(props);
  }

  render() {
    // language=hbs
    return `
      {{#Page}}
        {{{Sidebar href=backLink}}}
        <div class="profile">
          <header class="profile__header">
            {{{Avatar image=image}}}
            <h1 class="profile__header__title">{{displayName}}</h1>
          </header>
      
          <div class="profile__container">
            <slot></slot>
          </div>
        </div>
      {{/Page}}
    `
  }
}