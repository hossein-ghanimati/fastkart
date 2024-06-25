const template = document.createElement('template');
template.innerHTML = `
<!-- Img Box -->
<div class="w-full relative flex items-center justify-center 3xs:min-w-[250px] 3xs:w-[250px]">
  <a href="#" class="productLink block 3xs:min-w-[180px] 3xs:w-[180px]">
    <img src="./assets/image/fruits/1.png" alt="img" class="product-img w-full">
    
  </a>

  <ul class="flex translate-y-2 opacity-0 transition-5 absolute mx-auto bottom-3  items-center justify-center bg-white dark:bg-gray-900 py-2  rounded-lg z-20">
      <li class="parent cursor-pointer relative px-4 border-gray-400 dark:border-x-gray-200 border-l last:border-none">
        <span class="hidden is-tippy child absolute w-max bg-theme-color-light text-stone-50 px-4 py-1 rounded -top-[180%] right-2/4 translate-x-2/4">نمایش</span>
        <svg class="size-6 scale-[0.65] text-gray-500 dark:text-gray-300">
          <use xlink:href="#eye-icon"></use>
        </svg>
      </li>
      
      <li class="parent cursor-pointer relative px-4 border-gray-400 dark:border-x-gray-200 border-l last:border-none">
        <span class="hidden is-tippy child absolute w-max bg-theme-color-light text-stone-50 px-4 py-1 rounded -top-[180%] right-2/4 translate-x-2/4">لیست علاقه مندی</span>
        <svg class="size-5 text-gray-500 dark:text-gray-300">
          <use xlink:href="#heart-icon"></use>
        </svg>
      </li>

      <a href="./comparie.html?id=df786asdf08adf44" class="comparieLink parent cursor-pointer relative px-4 border-gray-400 dark:border-x-gray-200 border-l last:border-none">
        <span class="hidden is-tippy child absolute w-max bg-theme-color-light text-stone-50 px-4 py-1 rounded -top-[180%] right-2/4 translate-x-2/4">مقایسه</span>
        <svg class="size-6 scale-[0.65] text-gray-500 dark:text-gray-300">
          <use xlink:href="#change-icon"></use>
        </svg>
      </a>
    </ul>
</div>

<!-- Info Box -->
<div>
  <a href="#" class="productTitle productLink line-clamp-2 font-bold">بیسکویت کره بادام زمینی پرمیوم کره
    600 گرم</a>
  <p class="productDescription mt-2 text-sm line-clamp-6 text-gray-500 dark:text-gray-300">لورم
    ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان
    گرافیک است. چاپگرها و متون بلکه روزنامه و مجله در ستون و سطرآنچنان که لازم
    است و برای شرایط فعلی تکنولوژی مورد نیاز و کاربردهای متنوع با هدف بهبود
    ابزارهای کاربردی می باشد. </p>

  <!-- Points -->
  <div class="flex gap-1 items-center">
    <!-- Stars -->
    <div class="productStars flex items-center">
      <img src="./assets/image/svg/star_fill.svg" alt="star"
        class="size-[14px]">

      <img src="./assets/image/svg/star_fill.svg" alt="star"
        class="size-[14px]">

      <img src="./assets/image/svg/star_fill.svg" alt="star"
        class="size-[14px]">

      <img src="./assets/image/svg/star_fill.svg" alt="star"
        class="size-[14px]">

      <img src="./assets/image/svg/star_fill.svg" alt="star"
        class="size-[14px]">
    </div>

    <!-- Counts -->
    <span class="starsCount p-1 text-sm">(53)</span>
  </div>

  <div class="text-xs text-gray-500 dark:text-gray-300">
    <span class="productAmount">1</span>
    <span class="productUnit">کیلوگرم</span>
  </div>

  <div>
    <span
      class="percentedPrice text-theme-color-dark dark:text-theme-color-light">70,000</span>
    <span
      class="mainPrice text-sm line-through text-gray-500 dark:text-gray-300">100,000</span>
  </div>

  <div class="flex items-center xs:justify-end">
    <button
      class="relative w-full xs:w-64 h-10 flex items-center justify-center bg-gray-100 dark:bg-gray-800 text-gray-800 dark:text-gray-100 rounded-full font-medium mt-3">
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
</div>
`

export default class productRowBox extends HTMLElement{
  constructor(){
    super()
    this.appendChild(template.content.cloneNode(true));
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
    this.querySelector('.productDescription').innerHTML = `(${this.getAttribute('description')})`
    this.querySelector('.productUnit').innerHTML = this.getAttribute('unit')
    this.querySelector('.productAmount').innerHTML = this.getAttribute('amount')
    this.querySelector('.mainPrice').innerHTML = Number(this.getAttribute('mainPrice')).toLocaleString()
    this.querySelector('.percentedPrice').innerHTML = Number(this.getAttribute('percentedPrice')).toLocaleString()
    const customClass = this.getAttribute("customClass")
    this.className = `${customClass || ''} product flex flex-col items-center justify-center md:justify-start md:flex-row gap-6 md:gap-4 bg-[#ebebeb] dark:bg-[#1d1d22] p-3 3xs:p-6 md:p-8 rounded-md md:rounded-lg shadow-md`
  }
  observedAttributes(){
    return [
      "customClass",
      "id",
      "src",
      "title",
      "description",
      "stars",
      "counts",
      "unit",
      "amount",
      "mainPrice",
      "percentedPrice",
    ]
  }
}