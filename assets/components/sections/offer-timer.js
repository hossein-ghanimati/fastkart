const template = document.createElement('template');
template.innerHTML = `
<!-- Content -->
<div class="offer-timer__content">
  <!-- Right -->
  <div class="lg:w-1/2 text-center">
    <!-- Title -->
    <h6 class="w-full line-clamp-1 text-[22px] md:text-2xl">
      تخفیف روز <span class="text-danger font-semibold">دوشنبه !</span>
    </h6>

    <!-- Sub Title -->
    <p class="text-gray-600 text-sm lg:text-base mt-1 mb-4">پیشنهاد ویژه در این تخفیف، عجله کنید!</p>
  </div>

  <!-- Left -->
  <ul class="flex w-full lg:w-1/2 justify-center items-center">
    <li class="offer-timer__counter bg-danger text-stone-50 font-semibold rounded flex items-center justify-center relative mr-4 first:mr-0">12</li>
    <li class="offer-timer__counter bg-danger text-stone-50 font-semibold rounded flex items-center justify-center relative mr-4 first:mr-0">10</li>
    <li class="offer-timer__counter bg-danger text-stone-50 font-semibold rounded flex items-center justify-center relative mr-4 first:mr-0">23</li>
    <li class="offer-timer__counter bg-danger text-stone-50 font-semibold rounded flex items-center justify-center relative mr-4 first:mr-0">28</li>
  </ul>
</div>
`


class OfferTimer extends HTMLElement {
  constructor(){
    super()
    this.appendChild(template.content.cloneNode(true))
  }

  connectedCallback(){
    this.className = "offer-timer relative block"
  }
}

export {
  OfferTimer
}