import {Block} from '../utils/Block'
import {render} from '../utils/render'

import {MainPage} from '../pages/main'
import {AuthPage} from '../pages/auth'
import {RegistrationPage} from '../pages/registration'
import {ErrorPage} from '../pages/error'
import {ProfilePage} from '../pages/profile'
import {ProfileEditDataPage} from '../pages/profile/edit/data'
import {ProfileEditPasswordPage} from '../pages/profile/edit/password'


type Routes = Record<string, typeof Block>

const routes: Routes = {
  '/': MainPage,
  '/auth': AuthPage,
  '/registration': RegistrationPage,
  '/profile': ProfilePage,
  '/profile/edit/data': ProfileEditDataPage,
  '/profile/edit/password': ProfileEditPasswordPage,
  '/404': ErrorPage,
}

window.addEventListener('popstate', function() {
  renderPage(window.location.pathname)
});

const router = {
  push(route: string) {
    history.pushState('', '', route)
 
    renderPage(route.split("?")[0])
  },
  error(code: number) {
    render(new ErrorPage({code}))
  }
}

function renderPage(route: string) {
  const pageRoute = route in routes ? route : '/404'

  if(pageRoute == '/404') {
    render(new routes[pageRoute]({code: 404}))
  } else {
    render(new routes[pageRoute]())
  }
}

export {
  router
}
