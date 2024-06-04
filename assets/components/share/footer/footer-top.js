const template = document.createElement('template');
template.innerHTML = `
  <!-- Servise Box -->
  <div class="w-1/2 2xl:w-1/4 px-3 mb-4 flex items-center justify-center gap-3">
    <svg class="size-[38px]">
      <use xlink:href="#products-icon"
        class="text-gray-500 dark:text-gray-300"></use>
    </svg>
    <span class="font-medium">محصولات تازه و ارگانیک</span>
  </div>
  <div
    class="w-1/2 2xl:w-1/4 px-3 mb-4 border-r-2  border-dashed border-gray-400 dark:border-gray-300 flex items-center justify-center gap-3">
    <svg class="h-[38px] w-[50px]">
      <use xlink:href="#truck-icon"
        class="text-gray-500 dark:text-gray-300"></use>
    </svg>
    <span class="font-medium text-sm">ارسال رایگان برای خرید بالای 500
      تومان</span>
  </div>
  <div
    class="w-1/2 2xl:w-1/4 px-3 2xl:border-r-2  border-dashed border-gray-400 dark:border-gray-300 flex items-center justify-center gap-3">
    <svg class="size-[38px]">
      <use xlink:href="#offer-icon"
        class="text-gray-500 dark:text-gray-300"></use>
    </svg>
    <span class="font-medium">تخفیف های ویژه روزانه</span>
  </div>
  <div
    class="w-1/2 2xl:w-1/4 px-3 border-r-2  border-dashed border-gray-400 dark:border-gray-300 flex items-center justify-center gap-3">
    <svg class="size-[38px]">
      <use xlink:href="#market-icon"
        class="text-gray-500 dark:text-gray-300"></use>
    </svg>
    <span class="font-medium">بهترین قیمت در سراسر وب</span>
  </div>
`

class FooterTop extends HTMLElement {
  constructor(){
    super();
    this.appendChild(template.content.cloneNode(true))
  }

  connectedCallback(){
    this.className = "hidden md:flex items-center flex-wrap"
  }
}

export {
  FooterTop
}