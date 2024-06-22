const temlpate = document.createElement('template');
temlpate.innerHTML = `
<div
  class="pointer-events-auto relative w-full h-full md:h-max md:w-[500px] bg-white dark:bg-gray-900 shadow-lg rounded-0 md:rounded-xl p-5 pb-6 space-y-2 border-b-4 border-b-theme-color-dark dark:border-b-theme-color-light">
  <!-- Close Button -->
  <button
    class="close-modal-btn size-8 rounded absolute left-2 top-2  md:-left-2 md:-top-2 flex items-center justify-center bg-theme-color-dark dark:bg-theme-color-dark"
    data-target="register-comment-modal">
    <svg class="size-6">
      <use xlink:href="#close-icon" class="text-white"></use>
    </svg>
  </button>

  <!-- Modal Header -->
  <div class="space-y-2">
    <!-- Modal Title -->
    <span
      class="p-1 font-semibold text-xl dark:text-gray-100">بازخورد شما چیست
      ؟</span>

    <!-- Modal Sub Title -->
    <p
      class="p-1 pr-5 line-clamp-1 text-sm text-gray-400 dark:text-gray-300">پس
      از تایید مدیران نمایش داده خواهد شد</p>
  </div>

  <!-- Product Info -->
  <div
    class="flex items-center gap-2 2xs:gap-4 px-2 xs:px-4 py-1 xs:py-2 bg-gray-200 dark:bg-gray-700 rounded-lg">
    <div class="w-max"><img class="size-16 rounded-md"
        src="./assets/image/products/کیک شکلاتی خامه ای/1.jpg"
        alt="کیک سکلات خامه ای"></div>
    <div class="flex flex-col gap-1">
      <span class="font-medium line-clamp-1 w-full">کیک شکلات خامه ای</span>
      <span class="text-gray-400 dark:text-gray-300">70,000</span>
    </div>
  </div>

  <!-- Comment Points -->
  <div class="space-y-2 pt-4">
    <p
      class="p-1 pr-5 line-clamp-1 text-sm text-gray-400 dark:text-gray-300">امتیاز
      شما برای این محصول :</p>
    <select name="product-stars" id="product-stars"
      class="bg-gray-200 dark:bg-gray-700 w-full h-10 rounded px-4 py-2 border-theme-color-dark dark:border-x-theme-color-light focus:border  outline-none cursor-pointer">
      <option value="5" selected>5</option>
      <option value="4">4</option>
      <option value="3">3</option>
      <option value="2">2</option>
      <option value="1">1</option>
    </select>
  </div>

  <!-- Comment Content -->
  <div class="space-y-2">
    <p
      class="p-1 pr-5 line-clamp-1 text-sm text-gray-400 dark:text-gray-300">متن
      دیدگاه شما :</p>

    <textarea name="comment-content" id="comment-content"
      class="w-full min-h-48 md:min-h-24 h-max max-h-72 md:max-h-48  py-2 px-4 rounded bg-gray-200 dark:bg-gray-700 text-sm"
      placeholder="دیدگاه شما..."></textarea>
  </div>

  <!-- Comment Actions -->
  <div class="flex items-center justify-end gap-2">
    <button
      class="close-modal-btn px-8 py-2 rounded transition border border-theme-color-dark dark:border-theme-color-light hover:bg-theme-color-dark dark:hover:bg-theme-color-light hover:text-stone-50"
      data-target="register-comment-modal">لغو</button>
    <button
      class="close-modal-btn px-8 py-2 rounded bg-theme-color-dark dark:bg-theme-color-light text-stone-50">ارسال</button>
  </div>
</div>
`

export default class RegisterCommentModal extends HTMLElement(){
  constructor(){
    super()
    this.appendChild(temlpate.content.cloneNode(true));
  }

  connectedCallback(){
    this.className = 'modal backdrop-blur pointer-events-none hidden fixed top-0 z-60 h-full w-full mx-auto items-center justify-center'
    this.setAttribute('id', 'register-comment-modal')
  }
}