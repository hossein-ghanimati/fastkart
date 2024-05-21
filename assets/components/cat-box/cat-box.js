const template = document.createElement('template');
template.innerHTML = `
  <a href="#" class="size-[100px] sm:w-32 md:w-48 bg-gray-200 dark:bg-gray-500 rounded-md flex items-center justify-center flex-col gap-1 relative">
    <svg class="size-11 relative z-20">
      <use xlink:href="#tea-icon"></use>
    </svg>
  
    <span class="w-11/12 line-clamp-1 relative z-20 text-center"></span>
  </a>
`

class CatBox extends HTMLElement {
  constructor(){
    super();
    this.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(){
    this.className += " cat-box"
    this.querySelector('use').setAttribute("xlink:href", this.getAttribute('icon'))
    this.querySelector('span').innerHTML = this.getAttribute('title')
  }

  observedAttributes(){
    return [icon, title]
  }
}

export {
  CatBox
}