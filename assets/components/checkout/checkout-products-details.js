const template = document.createElement('template');
template.innerHTML = `
<div class="p-4 rounded-md 3xl:rounded shadow-lg bg-gray-200 dark:bg-gray-700">
  <div
    class="pb-2 border-b border-gray-300 dark:border-gray-500 font-medium text-lg">
    <span>سبد خرید</span>
  </div>

  <div class="my-3">
    <ul
      class="text-gray-500 dark:text-gray-300 text-[15px] max-h-40 overflow-auto pl-2">
      <li class="flex items-center justify-between py-3 first:pt-0 last:pb-0">
        <div class="flex items-center gap-1">
          <img src="./assets/image/cart-item-1.png" alt="product-img"
            class="w-12">
          <span>ناگت مرغ</span>
          <span class="font-bold">
            <span>1</span>
            <span>عدد</span>
          </span>
        </div>

        <span>70,000</span>
      </li>
      <li class="flex items-center justify-between py-3 first:pt-0 last:pb-0">
        <div class="flex items-center gap-1">
          <img src="./assets/image/cart-item-1.png" alt="product-img"
            class="w-12">
          <span>ناگت مرغ</span>
          <span class="font-bold">
            <span>1</span>
            <span>عدد</span>
          </span>
        </div>

        <span>70,000</span>
      </li>
      <li class="flex items-center justify-between py-3 first:pt-0 last:pb-0">
        <div class="flex items-center gap-1">
          <img src="./assets/image/cart-item-1.png" alt="product-img"
            class="w-12">
          <span>ناگت مرغ</span>
          <span class="font-bold">
            <span>1</span>
            <span>عدد</span>
          </span>
        </div>

        <span>70,000</span>
      </li>
      <li class="flex items-center justify-between py-3 first:pt-0 last:pb-0">
        <div class="flex items-center gap-1">
          <img src="./assets/image/cart-item-1.png" alt="product-img"
            class="w-12">
          <span>ناگت مرغ</span>
          <span class="font-bold">
            <span>1</span>
            <span>عدد</span>
          </span>
        </div>

        <span>70,000</span>
      </li>
    </ul>
  </div>

  <div>
    <div class="space-y-1 py-4 border-y border-gray-300 dark:border-gray-500">
      <div class="flex items-center justify-between">
        <span>جمع کالاها</span>
        <span class="text-gray-500 dark:text-gray-300">280,000</span>
      </div>

      <div class="flex items-center justify-between">
        <span>تخفیف</span>
        <span class="text-gray-500 dark:text-gray-300">00</span>
      </div>

      <div class="6 flex items-center justify-between">
        <span>هزینه پست</span>
        <span class="text-gray-500 dark:text-gray-300">70,000</span>
      </div>
    </div>

    <div class="mt-4  flex flex-col gap-4">
      <p
        class="flex items-center justify-between text-lg font-bold text-theme-color-dark dark:text-theme-color-light">
        <span>جمع نهایی</span>
        <span>350,000</span>
      </p>
    </div>
  </div>
</div>

<a href="./success-purchase.html"
  class="block w-full py-2 bg-theme-color-dark dark:bg-theme-color-light text-stone-50 rounded-md sm:rounded-lg lg:rounded-md text-center">ثبت
  سفارش</a>
`

export default class CheckoutProductsDetails extends HTMLElement{
  constructor(){
    super()
    this.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(){
    this.className = "block col-span-10 lg:col-span-3 h-max lg:sticky top-2 space-y-3 lg:space-y-6"
  }
}