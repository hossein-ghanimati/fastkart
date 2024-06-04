const template = document.createElement('template')
template.innerHTML = `
  <P class="line-clamp-1">
    توسعه داده شده توسط 
    <span class="text-theme-color-dark dark:text-theme-color-light text-sm sm:text-base">حسین غنیمتی</span> 
    و 
    <span class="text-theme-color-dark dark:text-theme-color-light text-sm sm:text-base">مهدی شاهی</span>
  </P>

  <img src="./assets/image/app-img/1.png" alt="app">
`

class FooterBottom extends HTMLElement{
  constructor(){
    super();
    this.appendChild(template.content.cloneNode(true))
  }

  connectedCallback(){
    this.className = "text-gray-500 dark:text-gray300 text-xs sm:text-sm pb-9 md:pb-[104px] flex flex-col lg:flex-row items-center justify-center lg:justify-between gap-2"
  }
}

export {
  FooterBottom
}