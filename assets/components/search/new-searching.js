const template = document.createElement('template');
template.innerHTML = `
<!-- Searching - Header -->
<div class="flex flex-col gap-1 justify-center items-center">
  <h4 class="font-aviny text-3xl md:text-4xl dark:text-stone-50">جستجوی
    محصولات</h4>

  <span class="section__header-line w-max">
    <svg class="size-6 md:size-9 mx-2 md:mx-4">
      <use xlink:href="#leaf"
        class="p-1 fill-theme-color-dark dark:fill-theme-color-light"></use>
    </svg>
  </span>

  <!-- Section Subtitle -->
  <p class="text-gray-500 dark:text-gray-300 line-clamp-1 w-3/4"></p>
</div>

<!-- Searching Box -->
<div class="mx-auto max-w-[527px] h-[50px] flex">
  <!-- Search Input -->
  <input type="text"
    class="w-[80%] h-full border border-l-0 bg-transparent p-1 px-3 border-gray-300  placeholder-gray-400 dark:placeholder-gray-200 rounded-search-input focus:border-theme-color-dark"
    id="page-search-input" placeholder="جستجو برای ...">

  <!-- Search Button -->
  <button
    class="w-[20%] h-full flex items-center justify-center border border-theme-color-dark dark:border-theme-color-light bg-theme-color-dark dark:bg-theme-color-light rounded-sm text-white"
    id="page-search-btn">
    <svg class="size-5 2xs:hidden">
      <use xlink:href="#search-icon" class="text-gray-100"></use>
    </svg>
    <span class="hidden 2xs:block">جستجو</span>
  </button>
</div>
`

class NewSearching extends HTMLElement{
  constructor(){
    super();
    this.appendChild(template.content.cloneNode(true))
  }

  connectedCallback(){
    this.className = "block"
  }
}

export {
  NewSearching
}