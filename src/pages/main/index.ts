import {Block} from '../../utils/Block';


export class MainPage extends Block {
  render() {
    // language=hbs
    return `
      {{#Page centered=true}}
        Заглушка страницы чата
      {{/Page}}
    `
  }
}