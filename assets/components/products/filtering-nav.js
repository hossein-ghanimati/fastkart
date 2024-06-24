const template = document.createElement('template');
template.innerHTML = `
<!-- Filstering -->
<div>
  <button>
    <label for="filsters-modal__input"
      class="bg-gray-200 dark:bg-gray-700 py-2 px-5 rounded text-gray-500 dark:text-gray-300 flex items-center justify-center gap-2 cursor-pointer">
      <svg class="size-6">
        <use xlink:href="#funnel-icon"
          class="text-gray-500 dark:text-gray-300"></use>
      </svg>

      <span>فیلتر ها</span>
    </label>
    <input type="radio" name="filters-modal__input" id="filters-modal__input"
      class="hidden">
  </button>
</div>

<!-- How To Show -->
<div class="flex items-center justify-end gap-2 sm:gap-4">
  <!-- Sorting -->
  <div class="flex items-center gap-1 sm:gap-2">
    <span class=" hidden sm:inline text-gray-500 dark:text-gray-300">مرتب سازی
      بر اساس :</span>
    <select name="sort-by" id="sort-by"
      class="bg-gray-200 dark:bg-gray-700 py-2 px-4 rounded cursor-pointer">
      <option value="last">آخرین ها</option>
      <option value="fisrt">اولین ها</option>
      <option value="stars">پرامتیاز ترین</option>
      <option value="expensive">گرانترین ها</option>
      <option value="lowest">ارزانترین ها</option>
    </select>
  </div>

  <!-- Display Mode -->
  <div class="hidden sm:flex items-center justify-center gap-1 sm:gap-2">
    <div class="w-max">
      <input type="radio" name="display-mode" id="col-display"
        class="display-mode__input hidden" checked>
      <label for="col-display"
        class="block w-max h-max p-1 rounded bg-gray-200 dark:bg-gray-700 cursor-pointer">
        <svg class="size-7">
          <use xlink:href="#category-icon"></use>
        </svg>
      </label>
    </div>
    <div class="w-max">
      <input type="radio" name="display-mode" id="row-display"
        class="display-mode__input hidden">
      <label for="row-display"
        class="block w-max h-max p-1 rounded bg-gray-200 dark:bg-gray-700 cursor-pointer">
        <svg class="size-7">
          <use xlink:href="#row-icon" class="font-bold"></use>
        </svg>
      </label>
    </div>
  </div>
</div>
`

export default class filteringNav extends HTMLElement {
  constructor(){
    super();
    this.appendChild(template.content.cloneNode(true))
  }

  connectedCallback(){
    this.className = "flex items-center justify-between mb-2 sm:mb-4"
  }
}