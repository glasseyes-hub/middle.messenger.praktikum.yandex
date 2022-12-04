import {Block} from '../../../utils/Block';
import './index.scss'

type Props = {
  avatar: string,
  showModal: boolean,
  modalError: string,
  submitError: string
}
export class ProfileAvatarComponent extends Block {
  file: File

  constructor(props:Props) {
    super({
      ...props,
      events: {
        onAvatarClick: () => {
          this.setProps({...this.props, showModal: !this.props.showModal})
        }
      },
      onFileSelect: (file: File) => {
        this.file = file
      },
      onAvatarSubmit: () => {
        if(this.file) {
          console.log({
            file: this.file
          })
          
          this.setProps({...this.props, showModal: !this.props.showModal})
        }
      }
    })
  }

  render() {
    // language=hbs
    return `
      <div>
        {{#Modal 
          title="Загрузите файл" 
          show=showModal 
          error=modalError
        }}
          {{#Form}}
            {{{InputFile 
              name="avatar" 
              title="Выбрать файл на компьютере" 
              onInput=onFileSelect
            }}}
          {{/Form}}
          {{{ButtonSubmit 
            title="Поменять" 
            error=submitError
            onClick=onAvatarSubmit
          }}}
        {{/Modal}}
        
        <div class="profile-avatar" click=onAvatarClick>
          <svg
            width="40"
            height="40"
            viewBox="0 0 40 40"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fill-rule="evenodd"
              clip-rule="evenodd"
              d="M36 2H4C2.89543 2 2 2.89543 2 4V25.2667L14.6547 22.3139C15.5486 22.1053 16.4635 22 17.3814 
              22H22.6186C23.5365 22 24.4514 22.1053 25.3453 22.3139L38 25.2667V4C38 2.89543 37.1046 2 36 
              2ZM4 0C1.79086 0 0 1.79086 0 4V36C0 38.2091 1.79086 40 4 40H36C38.2091 40 40 38.2091 40 36V4C40 
              1.79086 38.2091 0 36 0H4ZM10.9091 14.5455C12.9174 14.5455 14.5455 12.9174 14.5455 
              10.9091C14.5455 8.90079 12.9174 7.27273 10.9091 7.27273C8.90082 7.27273 7.27276 8.90079 7.27276 
              10.9091C7.27276 12.9174 8.90082 14.5455 10.9091 14.5455Z"
              fill="#CDCDCD"
            ></path>
          </svg>
        </div>
      </div>
    `
  }
}