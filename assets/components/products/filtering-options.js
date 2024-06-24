const template = document.createElement('template');
template.innerHTML = `
<input type="checkbox" name="filtering-modal__input" id="filtering-modal__input"
  class="hidden">
<!-- Modal -->
<div
  class="bg-white dark:bg-gray-900 rounded-md sm:rounded-lg p-2 sm:p-4 hidden items-center gap-2 sm:gap-4 w-full sm:w-max flex-wrap overflow-hidden">
  <div
    class="w-full sm:w-[180px] lg:w-[250px] h-max pb-4 sm:pb-0 sm:pl-4 border-b sm:border-b-0 sm:border-l border-gray-300 dark:border-gray-500">
    <span
      class="font-lg font-medium text-theme-color-dark dark:text-theme-color-light">دسته
      بندی ها</span>

    <ul class="w-full pl-1 sm:pl-2 overflow-x-hidden overflow-y-auto h-[190px]">
      <li class="flex items-center justify-between p-2">
        <div class="flex items-center gap-1">
          <input type="checkbox" name="cat-selector" class="cat-selector"
            id="cat-1">
          <label for="cat-1" class="line-clamp-1 max-h-[82px]">میوه ها</label>
        </div>
        <div class="text-gray-500 dark:text-gray-300">
          (
          <span>51</span>
          )
        </div>
      </li>

      <li class="flex items-center justify-between p-2">
        <div class="flex items-center gap-1">
          <input type="checkbox" name="cat-selector" class="cat-selector"
            id="cat-2">
          <label for="cat-2" class="line-clamp-1 max-h-[82px]">میوه ها</label>
        </div>
        <div class="text-gray-500 dark:text-gray-300">
          (
          <span>51</span>
          )
        </div>
      </li>

      <li class="flex items-center justify-between p-2">
        <div class="flex items-center gap-1">
          <input type="checkbox" name="cat-selector" class="cat-selector"
            id="cat-3">
          <label for="cat-3" class="line-clamp-1 max-h-[82px]">میوه ها</label>
        </div>
        <div class="text-gray-500 dark:text-gray-300">
          (
          <span>51</span>
          )
        </div>
      </li>

      <li class="flex items-center justify-between p-2">
        <div class="flex items-center gap-1">
          <input type="checkbox" name="cat-selector" class="cat-selector"
            id="cat-4">
          <label for="cat-4" class="line-clamp-1 max-h-[82px]">میوه ها</label>
        </div>
        <div class="text-gray-500 dark:text-gray-300">
          (
          <span>51</span>
          )
        </div>
      </li>

      <li class="flex items-center justify-between p-2">
        <div class="flex items-center gap-1">
          <input type="checkbox" name="cat-selector" class="cat-selector"
            id="cat-5">
          <label for="cat-5" class="line-clamp-1 max-h-[82px]">میوه ها</label>
        </div>
        <div class="text-gray-500 dark:text-gray-300">
          (
          <span>51</span>
          )
        </div>
      </li>

      <li class="flex items-center justify-between p-2">
        <div class="flex items-center gap-1">
          <input type="checkbox" name="cat-selector" class="cat-selector"
            id="cat-6">
          <label for="cat-6" class="line-clamp-1 max-h-[82px]">میوه ها</label>
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
    class="w-full sm:w-[180px] lg:w-[250px] h-max pb-4 sm:pb-0 sm:pl-4 border-b sm:border-b-0 sm:border-l border-gray-300 dark:border-gray-500">
    <span
      class="font-lg font-medium text-theme-color-dark dark:text-theme-color-light">حداقل
      قیمت</span>

    <ul class="w-full pl-1 sm:pl-2 overflow-x-hidden overflow-y-auto h-[190px]">
      <li class="flex items-center p-2">
        <div class="flex items-center gap-1">
          <input type="radio" name="min-price-selector"
            class="min-price-selector" id="min-price-1">
          <label for="min-price-1" class="line-clamp-1 max-h-[82px]">میوه
            ها</label>
        </div>
      </li>

      <li class="flex items-center p-2">
        <div class="flex items-center gap-1">
          <input type="radio" name="min-price-selector"
            class="min-price-selector" id="min-price-2">
          <label for="min-price-2" class="line-clamp-1 max-h-[82px]">میوه
            ها</label>
        </div>
      </li>

      <li class="flex items-center p-2">
        <div class="flex items-center gap-1">
          <input type="radio" name="min-price-selector"
            class="min-price-selector" id="min-price-3">
          <label for="min-price-3" class="line-clamp-1 max-h-[82px]">میوه
            ها</label>
        </div>
      </li>

      <li class="flex items-center p-2">
        <div class="flex items-center gap-1">
          <input type="radio" name="min-price-selector"
            class="min-price-selector" id="min-price-4">
          <label for="min-price-4" class="line-clamp-1 max-h-[82px]">میوه
            ها</label>
        </div>
      </li>

      <li class="flex items-center p-2">
        <div class="flex items-center gap-1">
          <input type="radio" name="min-price-selector"
            class="min-price-selector" id="min-price-5">
          <label for="min-price-5" class="line-clamp-1 max-h-[82px]">میوه
            ها</label>
        </div>
      </li>

      <li class="flex items-center p-2">
        <div class="flex items-center gap-1">
          <input type="radio" name="min-price-selector"
            class="min-price-selector" id="min-price-6">
          <label for="min-price-6" class="line-clamp-1 max-h-[82px]">میوه
            ها</label>
        </div>
      </li>

    </ul>
  </div>

  <div class="w-full sm:w-[180px] lg:w-[250px] h-max">
    <span
      class="font-lg font-medium text-theme-color-dark dark:text-theme-color-light">حداکثر
      قیمت</span>

    <ul class="w-full pl-1 sm:pl-2 overflow-x-hidden overflow-y-auto h-[190px]">
      <li class="flex items-center p-2">
        <div class="flex items-center gap-1">
          <input type="radio" name="max-price-selector"
            class="max-price-selector" id="max-price-1">
          <label for="max-price-1" class="line-clamp-1 max-h-[82px]">میوه
            ها</label>
        </div>
      </li>

      <li class="flex items-center p-2">
        <div class="flex items-center gap-1">
          <input type="radio" name="max-price-selector"
            class="max-price-selector" id="max-price-2">
          <label for="max-price-2" class="line-clamp-1 max-h-[82px]">میوه
            ها</label>
        </div>
      </li>

      <li class="flex items-center p-2">
        <div class="flex items-center gap-1">
          <input type="radio" name="max-price-selector"
            class="max-price-selector" id="max-price-3">
          <label for="max-price-3" class="line-clamp-1 max-h-[82px]">میوه
            ها</label>
        </div>
      </li>

      <li class="flex items-center p-2">
        <div class="flex items-center gap-1">
          <input type="radio" name="max-price-selector"
            class="max-price-selector" id="max-price-4">
          <label for="max-price-4" class="line-clamp-1 max-h-[82px]">میوه
            ها</label>
        </div>
      </li>

      <li class="flex items-center p-2">
        <div class="flex items-center gap-1">
          <input type="radio" name="max-price-selector"
            class="max-price-selector" id="max-price-5">
          <label for="max-price-5" class="line-clamp-1 max-h-[82px]">میوه
            ها</label>
        </div>
      </li>

      <li class="flex items-center p-2">
        <div class="flex items-center gap-1">
          <input type="radio" name="max-price-selector"
            class="max-price-selector" id="max-price-6">
          <label for="max-price-6" class="line-clamp-1 max-h-[82px]">میوه
            ها</label>
        </div>
      </li>

    </ul>
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