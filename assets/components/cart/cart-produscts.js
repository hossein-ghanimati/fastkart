const template = document.createElement('template')
template.innerHTML = `
<table class="w-full">
  <tbody class="w-full">
    <tr
      class="min-w-[1000px] grid grid-cols-10 gap-3 sm:gap-6 lg:gap-8 pb-2 sm:pb-4 last:pb-0 pt-2 sm:pt-4 first:pt-0 border-b last:border-none border-gray-300 dark:border-gray-500">
      <td
        class="col-span-3 w-max flex items-center justify-center gap-1">
        <a href="./productPreview.html?id=23asd23dqw-01"
          class="block size-20 p-2">
          <img src="./assets/image/cart-item-1.png" alt class="w-full">
        </a>

        <div class="space-y-1 sm:space-y-2">
          <p class="font-medium">ناگت مرغ</p>
          <div class="text-sm">
            <p>
              <span class="font-medium">سازنده : </span>
              <span class="text-gray-500 dark:text-gray-300">فست
                کارت</span>
            </p>

            <p>
              <span class="font-medium">مقدار : </span>
              <span class="text-gray-500 dark:text-gray-300">1
                کیلوگرم</span>
            </p>
          </div>
        </div>
      </td>

      <td class="col-span-2 w-full space-y-1 sm:space-y-2">
        <p class="text-sm">قیمت</p>
        <div class="text-sm md:text-base font-medium">
          <p>
            <span class="font-medium">70,000</span>
            <span class="line-through">100,000</span>
          </p>

          <p class="text-theme-color-dark dark:text-theme-color-light">
            <span class="font-medium">سود شما : </span>
            <span>30,000</span>
          </p>
        </div>
      </td>

      <td class="col-span-2 w-full space-y-1 sm:space-y-2">
        <p class="text-sm">تعداد</p>

        <div
          class="flex items-center justify-center h-9 p-1 bg-gray-200 dark:bg-gray-700 rounded">
          <!-- Plus Action -->
          <button type="button">
            <svg
              class="p-1 size-8 bg-gray-100 dark:bg-gray-800 rounded-full">
              <use xlink:href="#plus-icon"
                class="text-theme-color-dark dark:bg-theme-color-light"></use>
            </svg>
          </button>

          <!-- Item Count In Basket -->
          <input type="text" min="1" value="1"
            class="h-full w-20 text-center flex items-center justify-center bg-transparent"></input>

          <!-- Minus Actions -->
          <button type="button">
            <svg
              class="p-1 size-8 bg-gray-100 dark:bg-gray-800 rounded-full">
              <use xlink:href="#minus-icon"
                class="text-theme-color-dark dark:bg-theme-color-light"></use>
            </svg>
          </button>
        </div>
      </td>

      <td class="col-span-1 w-full space-y-2 sm:space-y-4">
        <p class="text-sm">جمع کل</p>

        <span class="block text-bold md:text-base font-medium">70,000</span>
      </td>

      <td class="col-span-2 w-full">
        <div class="h-full flex items-center justify-between gap-2">
          <button class="py-2 px-4 rounded bg-theme-color-dark dark:bg-theme-color-light text-stone-50">علاقه مندی</button>

          <button class="bg-danger rounded-full p-2">
            <svg class="size-6">
              <use xlink:href="#close-icon" class="text-white font-medium text-lg"></use>
            </svg>
          </button>
        </div>
      </td>
    </tr>

    <tr
      class="min-w-[1000px] grid grid-cols-10 gap-3 sm:gap-6 lg:gap-8 pb-2 sm:pb-4 last:pb-0 pt-2 sm:pt-4 first:pt-0 border-b last:border-none border-gray-300 dark:border-gray-500">
      <td
        class="col-span-3 w-max flex items-center justify-center gap-1">
        <a href="./productPreview.html?id=23asd23dqw-01"
          class="block size-20 p-2">
          <img src="./assets/image/cart-item-1.png" alt class="w-full">
        </a>

        <div class="space-y-1 sm:space-y-2">
          <p class="font-medium">ناگت مرغ</p>
          <div class="text-sm">
            <p>
              <span class="font-medium">سازنده : </span>
              <span class="text-gray-500 dark:text-gray-300">فست
                کارت</span>
            </p>

            <p>
              <span class="font-medium">مقدار : </span>
              <span class="text-gray-500 dark:text-gray-300">1
                کیلوگرم</span>
            </p>
          </div>
        </div>
      </td>

      <td class="col-span-2 w-full space-y-1 sm:space-y-2">
        <p class="text-sm">قیمت</p>
        <div class="text-sm md:text-base font-medium">
          <p>
            <span class="font-medium">70,000</span>
            <span class="line-through">100,000</span>
          </p>

          <p class="text-theme-color-dark dark:text-theme-color-light">
            <span class="font-medium">سود شما : </span>
            <span>30,000</span>
          </p>
        </div>
      </td>

      <td class="col-span-2 w-full space-y-1 sm:space-y-2">
        <p class="text-sm">تعداد</p>

        <div
          class="flex items-center justify-center h-9 p-1 bg-gray-200 dark:bg-gray-700 rounded">
          <!-- Plus Action -->
          <button type="button">
            <svg
              class="p-1 size-8 bg-gray-100 dark:bg-gray-800 rounded-full">
              <use xlink:href="#plus-icon"
                class="text-theme-color-dark dark:bg-theme-color-light"></use>
            </svg>
          </button>

          <!-- Item Count In Basket -->
          <input type="text" min="1" value="1"
            class="h-full w-20 text-center flex items-center justify-center bg-transparent"></input>

          <!-- Minus Actions -->
          <button type="button">
            <svg
              class="p-1 size-8 bg-gray-100 dark:bg-gray-800 rounded-full">
              <use xlink:href="#minus-icon"
                class="text-theme-color-dark dark:bg-theme-color-light"></use>
            </svg>
          </button>
        </div>
      </td>

      <td class="col-span-1 w-full space-y-2 sm:space-y-4">
        <p class="text-sm">جمع کل</p>

        <span class="block text-bold md:text-base font-medium">70,000</span>
      </td>

      <td class="col-span-2 w-full">
        <div class="h-full flex items-center justify-between gap-2">
          <button class="py-2 px-4 rounded bg-theme-color-dark dark:bg-theme-color-light text-stone-50">علاقه مندی</button>

          <button class="bg-danger rounded-full p-2">
            <svg class="size-6">
              <use xlink:href="#close-icon" class="text-white font-medium text-lg"></use>
            </svg>
          </button>
        </div>
      </td>
    </tr>

    <tr
      class="min-w-[1000px] grid grid-cols-10 gap-3 sm:gap-6 lg:gap-8 pb-2 sm:pb-4 last:pb-0 pt-2 sm:pt-4 first:pt-0 border-b last:border-none border-gray-300 dark:border-gray-500">
      <td
        class="col-span-3 w-max flex items-center justify-center gap-1">
        <a href="./productPreview.html?id=23asd23dqw-01"
          class="block size-20 p-2">
          <img src="./assets/image/cart-item-1.png" alt class="w-full">
        </a>

        <div class="space-y-1 sm:space-y-2">
          <p class="font-medium">ناگت مرغ</p>
          <div class="text-sm">
            <p>
              <span class="font-medium">سازنده : </span>
              <span class="text-gray-500 dark:text-gray-300">فست
                کارت</span>
            </p>

            <p>
              <span class="font-medium">مقدار : </span>
              <span class="text-gray-500 dark:text-gray-300">1
                کیلوگرم</span>
            </p>
          </div>
        </div>
      </td>

      <td class="col-span-2 w-full space-y-1 sm:space-y-2">
        <p class="text-sm">قیمت</p>
        <div class="text-sm md:text-base font-medium">
          <p>
            <span class="font-medium">70,000</span>
            <span class="line-through">100,000</span>
          </p>

          <p class="text-theme-color-dark dark:text-theme-color-light">
            <span class="font-medium">سود شما : </span>
            <span>30,000</span>
          </p>
        </div>
      </td>

      <td class="col-span-2 w-full space-y-1 sm:space-y-2">
        <p class="text-sm">تعداد</p>

        <div
          class="flex items-center justify-center h-9 p-1 bg-gray-200 dark:bg-gray-700 rounded">
          <!-- Plus Action -->
          <button type="button">
            <svg
              class="p-1 size-8 bg-gray-100 dark:bg-gray-800 rounded-full">
              <use xlink:href="#plus-icon"
                class="text-theme-color-dark dark:bg-theme-color-light"></use>
            </svg>
          </button>

          <!-- Item Count In Basket -->
          <input type="text" min="1" value="1"
            class="h-full w-20 text-center flex items-center justify-center bg-transparent"></input>

          <!-- Minus Actions -->
          <button type="button">
            <svg
              class="p-1 size-8 bg-gray-100 dark:bg-gray-800 rounded-full">
              <use xlink:href="#minus-icon"
                class="text-theme-color-dark dark:bg-theme-color-light"></use>
            </svg>
          </button>
        </div>
      </td>

      <td class="col-span-1 w-full space-y-2 sm:space-y-4">
        <p class="text-sm">جمع کل</p>

        <span class="block text-bold md:text-base font-medium">70,000</span>
      </td>

      <td class="col-span-2 w-full">
        <div class="h-full flex items-center justify-between gap-2">
          <button class="py-2 px-4 rounded bg-theme-color-dark dark:bg-theme-color-light text-stone-50">علاقه مندی</button>

          <button class="bg-danger rounded-full p-2">
            <svg class="size-6">
              <use xlink:href="#close-icon" class="text-white font-medium text-lg"></use>
            </svg>
          </button>
        </div>
      </td>
    </tr>

    <tr
      class="min-w-[1000px] grid grid-cols-10 gap-3 sm:gap-6 lg:gap-8 pb-2 sm:pb-4 last:pb-0 pt-2 sm:pt-4 first:pt-0 border-b last:border-none border-gray-300 dark:border-gray-500">
      <td
        class="col-span-3 w-max flex items-center justify-center gap-1">
        <a href="./productPreview.html?id=23asd23dqw-01"
          class="block size-20 p-2">
          <img src="./assets/image/cart-item-1.png" alt class="w-full">
        </a>

        <div class="space-y-1 sm:space-y-2">
          <p class="font-medium">ناگت مرغ</p>
          <div class="text-sm">
            <p>
              <span class="font-medium">سازنده : </span>
              <span class="text-gray-500 dark:text-gray-300">فست
                کارت</span>
            </p>

            <p>
              <span class="font-medium">مقدار : </span>
              <span class="text-gray-500 dark:text-gray-300">1
                کیلوگرم</span>
            </p>
          </div>
        </div>
      </td>

      <td class="col-span-2 w-full space-y-1 sm:space-y-2">
        <p class="text-sm">قیمت</p>
        <div class="text-sm md:text-base font-medium">
          <p>
            <span class="font-medium">70,000</span>
            <span class="line-through">100,000</span>
          </p>

          <p class="text-theme-color-dark dark:text-theme-color-light">
            <span class="font-medium">سود شما : </span>
            <span>30,000</span>
          </p>
        </div>
      </td>

      <td class="col-span-2 w-full space-y-1 sm:space-y-2">
        <p class="text-sm">تعداد</p>

        <div
          class="flex items-center justify-center h-9 p-1 bg-gray-200 dark:bg-gray-700 rounded">
          <!-- Plus Action -->
          <button type="button">
            <svg
              class="p-1 size-8 bg-gray-100 dark:bg-gray-800 rounded-full">
              <use xlink:href="#plus-icon"
                class="text-theme-color-dark dark:bg-theme-color-light"></use>
            </svg>
          </button>

          <!-- Item Count In Basket -->
          <input type="text" min="1" value="1"
            class="h-full w-20 text-center flex items-center justify-center bg-transparent"></input>

          <!-- Minus Actions -->
          <button type="button">
            <svg
              class="p-1 size-8 bg-gray-100 dark:bg-gray-800 rounded-full">
              <use xlink:href="#minus-icon"
                class="text-theme-color-dark dark:bg-theme-color-light"></use>
            </svg>
          </button>
        </div>
      </td>

      <td class="col-span-1 w-full space-y-2 sm:space-y-4">
        <p class="text-sm">جمع کل</p>

        <span class="block text-bold md:text-base font-medium">70,000</span>
      </td>

      <td class="col-span-2 w-full">
        <div class="h-full flex items-center justify-between gap-2">
          <button class="py-2 px-4 rounded bg-theme-color-dark dark:bg-theme-color-light text-stone-50">علاقه مندی</button>

          <button class="bg-danger rounded-full p-2">
            <svg class="size-6">
              <use xlink:href="#close-icon" class="text-white font-medium text-lg"></use>
            </svg>
          </button>
        </div>
      </td>
    </tr>
  </tbody>
</table>
`

export default class CartProducts extends HTMLElement {
  constructor(){
    super();
    this.appendChild(template.content.cloneNode(true))
  }

  connectedCallback(){
    this.className = "block table-wrapper col-span-5 3xl:col-span-4 overflow-auto max-h-screen bg-gray-200 dark:bg-gray-700 p-2 sm:p-4 lg:p-6 rounded sm:rounded-md lg:rounded-lg shadow sm:shadow-lg"
  }
}

