export function render(template: any, params: object) {
    const root = document.querySelector('#app')

    if(root) root.innerHTML = template(params)
}
