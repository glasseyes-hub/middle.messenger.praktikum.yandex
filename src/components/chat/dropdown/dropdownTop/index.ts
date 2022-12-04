import {Block} from '../../../../utils/Block';
import './index.scss'
import {InputLabeledComponent} from '../../../../components/input/labeled'


type Props = {
  show: string,
  position: string
}

export class ChatDropdownTopComponent extends Block {
  login: string

  constructor(props: Props) {
    super({
      ...props,
      toggleMenu: () => {
        this.setProps({...this.props, active: !this.props.active, show: !this.props.show})

      },
      toggleAddUserModal: () => {
        this.setProps({...this.props, showAddUserModal: !this.props.showAddUserModal, active: !this.props.active, show: !this.props.show})

      },
      addUserSubmit: () => {
        let isFormValid = true;

        for(const inputLabeled of Object.values(this.refs)) {
          const input = inputLabeled as InputLabeledComponent

          input.validate()

          if(!input.isValid) {
            isFormValid = false
          }
        }

        if(isFormValid) {
          console.log({
            login: this.login
          })

          this.setProps({...this.props, showAddUserModal: !this.props.showAddUserModal})
        }
      },
      onLoginInput: (login: string) => {
        this.login = login
      }
    });
  }

  render() {
    // language=hbs
    return `
      <div>
        {{#Modal show=showAddUserModal title="Добавить пользователя"}}
          {{#Form}}
            {{{InputLabeled
              ref="login"
              title="Логин" 
              name="login" 
              validate="login"
              onInput=onLoginInput
            }}}
          {{/Form}}
          {{{ButtonSubmit title="Добавить" onClick=addUserSubmit}}}
        {{/Modal}}

        <div class="chat-dropdown-top">
          {{#Button active=active onClick=toggleMenu}}
            <svg width="3" height="16" viewBox="0 0 3 16" fill="none" xmlns="http://www.w3.org/2000/svg">
              <circle cx="1.5" cy="2" r="1.5" fill="#1E1E1E"/>
              <circle cx="1.5" cy="8" r="1.5" fill="#1E1E1E"/>
              <circle cx="1.5" cy="14" r="1.5" fill="#1E1E1E"/>
            </svg>
          {{/Button}}
          <ul class="chat-dropdown-top__menu {{#if show}}chat-dropdown-top__menu_show{{/if}}">
            {{#ChatDropdownItem title="Добавить пользователя" onClick=toggleAddUserModal}}
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="10.25" stroke="#3369F3" stroke-width="1.5"/>
                <line x1="10.9999" y1="5.5" x2="10.9999" y2="16.5" stroke="#3369F3" stroke-width="1.5"/>
                <line x1="5.49988" y1="11" x2="16.4999" y2="11" stroke="#3369F3" stroke-width="1.5"/>
              </svg>
            {{/ChatDropdownItem}}
            {{#ChatDropdownItem title="Удалить пользователя"}}
              <svg width="22" height="22" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="11" cy="11" r="10.25" stroke="#3369F3" stroke-width="1.5"/>
                <line x1="7.11077" y1="7.11103" x2="14.8889" y2="14.8892" stroke="#3369F3" stroke-width="1.5"/>
                <line x1="7.11078" y1="14.8891" x2="14.889" y2="7.11093" stroke="#3369F3" stroke-width="1.5"/>
              </svg>
            {{/ChatDropdownItem}}
          </ul>
        </div>
      </div>
    `
  }
}