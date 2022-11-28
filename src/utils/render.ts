import {Block} from '../utils/Block'


export function render(block: Block) {
    const root = document.querySelector('#app')

    if(!root) {
        return
    }

    root.append(block.getContent() as Node)
}
