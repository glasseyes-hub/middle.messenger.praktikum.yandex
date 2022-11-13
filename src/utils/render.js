export function render(template, params) {
    const root = document.querySelector('#app')

    root.innerHTML = template(params)
}
