const template = document.createElement('template');
template.innerHTML = `
<input type="checkbox" name="filtering-modal__input"
  id="filtering-modal__input"
  class="hidden">
<!-- Modal -->
<div
  class="bg-white dark:bg-gray-900 rounded-md sm:rounded-lg p-2 sm:p-4 hidden items-center gap-2 sm:gap-4 w-full sm:w-max flex-wrap overflow-hidden">
  <div
    class="w-full sm:w-[180px] lg:w-[250px] h-max pb-4 sm:pb-0 sm:pl-4 border-b sm:border-b-0 sm:border-l border-gray-300 dark:border-gray-500">
    <span
      class="font-lg font-medium text-theme-color-dark dark:text-theme-color-light">دسته
      بندی ها</span>

    <ul
      class="w-full pl-1 sm:pl-2 overflow-x-hidden overflow-y-auto h-[190px]">
      <li class="flex items-center justify-between p-2">
        <div class="flex items-center gap-1">
          <input type="checkbox" name="cat-selector" data-cat="fruits"
            class="cat-selector"
            id="cat-1">
          <label for="cat-1"
            class="line-clamp-1 max-h-[82px] cursor-pointer">میوه
            ها</label>
        </div>
        <div class="text-gray-500 dark:text-gray-300">
          (
          <span>51</span>
          )
        </div>
      </li>

      <li class="flex items-center justify-between p-2">
        <div class="flex items-center gap-1">
          <input type="checkbox" name="cat-selector"
            data-cat="vegetables" class="cat-selector"
            id="cat-2">
          <label for="cat-2"
            class="line-clamp-1 max-h-[82px] cursor-pointer">سبزیجات</label>
        </div>
        <div class="text-gray-500 dark:text-gray-300">
          (
          <span>51</span>
          )
        </div>
      </li>

      <li class="flex items-center justify-between p-2">
        <div class="flex items-center gap-1">
          <input type="checkbox" name="cat-selector" data-cat="dairies"
            class="cat-selector"
            id="cat-3">
          <label for="cat-3"
            class="line-clamp-1 max-h-[82px] cursor-pointer">لبنیات</label>
        </div>
        <div class="text-gray-500 dark:text-gray-300">
          (
          <span>51</span>
          )
        </div>
      </li>

      <li class="flex items-center justify-between p-2">
        <div class="flex items-center gap-1">
          <input type="checkbox" name="cat-selector" data-cat="drinks"
            class="cat-selector"
            id="cat-4">
          <label for="cat-4"
            class="line-clamp-1 max-h-[82px] cursor-pointer">نوشیدنی</label>
        </div>
        <div class="text-gray-500 dark:text-gray-300">
          (
          <span>51</span>
          )
        </div>
      </li>

      <li class="flex items-center justify-between p-2">
        <div class="flex items-center gap-1">
          <input type="checkbox" name="cat-selector" data-cat="beans"
            class="cat-selector"
            id="cat-5">
          <label for="cat-5"
            class="line-clamp-1 max-h-[82px] cursor-pointer">حبوبات</label>
        </div>
        <div class="text-gray-500 dark:text-gray-300">
          (
          <span>51</span>
          )
        </div>
      </li>

      <li class="flex items-center justify-between p-2">
        <div class="flex items-center gap-1">
          <input type="checkbox" name="cat-selector" data-cat="snacks"
            class="cat-selector"
            id="cat-6">
          <label for="cat-6"
            class="line-clamp-1 max-h-[82px] cursor-pointer">تنقلات</label>
        </div>
        <div class="text-gray-500 dark:text-gray-300">
          (
          <span>51</span>
          )
        </div>
      </li>

    </ul>
  </div>

  <div
    class="w-full sm:w-[180px] lg:w-[250px] h-max pb-4">
    <span
      class="font-lg font-medium text-theme-color-dark dark:text-theme-color-light">محدوده
      قیمت
      <span class="text-sm font-aviny">(تومان)</span>
    </span>

    <div class="range-wrapper h-max flex justify-center items-center mt-3">
      <div x-data="range()" x-init="mintrigger(); maxtrigger()"
        class="relative max-w-xl w-full">
        <div>
          <input type="range"
            step="100"
            x-bind:min="min" x-bind:max="max"
            x-on:input="mintrigger"
            x-model="minprice"
            class="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer">

          <input type="range"
            step="100"
            x-bind:min="min" x-bind:max="max"
            x-on:input="maxtrigger"
            x-model="maxprice"
            class="absolute pointer-events-none appearance-none z-20 h-2 w-full opacity-0 cursor-pointer">

          <div class="relative z-10 h-2">

            <div
              class="absolute z-10 left-0 right-0 bottom-0 top-0 rounded-md bg-gray-200 dark:bg-gray-700"></div>

            <div
              class="absolute z-20 top-0 bottom-0 rounded-md bg-theme-color-dark dark:bg-theme-color-light"
              x-bind:style="'right:'+maxthumb+'%; left:'+minthumb+'%'"></div>

            <div
              class="absolute z-30 w-6 h-6 scale-[60%] top-0 left-0 bg-theme-color-dark dark:bg-theme-color-light rounded-full -mt-2 -ml-1"
              x-bind:style="'left: '+minthumb+'%'"></div>

            <div
              class="absolute z-30 w-6 h-6 scale-[60%] top-0 right-0 bg-theme-color-dark dark:bg-theme-color-light rounded-full -mt-2 -mr-3"
              x-bind:style="'right: '+maxthumb+'%'"></div>

          </div>

        </div>

        <div class="flex justify-between items-center py-5">
          <div class="bg-gray-200 dark:bg-gray-700 rounded">
            <input type="text" maxlength="5" x-on:input="mintrigger"
              x-model="minprice"
              class="min-price-input bg-transparent px-3 py-2 border border-gray-200 rounded w-20 text-center">
          </div>
          <div class="bg-gray-200 dark:bg-gray-700 rounded">
            <input type="text" maxlength="5" x-on:input="maxtrigger"
              x-model="maxprice"
              class="max-price-input bg-transparent px-3 py-2 border border-gray-200 rounded w-20 text-center">
          </div>
        </div>

      </div>
    </div>

    <div class="flex items-center justify-end">
      <button
        class="px-5 py-2 rounded bg-theme-color-dark dark:bg-theme-color-light text-stone-50 mt-4 sm:mt-8"
        onclick="applyFilstersClickHandler()">اعمال</button>
    </div>

  </div>
</div>
`

export default class FilteringOptions extends HTMLElement{
  constructor(){
    super();
    this.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(){
    this.className = "block"
  }
}