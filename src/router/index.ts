import {MainPage} from '../pages/main'
import {Block} from '../utils/Block'
import {render} from '../utils/render'
// import {authPage} from '../pages/auth'
// import {registrationPage} from '../pages/registration'
// import {errorPage} from '../pages/error'
// import {profilePage} from '../pages/profile'
// import {profileEditDataPage} from '../pages/profile/edit/data'
// import {profileEditPasswordPage} from '../pages/profile/edit/password'

// function getErrorPage(code) {
//     return () => errorPage({code})
// }

type Routes = Record<string, typeof Block>

const routes: Routes = {
    '/': MainPage,
    // '/auth': authPage,
    // '/registration': registrationPage,
    // '/profile': profilePage,
    // '/profile/edit/data': profileEditDataPage,
    // '/profile/edit/password': profileEditPasswordPage,
    // '/404': getErrorPage(404),
    // '/500': getErrorPage(500),
}


const router = {
    push(route: string) {
        const pageRoute = route in routes ? route : '/404'

        render(new routes[pageRoute]())
    },
    // error(code: string) {
    //     errorPage({code})
    // }
}

export {
    router
}
