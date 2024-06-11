const template = document.createElement('template')
template.innerHTML = `
<ul class="mx-auto flex w-full h-full xs:w-[90%] sm:w-[80%] items-center justify-center text-xs xs:text-sm sm:text-base">
  <li class="w-full">
    <a href="./index.html" class="flex flex-col items-center">
      <svg class="size-5">
        <use xlink:href="#home-icon"></use>
      </svg>
      <p>خانه</p>
    </a>
  </li>

  <li class="w-full">
    <button class="flex flex-col items-center size-full" id="open-cat-menu-btn">
      <svg class="size-5">
        <use xlink:href="#category-icon"></use>
      </svg>
      <p>دسته ها</p>
    </button>
  </li>

  <li class="w-full">
    <a href="./search.html" class="flex flex-col items-center">
      <svg class="size-5">
        <use xlink:href="#search-icon"></use>
      </svg>
      <p>جستجو</p>
    </a>
  </li>

  <li class="w-full">
    <a href="./userPanel/favorites.html" class="flex flex-col items-center">
      <svg class="size-5">
        <use xlink:href="#heart-icon"></use>
      </svg>
      <p>علاقه‌مندی</p>
    </a>
  </li>

  <li class="w-full">
    <a href="./userPanel/basket.html" class="flex flex-col items-center">
      <svg class="size-5">
        <use xlink:href="#shopping-cart-icon"></use>
      </svg>
      <p>سبدخرید</p>
    </a>
  </li>

</ul>
`

class MobileNav extends HTMLElement {
  constructor(){
    super()
    this.appendChild(template.content.cloneNode(true))
  }

  connectedCallback(){
    this.className = "block md:hidden p-[10px] w-full h-[68px] z-40 fixed bottom-0 bg-theme-color-dark text-white"
  }
}

export{
  MobileNav
}