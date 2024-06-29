const template = document.createElement('template');
template.innerHTML = `
<div>
  <svg class="size-28">
    <use xlink:href="#success-icon"
      class="text-theme-color-dark dark:text-theme-color-light"></use>
  </svg>
</div>

<div>
  <p
    class="font-medium text-theme-color-dark dark:text-theme-color-light text-center mb-2">خرید
    موفق</p>
  <p class="text-sm text-black dark:text-white">پرداخت شما با موفقیت
    انجام شد</p>
  <p class="text-sm text-black dark:text-white">کد رهگیری :
    1708031724431131</p>
</div>
`

export default class SuccessMessage extends HTMLElement{
  constructor(){
    super();
    this.appendChild(template.content.cloneNode(true))
  }

  connectedCallback(){
    this.className = "w-full bg-gray-200 dark:bg-gray-700 flex flex-col items-center justify-center gap-6 py-4"
  }
}