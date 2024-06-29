const template = document.createElement('template')
template.innerHTML =`
<div
  class="block table-wrapper col-span-10 lg:col-span-7 overflow-auto max-h-screen bg-gray-200 dark:bg-gray-700 p-2 sm:p-4 lg:p-6 rounded sm:rounded-md lg:rounded-lg shadow sm:shadow-lg">
  <table class="w-full">
    <tbody class="w-full">
      <tr
        class="min-w-[500px] grid grid-cols-8 gap-3 sm:gap-6 lg:gap-8 pb-2 sm:pb-4 last:pb-0 pt-2 sm:pt-4 first:pt-0 border-b last:border-none border-gray-300 dark:border-gray-500">
        <td
          class="col-span-3 w-max flex items-center justify-center gap-1">
          <a href="./productPreview.html?id=23asd23dqw-01"
            class="block size-20 p-2">
            <img src="./assets/image/cart-item-1.png" alt
              class="w-full">
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

        <td
          class="col-span-3 w-full space-y-1 sm:space-y-2 flex flex-col items-center">
          <p class="text-sm w-3/4">قیمت</p>
          <div class="text-sm md:text-base font-medium">
            <p>
              <span class="font-medium">70,000</span>
              <span class="line-through">100,000</span>
            </p>

            <p
              class="text-theme-color-dark dark:text-theme-color-light">
              <span class="font-medium">سود شما : </span>
              <span>30,000</span>
            </p>
          </div>
        </td>

        <td
          class="col-span-1 w-full space-y-1 sm:space-y-2 flex flex-col items-center justify-start gap-1">
          <p class="text-sm">تعداد</p>

          <span>1</span>
        </td>

        <td class="col-span-1 w-full space-y-2 sm:space-y-4">
          <p class="text-sm">جمع کل</p>

          <span
            class="block text-bold md:text-base font-medium">70,000</span>
        </td>
      </tr>

      <tr
        class="min-w-[500px] grid grid-cols-8 gap-3 sm:gap-6 lg:gap-8 pb-2 sm:pb-4 last:pb-0 pt-2 sm:pt-4 first:pt-0 border-b last:border-none border-gray-300 dark:border-gray-500">
        <td
          class="col-span-3 w-max flex items-center justify-center gap-1">
          <a href="./productPreview.html?id=23asd23dqw-01"
            class="block size-20 p-2">
            <img src="./assets/image/cart-item-1.png" alt
              class="w-full">
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

        <td
          class="col-span-3 w-full space-y-1 sm:space-y-2 flex flex-col items-center">
          <p class="text-sm w-3/4">قیمت</p>
          <div class="text-sm md:text-base font-medium">
            <p>
              <span class="font-medium">70,000</span>
              <span class="line-through">100,000</span>
            </p>

            <p
              class="text-theme-color-dark dark:text-theme-color-light">
              <span class="font-medium">سود شما : </span>
              <span>30,000</span>
            </p>
          </div>
        </td>

        <td
          class="col-span-1 w-full space-y-1 sm:space-y-2 flex flex-col items-center justify-start gap-1">
          <p class="text-sm">تعداد</p>

          <span>1</span>
        </td>

        <td class="col-span-1 w-full space-y-2 sm:space-y-4">
          <p class="text-sm">جمع کل</p>

          <span
            class="block text-bold md:text-base font-medium">70,000</span>
        </td>
      </tr>

      <tr
        class="min-w-[500px] grid grid-cols-8 gap-3 sm:gap-6 lg:gap-8 pb-2 sm:pb-4 last:pb-0 pt-2 sm:pt-4 first:pt-0 border-b last:border-none border-gray-300 dark:border-gray-500">
        <td
          class="col-span-3 w-max flex items-center justify-center gap-1">
          <a href="./productPreview.html?id=23asd23dqw-01"
            class="block size-20 p-2">
            <img src="./assets/image/cart-item-1.png" alt
              class="w-full">
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

        <td
          class="col-span-3 w-full space-y-1 sm:space-y-2 flex flex-col items-center">
          <p class="text-sm w-3/4">قیمت</p>
          <div class="text-sm md:text-base font-medium">
            <p>
              <span class="font-medium">70,000</span>
              <span class="line-through">100,000</span>
            </p>

            <p
              class="text-theme-color-dark dark:text-theme-color-light">
              <span class="font-medium">سود شما : </span>
              <span>30,000</span>
            </p>
          </div>
        </td>

        <td
          class="col-span-1 w-full space-y-1 sm:space-y-2 flex flex-col items-center justify-start gap-1">
          <p class="text-sm">تعداد</p>

          <span>1</span>
        </td>

        <td class="col-span-1 w-full space-y-2 sm:space-y-4">
          <p class="text-sm">جمع کل</p>

          <span
            class="block text-bold md:text-base font-medium">70,000</span>
        </td>
      </tr>

      <tr
        class="min-w-[500px] grid grid-cols-8 gap-3 sm:gap-6 lg:gap-8 pb-2 sm:pb-4 last:pb-0 pt-2 sm:pt-4 first:pt-0 border-b last:border-none border-gray-300 dark:border-gray-500">
        <td
          class="col-span-3 w-max flex items-center justify-center gap-1">
          <a href="./productPreview.html?id=23asd23dqw-01"
            class="block size-20 p-2">
            <img src="./assets/image/cart-item-1.png" alt
              class="w-full">
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

        <td
          class="col-span-3 w-full space-y-1 sm:space-y-2 flex flex-col items-center">
          <p class="text-sm w-3/4">قیمت</p>
          <div class="text-sm md:text-base font-medium">
            <p>
              <span class="font-medium">70,000</span>
              <span class="line-through">100,000</span>
            </p>

            <p
              class="text-theme-color-dark dark:text-theme-color-light">
              <span class="font-medium">سود شما : </span>
              <span>30,000</span>
            </p>
          </div>
        </td>

        <td
          class="col-span-1 w-full space-y-1 sm:space-y-2 flex flex-col items-center justify-start gap-1">
          <p class="text-sm">تعداد</p>

          <span>1</span>
        </td>

        <td class="col-span-1 w-full space-y-2 sm:space-y-4">
          <p class="text-sm">جمع کل</p>

          <span
            class="block text-bold md:text-base font-medium">70,000</span>
        </td>
      </tr>
    </tbody>
  </table>
</div>

<div class="col-span-10 lg:col-span-3 grid grid-cols-2 gap-3 lg:gap-7 h-max">
  <div
    class="col-span-2 sm:col-span-1 lg:col-span-2 p-4 rounded-md 3xl:rounded shadow-lg bg-gray-200 dark:bg-gray-700">
    <div
      class="pb-2 border-b border-gray-300 dark:border-gray-500 font-medium text-lg flex items-center justify-between">
      <span>جزئیات خرید</span>
      <span class="text-theme-color-dark dark:text-theme-color-light text-sm">(
        4 آیتم )</span>
    </div>

    <div class="text-sm">
      <div class="space-y-1 py-4 border-y border-gray-300 dark:border-gray-500">
        <div class="flex items-center justify-between">
          <span>جمع خرید</span>
          <span
            class="text-gray-500 dark:text-gray-300 text-base">350,000</span>
        </div>

        <div
          class="flex items-center justify-between text-gray-500 dark:text-gray-300 t">
          <span>سود شما</span>
          <span
            class="text-theme-color-dark dark:text-theme-color-ligh text-base">120,000</span>
        </div>

        <div
          class="6 flex items-center justify-between text-gray-500 dark:text-gray-300 ">
          <span>کد تخفیف</span>
          <span class="text-danger text-base">00</span>
        </div>
      </div>

      <div class="mt-4  flex flex-col gap-4">
        <p class="flex items-center justify-between text-lg font-bold">
          <span>جمع کل</span>
          <span>350,000</span>
        </p>
      </div>
    </div>
  </div>

  <div
    class="col-span-2 sm:col-span-1 lg:col-span-2 p-4 rounded-md 3xl:rounded shadow-lg bg-gray-200 dark:bg-gray-700">
    <div
      class="pb-2 border-b border-gray-300 dark:border-gray-500 font-medium text-lg">
      <span>آدرس تحویل</span>
    </div>

    <div class="text-gray-500 dark:text-gray-300 text-sm">
      <div
        class="space-y-3 pt-4 pb-1 border-t border-gray-300 dark:border-gray-500">
        <div>
          <span>تهران برج میلاد</span>
        </div>

        <div>
          <span>طبقه سوم واحد 1</span>
        </div>

        <div class="flex items-center justify-between text-base">
          <span>تاریخ تحویل :</span>
          <a href="./order-tracking.html" class="text-danger text-sm">پیگیری
            سفارش</a>
        </div>
      </div>

      <div>
        <p class="text-lg font-bold text-black dark:text-white">
          2024/03/01
        </p>
      </div>
    </div>
  </div>
</div>
`

export default class OrderAllDetails extends HTMLElement{
  constructor(){
    super();
    this.appendChild(template.content.cloneNode(true))
  }

  connectedCallback(){
    this.className = "my-6 grid grid-cols-10 gap-4 lg:gap-7"
  }
}