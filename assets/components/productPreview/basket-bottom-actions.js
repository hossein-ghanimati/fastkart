const template = document.createElement('template');
template.innerHTML = `
<div class="container h-full flex items-center justify-between">
  <!-- Info         -->
  <div class="flex items-center gap-4">
    <div class="size-20">
      <img src="./assets/image/products/کیک شکلاتی خامه ای/1.jpg"
        alt="شکلات خامه ای" class="bg-blend-multiply rounded shadow-md ">
    </div>

    <div class="flex flex-col gap-1">
      <span class="font-medium">کیک کرم شکلاتی</span>
      <div class="flex items-center gap-2">
        <span class="text-gray-700 dark:text-gray-200">70.000</span>
        <span class="text-red-500 line-through">100.000</span>
        <span class="text-theme-color-dark dark:bg-theme-color-light">55%
          تخفیف</span>
      </div>
    </div>
  </div>

  <!-- Adding Options -->
  <div class="flex items-center gap-2">
    <div
      class="bg-gray-200 dark:bg-gray-700 h-9 py-1 px-3 w-36 rounded flex items-center justify-center">
      <select name="product-weight" id="product-weight"
        class="bg-gray-200 dark:bg-gray-700 cursor-grab">
        <option value="default">وزن...</option>
        <option value="1">1 کیلوگرم</option>
        <option value="1.5">1/5 کیلوگرم</option>
        <option value="2.5">2/5 کیلوگرم</option>
        <option value="5">5 کیلوگرم</option>
        <option value="10">10 کیلوگرم</option>
      </select>
    </div>

    <div
      class="flex items-center justify-center h-9 p-1 bg-gray-200 dark:bg-gray-700 rounded">
      <!-- Plus Action -->
      <button type="button">
        <svg class="p-1 size-8 bg-gray-100 dark:bg-gray-800 rounded">
          <use xlink:href="#plus-icon"
            class="text-theme-color-dark dark:bg-theme-color-light"></use>
        </svg>
      </button>

      <!-- Item Count In Basket -->
      <span class="h-full w-20 flex items-center justify-center">0</span>

      <!-- Minus Actions -->
      <button type="button">
        <svg class="p-1 size-8 bg-gray-100 dark:bg-gray-800 rounded">
          <use xlink:href="#minus-icon"
            class="text-theme-color-dark dark:bg-theme-color-light"></use>
        </svg>
      </button>
    </div>
  </div>

  <button
    class="text-white py-3 px-4 bg-theme-color-dark dark:bg-theme-color-light rounded-md flex items-center gap-2">
    <svg class="size-6">
      <use xlink:href="#shopping-cart-icon" class="text-white"></use>
    </svg>

    افزودن به سبد خرید
  </button>
</div>
`

export default class BasketBottomActions extends HTMLElement {
  constructor(){
    super();
    this.appendChild(template.content.cloneNode(true))
  }

  connectedCallback(){
    this.className = "hidden transition translate-y-full md:block w-full h-[90px] fixed bottom-0 z-30 bg-gray-100 dark:bg-gray-800 border-t border-gray-300 dark:border-gray-500"
    this.setAttribute('id', "basket-secondery-actions")
  }
}