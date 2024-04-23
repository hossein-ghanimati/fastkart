const topBarTemplate = document.createElement('template')
topBarTemplate.innerHTML = `

`

class TopBar extends HTMLElement {
    constructor(){
        super();
        this.appendChild(topBarTemplate.content.cloneNode(true))
    }
    connectedCallback(){
        this.className = "block w-full h-[42px] bg-theme-color-dark dark:bg-theme-color-light"
    }
}

export {TopBar}