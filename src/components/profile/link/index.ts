import {Block} from '../../../utils/Block';

type Props = {
  title: string,
  to: string,
  color: string,
}

export class ProfileLinkComponent extends Block {
  constructor(props: Props) {
    super(props);
  }

  render() {
    // language=hbs
    return `
      {{#ProfileLine}}
        {{{Link 
          title=title 
          to=to 
          color=color
        }}}
      {{/ProfileLine}}
    `
  }
}