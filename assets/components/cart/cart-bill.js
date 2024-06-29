const template = document.createElement('template');
template.innerHTML = `
<div
  class="mb-3 pb-2 border-b border-gray-300 dark:border-gray-500 font-medium text-lg">
  <span>صورت حساب</span>
</div>

<div>
  <span class="text-gray-500 dark:text-gray-300 text-sm">کدتخفیف</span>

  <div
    class="flex bg-gray-100 dark:bg-gray-800 rounded shadow-inner border-2 border-theme-color-dark dark:border-theme-color-light mt-1 mb-4 overflow-hidden">
    <input type="text" class="w-full bg-transparent p-1 pr-2"
      placeholder="takhfif-1">
    <button
      class="py-2 px-6 bg-theme-color-dark dark:bg-theme-color-light border border-theme-color-dark dark:border-theme-color-light text-stone-50">ثبت</button>
  </div>

  <div class="my-3 flex items-center justify-between">
    <span>جمع کالاها</span>
    <span class="text-gray-500 dark:text-gray-300">280,000</span>
  </div>

  <div class="my-3 flex items-center justify-between">
    <span>تخفیف</span>
    <span class="text-gray-500 dark:text-gray-300">00</span>
  </div>

  <div class="mt-3 mb-6 flex items-center justify-between">
    <span>هزینه پست</span>
    <span class="text-gray-500 dark:text-gray-300">70,000</span>
  </div>

  <div
    class="pt-6 border-t border-gray-300 dark:border-gray-500 flex flex-col gap-4">
    <p class="flex items-center justify-between text-lg font-bold">
      <span>جمع نهایی</span>
      <span
        class="text-theme-color-dark dark:text-theme-color-light">350,000</span>
    </p>

    <a href="./checkout.html"
      class="bg-danger text-stone-50 py-3 3xl:py-2 w-full rounded-md text-lg 3xl:text-base font-medium text-center">پرداخت</a>

    <a href="./products.html"
      class="bg-gray-100 dark:bg-gray-800 py-3 3xl:py-2 w-full rounded-md 3xl:text-sm flex items-center justify-center">
      بازگشت به فروشگاه
    </a>
  </div>
</div>
`

export default class  CartBill extends HTMLElement{
  constructor(){
    super()
    this.appendChild(template.content.cloneNode(true))
  }

  connectedCallback(){
    this.className = "block col-span-5 3xl:col-span-1 p-4 rounded-md 3xl:rounded shadow-lg bg-gray-200 dark:bg-gray-700"
  }
}