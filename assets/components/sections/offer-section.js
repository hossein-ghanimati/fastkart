const template = document.createElement('template');
template.innerHTML = `
<div class="offer">
  <div class="offer-overly"></div>
  <p class="text-xl sm:text-2xl text-white font-medium text-center"><span>30</span> هزار تومان تخفیف ویژه با <span>300</span> هزار خرید</p>
  <div class="p-1 border border-dashed border-stone-300 text-stone-50">کد تخفیف : <span>fastkart</span></div>
</div>
`

class OfferSection extends HTMLElement {
  constructor(){
    super()
    this.appendChild(template.content.cloneNode(true));
  }
}

export {
  OfferSection
}