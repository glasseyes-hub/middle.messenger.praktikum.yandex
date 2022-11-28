import {Block} from '../../utils/Block';
import './index.scss'


type Props = {
  id: string,
  method: string,
  action: string,
  enctype: string
}

export class FormComponent extends Block {
  constructor(props: Props) {
    super(props);
  }

  render() {
    // language=hbs
    return `
      <form 
        class="form" 
        id="{{id}}" 
        method="{{method}}" 
        action="{{action}}" 
        enctype="{{enctype}}"
      ></form>
    `
  }
}