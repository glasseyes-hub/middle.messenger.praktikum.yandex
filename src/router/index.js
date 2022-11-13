import mainPage from '../pages/main'
import authPage from '../pages/auth'
import registrationPage from '../pages/registration'
import errorPage from '../pages/error'
import profilePage from '../pages/profile'
import profileEditDataPage from '../pages/profile/edit/data'
import profileEditPasswordPage from '../pages/profile/edit/password'

function getErrorPage(code) {
    return () => errorPage({code})
}

const routes = {
    '/': mainPage,
    '/auth': authPage,
    '/registration': registrationPage,
    '/profile': profilePage,
    '/profile/edit/data': profileEditDataPage,
    '/profile/edit/password': profileEditPasswordPage,
    '/404': getErrorPage(404),
    '/500': getErrorPage(500),
}


const router = {
    push(route) {
        const pageRoute = route in routes ? route : '/404'
    
        routes[pageRoute]()
    },
    error(code) {
        errorPage({code})
    }
}

export default router
