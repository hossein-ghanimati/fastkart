const template = document.createElement('template');
template.innerHTML = `
  <!-- Top -->
  <div class="flex items-center justify-center relative h-[130px] p-4 ">
    <a href="./productPreview.html?id=df786asdf08adf10" class="productLink">
      <img src="./assets/image/fruits/10.png"
        class="product-img w-3/4 max-h-full  m-auto transition-5" alt="fruit">
    </a>
    <!-- Product Actions -->
    <ul
      class="flex translate-y-2 opacity-0 transition-5 absolute mx-auto bottom-3  items-center justify-center bg-white dark:bg-gray-900 py-2  rounded-lg z-20">
      <li
        class="parent cursor-pointer relative px-4 border-gray-400 dark:border-x-gray-200 border-l last:border-none z-20">
        <span
          class="hidden is-tippy child absolute w-max bg-theme-color-light text-stone-50 px-4 py-1 rounded -top-[180%] right-2/4 translate-x-2/4 z-20">نمایش</span>
        <svg class="size-6 scale-[0.65] text-gray-500 dark:text-gray-300">
          <use xlink:href="#eye-icon"></use>
        </svg>
      </li>
      <a href="./comparie.html?id=df786asdf08adf10"
        class="comparieLink parent cursor-pointer relative px-4 border-gray-400 dark:border-x-gray-200 border-l last:border-none z-20">
        <span
          class="hidden is-tippy child absolute w-max bg-theme-color-light text-stone-50 px-4 py-1 rounded -top-[180%] right-2/4 translate-x-2/4 z-20">مقایسه</span>
        <svg class="size-6 scale-[0.65] text-gray-500 dark:text-gray-300">
          <use xlink:href="#change-icon"></use>
        </svg>
      </a>
      <li
        class="parent cursor-pointer relative px-4 border-gray-400 dark:border-x-gray-200 border-l last:border-none z-20">
        <span
          class="hidden is-tippy child absolute w-max bg-theme-color-light text-stone-50 px-4 py-1 rounded -top-[180%] right-2/4 translate-x-2/4 z-20">لیست
          علاقه مندی</span>
        <svg class="size-5 text-gray-500 dark:text-gray-300">
          <use xlink:href="#heart-icon"></use>
        </svg>
      </li>
    </ul>
  </div>

  <!-- Bottom -->
  <div>
    <span class="productCategory text-sm text-gray-500 dark:text-gray-300">میوه ها</span>

    <a href="./productPreview.html?id=df786asdf08adf10"
      class="productLink productTitle line-clamp-1 font-bold text-sm">توت فرنگی
      شیرین</a>

    <!-- Points -->
    <div class="flex gap-1 items-center">
      <!-- Stars -->
      <div class="productStars flex items-center">

      </div>

      <!-- Counts -->
      <span class="starsCount p-1 text-sm">(89)</span>
    </div>

    <!-- Value -->
    <div class="text-sm text-gray-500 dark:text-gray-300">
      <span class="productAmount">1</span>
      <span class="productUnit">کیلوگرم</span>
    </div>

    <!-- Price  -->
    <div>
      <span class="text-theme-color-dark dark:text-theme-color-light font-bold">
        <span class="productPrice">240,000</span>
        تومان
      </span>
    </div>

    <!-- Add Btn -->
    <button
      class="relative w-full h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-full font-medium mt-3">
      <span
        class="flex items-center justify-center size-[30px] absolute right-[2px] bg-[#ebebeb] dark:bg-[#1d1d22] rounded-full">
        <svg class="size-5">
          <use xlink:href="#plus-icon"
            class="text-theme-color-dark dark:text-theme-color-light"></use>
        </svg>
      </span>

      افزودن
    </button>
  </div>
`

class ProductBox2 extends HTMLElement {
  constructor(){
    super()
    this.appendChild(template.content.cloneNode(true))
  }

  renderStars(){
    const starsContainer = this.querySelector('.productStars')
    starsContainer.innerHTML = ""
    const stars = 5 - this.getAttribute('stars')
    const fillStars = 5 - stars
    
    for (let i = 0; i < fillStars; i++) {
      starsContainer.insertAdjacentHTML('beforeend', `
        <img src="./assets/image/svg/star_fill.svg" alt="star" class="size-[14px]">
      `)      
    }
    for (let i = 0; i < stars; i++) {
      starsContainer.insertAdjacentHTML('beforeend', `
        <img src="./assets/image/svg/star.svg" alt="star" class="size-[14px]">
      `)      
    }
  }

  connectedCallback(){
    this.querySelectorAll('.productLink').forEach(link => link.href = `./productPreview.html?id=${this.getAttribute('id')}`)
    this.querySelector('.product-img').src = `./assets/image/${this.getAttribute('src')}`
    this.querySelector('.comparieLink').href = `./comparie.html?id=${this.getAttribute('id')}`
    this.querySelector('.productTitle').innerHTML = this.getAttribute('title')
    this.renderStars()
    this.querySelector('.starsCount').innerHTML = `(${this.getAttribute('counts')})`
    this.querySelector('.productUnit').innerHTML = this.getAttribute('unit')
    this.querySelector('.productAmount').innerHTML = this.getAttribute('amount')
    this.querySelector('.productPrice').innerHTML = Number(this.getAttribute('price')).toLocaleString()
    this.querySelector('.productCategory').innerHTML = this.getAttribute('category')

    this.className = "swiper-slide product  block w-full 3xs:w-[220px] h-max p-[10px] rounded bg-[#ebebeb] dark:bg-[#1d1d22]"
  }

  observedAttributes(){
    return [
      "id",
      "src",
      "title",
      "stars",
      "counts",
      "unit",
      "amount",
      "price",
      "category"
    ]
  }
}

export {
  ProductBox2
}