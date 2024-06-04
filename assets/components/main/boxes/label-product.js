const template = document.createElement('template')
template.innerHTML = `
<!-- Image -->
<a href="#" class="label__product-img-wrapper  rounded-md bg-[#f1f1f1] overflow-hidden flex items-center justify-center">
  <img src="./assets/image/beans/13.jpg" class="productImg mix-blend-multiply w-full max-h-full p-2" alt="product-img">
</a>

<!-- Info -->
<div>
  <a href="#" class="productTitle label__product-header font-semibold line-clamp-1 mt-1">مغز گردوی گود لایف</a>
  
  <!-- Points -->
  <div class="productStars flex gap-1 items-center mb-2">
    <!-- Stars -->
    <div class="catStars flex items-center">
      <img src="./assets/image/svg/star_fill.svg" alt="star" class="size-[14px]">
    
      <img src="./assets/image/svg/star_fill.svg" alt="star" class="size-[14px]">
    
      <img src="./assets/image/svg/star_fill.svg" alt="star" class="size-[14px]">
    
      <img src="./assets/image/svg/star_fill.svg" alt="star" class="size-[14px]">
    
      <img src="./assets/image/svg/star_fill.svg" alt="star" class="size-[14px]">
    </div>
      
    <!-- Counts -->
    <span class="starsCount p-1 text-sm">(56)</span>
  </div>

  <span class="text-theme-color-dark dark:text-theme-color-light font-bold">
    <span class="productPrice">120,000</span>
    تومان
  </span>
</div>
`

class LabelProduct extends HTMLElement{
  constructor(){
    super();
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
    this.className = "flex gap-4 mt-4 first:mt-0"

    this.querySelectorAll('a').forEach(link => link.href = `./productPreview.html?id=${this.getAttribute('id')}`)
    this.querySelector('img').src = `./assets/image/${this.getAttribute('src')}`
    this.querySelector('.productTitle').innerHTML = this.getAttribute('title')
    this.querySelector('.productPrice').innerHTML = Number(this.getAttribute('price')).toLocaleString()

    this.renderStars()
  }

  observedAttributes(){
    return [
      id,
      src,
      title,
      price,
      stars
    ]
  }
}

export {
  LabelProduct
}