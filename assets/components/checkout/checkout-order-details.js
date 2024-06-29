const template = document.createElement("template")
template.innerHTML = `
<div class="bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg px-3 py-6">
  <p class="font-bold text-lg">آدرس پستی</p>
  <!-- Locations -->
  <div class="grid grid-cols-2 gap-4 mt-3">
    <div
      class="col-span-2 md:col-span-1 lg:col-span-2 3xl:col-span-1 bg-gray-100 dark:bg-gray-800 p-5 rounded-md flex items-start gap-2">
      <div class="inline-block h-full p-1">
        <input type="radio" name="locations-selector__input"
          id="locations-selector__input-1" data-location="1"
          class="radio-input bg-center bg-no-repeat bg-contain checked:appearance-none size-4 rounded-full"
          checked>
      </div>
      <label for="locations-selector__input-1"
        class="block w-full space-y-1 cursor-pointer">
        <div class="flex items-center justify-between">
          <span class="font-medium text-lg">حسین غنیمتی</span>
          <span
            class="bg-theme-color-dark dark:bg-theme-color-light text-stone-50 px-2 rounded text-[12px]">خانه</span>
        </div>

        <div class="line-clamp-1">
          <span class="font-medium">آدرس:</span>
          <span class="text-sm text-gray-500 dark:text-gray-300">زنجان اسلام
            آباد ، خیابان شهید محمدی پلاک 526</span>
        </div>

        <div class="line-clamp-1">
          <span class="font-medium">کدپستی :</span>
          <span
            class="text-sm text-gray-500 dark:text-gray-300">1234567890</span>
        </div>

        <div class="line-clamp-1">
          <span class="font-medium">شماره تماس:</span>
          <span
            class="text-sm text-gray-500 dark:text-gray-300 cursor-copy">09915823411</span>
        </div>
      </label>
    </div>

    <div
      class="col-span-2 md:col-span-1 lg:col-span-2 3xl:col-span-1 bg-gray-100 dark:bg-gray-800 p-5 rounded-md flex items-start gap-2">
      <div class="inline-block h-full p-1">
        <input type="radio" name="locations-selector__input"
          id="locations-selector__input-2" data-location="2"
          class="radio-input bg-center bg-no-repeat bg-contain checked:appearance-none size-4 rounded-full">
      </div>
      <label for="locations-selector__input-2"
        class="block w-full space-y-1 cursor-pointer">
        <div class="flex items-center justify-between">
          <span class="font-medium text-lg">مهدی شاهی</span>
          <span
            class="bg-theme-color-dark dark:bg-theme-color-light text-stone-50 px-2 rounded text-[12px]">محل
            کار</span>
        </div>

        <div class="line-clamp-1">
          <span class="font-medium">آدرس:</span>
          <span class="text-sm text-gray-500 dark:text-gray-300">زنجان اسلام
            آباد ، خیابان شهید محمدی پلاک 526</span>
        </div>

        <div class="line-clamp-1">
          <span class="font-medium">کدپستی :</span>
          <span
            class="text-sm text-gray-500 dark:text-gray-300">1234567890</span>
        </div>

        <div class="line-clamp-1">
          <span class="font-medium">شماره تماس:</span>
          <span
            class="text-sm text-gray-500 dark:text-gray-300 cursor-copy">09915823411</span>
        </div>
      </label>
    </div>
    <div class="col-span-2 overflow-hidden aspect-video z-20" id="map"></div>
  </div>
</div>

<div class="bg-gray-200 dark:bg-gray-700 rounded-lg shadow-lg px-3 py-6">
  <p class="font-bold text-lg">زمان ارسال</p>

  <div class="space-y-4 mt-3">
    <div
      class="bg-gray-100 dark:bg-gray-800 p-5 rounded-md flex items-start gap-2">
      <div class="inline-block h-full p-1">
        <input type="radio" name="date-selector__input"
          id="date-selector__input-1" data-date="1"
          class="radio-input bg-center bg-no-repeat bg-contain checked:appearance-none size-4 rounded-full"
          checked>
      </div>
      <label for="date-selector__input-1"
        class="block w-full space-y-1 cursor-pointer">
        <div class="flex items-center">
          <span class="font-medium">ارسال در تاریخ امروز</span>
        </div>
      </label>
    </div>

    <div
      class="bg-gray-100 dark:bg-gray-800 p-5 rounded-md flex items-center gap-2">
      <div class="h-full p-1 inline-flex items-center">
        <input type="radio" name="date-selector__input"
          id="date-selector__input-2" data-date="2"
          class="radio-input bg-center bg-no-repeat bg-contain checked:appearance-none size-4 rounded-full">
      </div>
      <label for="date-selector__input-2"
        class="block w-full space-y-1 cursor-pointer">
        <div class="flex items-center flex-wrap gap-4">
          <span class="font-medium">ارسال در تاریخ :</span>

          <div
            class="border border-gray-300 dark:border-x-gray-500 max-w[60%] relative rounded mr-1 2xs:mr-3">
            <span
              class="bg-gray-100 dark:bg-gray-800 absolute -top-3 right-4 text-[12px] text-gray-500 dark:text-gray-300 px-2">زمان
              ارسال</span>
            <input type="date"
              class="w-full min-w-[160px] py-2 px-3  flex items-center justify-start bg-transparent">
          </div>
        </div>
      </label>
    </div>
  </div>
</div>
`

export default class CheckoutOrderDetails extends HTMLElement{
  constructor(){
    super()
    this.appendChild(template.content.cloneNode(true))
  }

  connectedCallback(){
    this.className = "block col-span-10 lg:col-span-7 space-y-3 xs:space-y-6"
  }
}