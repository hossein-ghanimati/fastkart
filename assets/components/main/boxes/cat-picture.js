const template = document.createElement('template')
template.innerHTML = `
  <a href="#" class="block rounded-xl overflow-hidden">
    <img src="./assets/image/main-cats/2.jpg" class="transition group-hover:scale-110 group-hover:rotate-[4deg] w-full sm:w-[410px] shadow-md border border-gray-200 dark:border-gray-800" alt="category-picture">
  </a>

  <div class="cat-pic__content relative z-10 backd w-[90%] rounded-[5px] backdrop-blur-sm bg-[#ffffffcc] dark:bg-[#1d1d22cc] shadow">
    <a href="#" class="catTitle cat-pic__content-title block font-semibold line-clamp-1">گوشت ارگانیک آماده شده</a>

    <p class="catSubtitle cat-pic__content-subtitle text-gray-500 dark:text-gray-300 line-clamp-1">تحویل در خانه شما</p>

    <!-- Points -->
    <div class="flex gap-1 items-center">
      <!-- Stars -->
      <div class="catStars flex items-center">

      </div>
        
      <!-- Counts -->
      <span class="starsCount p-1 text-sm">(12)</span>
    </div>

    <div class="relative flex items-start justify-between">
      <span class="cat-pic__content-details">
        توسط
        <a href="#" class="sellerLink text-theme-color-dark dark:text-theme-color-light">نست فود</a>
      </span>

      <a href="#" type="button" class="absolute left-0 -top-3/4 bg-danger text-white rounded px-4 py-2 flex items-center gap-1">
        خرید
        <svg class="size-5 text-xl scale-75">
          <use xlink:href="#arrow-icon" class="text-white"></use>
        </svg>
      </a>
    </div>
  </div>
`

class CatPicture extends HTMLElement {
  constructor(){
    super();
    this.appendChild(template.content.cloneNode(true))
  }

  renderStars(){
    const starsContainer = this.querySelector('.catStars')
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
    this.className = "swiper-slide block group relative w-full xs:w-max h-max overflow-hidden"

    const sellerLink = this.querySelector('.sellerLink');
    sellerLink.innerHTML = this.getAttribute('sellerName');
    sellerLink.href = `./seller.html?id=${this.getAttribute('sellerId')}`;

    this.querySelectorAll('a:not(.sellerLink)').forEach(link => link.href = `./products.html?categoryID=${this.getAttribute('id')}`)
    this.querySelector('img').src = `./assets/image/${this.getAttribute('src')}`
    this.querySelector('.starsCount').innerHTML = `(${this.getAttribute('count')})`
    this.querySelector('.catTitle').innerHTML = this.getAttribute('title')
    this.querySelector('.catSubtitle').innerHTML = this.getAttribute('subtitle')
    this.renderStars()
  }

  observedAttributes(){
    return[
      id,
      src,
      title,
      subtitle,
      stars,
      count,
      sellerName,
      sellerId,
    ]
  }
}

export {
  CatPicture
}