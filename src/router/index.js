import mainPage from '../pages/main'
import authPage from '../pages/auth'
import registrationPage from '../pages/registration'
import errorPage from '../pages/error'

function getErrorPage(code) {
    return () => errorPage({code})
}

const routes = {
    '/': mainPage,
    '/auth': authPage,
    '/registration': registrationPage,
    '/404': getErrorPage(404),
    '/500': getErrorPage(500),
}

const root = document.querySelector('#app')

const router = {
    push(route) {
        const page = route in routes ? route : '/404'
    
        root.innerHTML = routes[page]()
    },
    error(code) {
        root.innerHTML = errorPage({code})
    }
}

window.router = router

export default router