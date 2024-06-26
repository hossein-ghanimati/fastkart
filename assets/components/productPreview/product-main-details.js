const template = document.createElement('template');
template.innerHTML = `
<!-- Product Pictures -->
<div
  class="2xl:sticky top-3 col-span-2 2xl:col-span-1 grid grid-cols-10 gap-1 sm:h-[475px] md:h-[451px] lg:h-[390px] xl:h-[552px] 2xl:h-max 3xl:h-[366px]">
  <!-- Product Main Picture -->
  <div
    class="swiper rounded-md shadow-md w-full h-max col-span-10 sm:col-span-8 2xl:col-span-10 3xl:col-span-8 sm:order-1 2xl:order-none 3xl:order-1">
    <!-- <div class="swiper w-full col-span-10 shadow rounded md:rounded-md"> -->
    <div class="swiper-wrapper">
      <div class="swiper-slide cursor-grab">
        <img
          src="./assets/image/products/کیک شکلاتی خامه ای/1.jpg"
          alt="عکس کوچک">
      </div>

      <div class="swiper-slide cursor-grab">
        <img
          src="./assets/image/products/کیک شکلاتی خامه ای/2.jpg"
          alt="عکس کوچک">
      </div>

      <div class="swiper-slide cursor-grab">
        <img
          src="./assets/image/products/کیک شکلاتی خامه ای/3.jpg"
          alt="عکس کوچک">
      </div>

      <div class="swiper-slide cursor-grab">
        <img
          src="./assets/image/products/کیک شکلاتی خامه ای/4.jpg"
          alt="عکس کوچک">
      </div>

      <div class="swiper-slide cursor-grab">
        <img
          src="./assets/image/products/کیک شکلاتی خامه ای/5.jpg"
          alt="عکس کوچک">
      </div>

      <div class="swiper-slide cursor-grab">
        <img
          src="./assets/image/products/کیک شکلاتی خامه ای/6.jpg"
          alt="عکس کوچک">
      </div>
    </div>
  </div>

  <!-- Product Other Pictures -->
  <div
    class="swiper-2 overflow-hidden col-span-10 sm:col-span-2 2xl:col-span-10 3xl:col-span-2">
    <!-- <div class="swiper-2 overflow-hidden col-span-10"> -->
    <div class="swiper-wrapper">
      <div
        class="swiper-slide size-24 cursor-grab blur-[1px] rounded opacity-40 transition shadow">
        <img
          src="./assets/image/products/کیک شکلاتی خامه ای/1.jpg"
          alt="عکس کوچک">
      </div>

      <div
        class="swiper-slide size-24 cursor-grab blur-[1px] rounded opacity-40 transition shadow">
        <img
          src="./assets/image/products/کیک شکلاتی خامه ای/2.jpg"
          alt="عکس کوچک">
      </div>

      <div
        class="swiper-slide size-24 cursor-grab blur-[1px] rounded opacity-40 transition shadow">
        <img
          src="./assets/image/products/کیک شکلاتی خامه ای/3.jpg"
          alt="عکس کوچک">
      </div>

      <div
        class="swiper-slide size-24 cursor-grab blur-[1px] rounded opacity-40 transition shadow">
        <img
          src="./assets/image/products/کیک شکلاتی خامه ای/4.jpg"
          alt="عکس کوچک">
      </div>

      <div
        class="swiper-slide size-24 cursor-grab blur-[1px] rounded opacity-40 transition shadow">
        <img
          src="./assets/image/products/کیک شکلاتی خامه ای/5.jpg"
          alt="عکس کوچک">
      </div>

      <div
        class="swiper-slide size-24 cursor-grab blur-[1px] rounded opacity-40 transition shadow">
        <img
          src="./assets/image/products/کیک شکلاتی خامه ای/6.jpg"
          alt="عکس کوچک">
      </div>
    </div>
  </div>
</div>

<!-- Product Description -->
<div
  class="col-span-2 2xl:col-span-1 2xl:sticky top-0 flex flex-col items-center md:items-start">
  <!-- Product Offer -->
  <div
    class="inline-block py-2 px-4 relative bg-[#ff4f4f1a] text-red-500 font-medium rounded-lg">
    <span id="percent">30</span>% تخفیف
  </div>

  <!-- Product Name -->
  <h4
    class="text-lg 3xs:text-2xl md:text-[29px] font-bold line-clamp-1 mt-2 sm:mt-4 lg:mt-6">کیک
    شکلات خامه ای</h4>

  <!-- Price And Points -->
  <div
    class="w-full flex flex-col items-center md:flex-row md:justify-between mt-2 sm:mt-4 lg:mt-6">
    <!-- Price -->
    <div class="flex gap-1 sm:gap-2  items-center">
      <!-- Main Price -->
      <span
        class="text-base 3xs:text-xl md:text-2xl font-bold text-theme-color-dark dark:text-theme-color-light">
        <span id="price">70,000</span>
        تومان
      </span>

      <!-- Last Price -->
      <span
        class="text-sm 3xs:text-base text-gray-500 dark:text-gray-300 line-through">100,000</span>
    </div>

    <!-- Points -->
    <div class="flex items-center gap-1 mt-2 sm:mt-4 md:mt-0">
      <!-- Stars -->
      <div class="flex items-center">
        <img src="./assets/image/svg/star_fill.svg" alt="star"
          class="size-[14px] xs:size-4">

        <img src="./assets/image/svg/star_fill.svg" alt="star"
          class="size-[14px] xs:size-4">

        <img src="./assets/image/svg/star_fill.svg" alt="star"
          class="size-[14px] xs:size-4">

        <img src="./assets/image/svg/star_fill.svg" alt="star"
          class="size-[14px] xs:size-4">

        <img src="./assets/image/svg/star.svg" alt="star"
          class="size-[14px] xs:size-4">
      </div>

      <!-- Point Count -->
      <span class="text-sm text-gray-500 dark:text-gray-300">
        <span id="stars-count">23</span>
        بازخورد
      </span>
    </div>
  </div>

  <p id="description"
    class="p-1 xs:p-2 md:p-3 text-sm 2xs:text-base line-clamp-4 text-gray-500 dark:text-gray-300 pb-2 sm:pb-4 lg:pb-6 border-b border-gray-300 dark:border-gray-500">
    کیک آب نبات چوبی کیک شکلاتی کیک شکلاتی دسر عناب. شیرینی کوتاه
    آلو شکر پودر دسر کوکی براونی شیرین. کیک کیک پای سیب دسر کیک
    مافین آلو شکر.
  </p>

  <!-- Product Shopping Fields -->
  <div
    class="mt-2 sm:mt-4 lg:mt-6 flex flex-col items-center md:items-start gap-1 sm:gap-2 lg:gap-3">
    <span id="shopping-fields-title"
      class="font-semibold">وزن</span>
    <ul id="shopping-fields-list"
      class="gap-1 md:gap-2 flex justify-center md:justify-between items-center flex-wrap px-2">
      <li>
        <input checked type="radio" name="shopping-field"
          id="shopping-field-1" class="shopping-field__input hidden">
        <label for="shopping-field-1"
          class="transition py-[6px] cursor-pointer flex items-center rounded px-3 border border-gray-300 dark:border-gray-500 text-gray-500 dark:text-gray-300 text-sm shopping-field--active">
          <span class="amount">1</span>
          <span class="unit">کیلوگرم</span>
        </label>
      </li>

      <li>
        <input type="radio" name="shopping-field"
          id="shopping-field-2" class="shopping-field__input hidden">
        <label for="shopping-field-2"
          class="transition py-[6px] cursor-pointer flex items-center rounded px-3 border border-gray-300 dark:border-gray-500 text-gray-500 dark:text-gray-300 text-sm">
          <span class="amount">1/5</span>
          <span class="unit">کیلوگرم</span>
        </label>
      </li>

      <li>
        <input type="radio" name="shopping-field"
          id="shopping-field-3" class="shopping-field__input hidden">
        <label for="shopping-field-3"
          class="transition py-[6px] cursor-pointer flex items-center rounded px-3 border border-gray-300 dark:border-gray-500 text-gray-500 dark:text-gray-300 text-sm">
          <span class="amount">2/5</span>
          <span class="unit">کیلوگرم</span>
        </label>
      </li>

      <li>
        <input type="radio" name="shopping-field"
          id="shopping-field-4" class="shopping-field__input hidden">
        <label for="shopping-field-4"
          class="transition py-[6px] cursor-pointer flex items-center rounded px-3 border border-gray-300 dark:border-gray-500 text-gray-500 dark:text-gray-300 text-sm">
          <span class="amount">5</span>
          <span class="unit">کیلوگرم</span>
        </label>
      </li>

      <li>
        <input type="radio" name="shopping-field"
          id="shopping-field-5" class="shopping-field__input hidden">
        <label for="shopping-field-5"
          class="transition py-[6px] cursor-pointer flex items-center rounded px-3 border border-gray-300 dark:border-gray-500 text-gray-500 dark:text-gray-300 text-sm">
          <span class="amount">10</span>
          <span class="unit">کیلوگرم</span>
        </label>
      </li>

    </ul>
  </div>

  <!-- Product Timer Section -->
  <div
    class="mt-2 sm:mt-4 lg:mt-6 flex flex-col items-center md:items-start gap-1 sm:gap-2 lg:gap-3">
    <span
      class="font-semibold">عجله کنید زمان محدود است!</span>

    <ul
      class="p-3 mx-2 md:p-5 rounded 2xs:rounded-md w-full 3xs:w-72 bg-gray-200 dark:bg-gray-700 flex flex-row-reverse justify-between font-medium">
      <li class="flex flex-col items-center justify-between">
        <span>14</span>
        <span>روز</span>
      </li>

      <li class="flex items-center justify-center">:</li>

      <li class="flex flex-col items-center justify-between">
        <span>22</span>
        <span>ساعت</span>
      </li>

      <li class="flex items-center justify-center">:</li>

      <li class="flex flex-col items-center justify-between">
        <span>38</span>
        <span>دقیقه</span>
      </li>

      <li class="flex items-center justify-center">:</li>

      <li class="flex flex-col items-center justify-between">
        <span>01</span>
        <span>ثانیه</span>
      </li>
    </ul>
  </div>

  <!-- Product Basket Actions -->
  <div
    id="basket-main-actions"
    class="w-full flex items-center md:flex-row gap-1 xs:gap-3 mt-3 sm:mt-5 lg:mt-7 pb-2 sm:pb-4 lg:pb-6">
    <!-- Plus And Minus Actions -->
    <div
      class="flex items-center justify-center h-9 p-1 bg-gray-200 dark:bg-gray-700 rounded">
      <!-- Plus Action -->
      <button type="button">
        <svg class="p-1 size-8 bg-gray-100 dark:bg-gray-800 rounded">
          <use xlink:href="#plus-icon"
            class="text-theme-color-dark dark:bg-theme-color-light"></use>
        </svg>
      </button>

      <!-- Item Count In Basket -->
      <span class="h-full w-20 flex items-center justify-center">0</span>

      <!-- Minus Actions -->
      <button type="button">
        <svg class="p-1 size-8 bg-gray-100 dark:bg-gray-800 rounded">
          <use xlink:href="#minus-icon"
            class="text-theme-color-dark dark:bg-theme-color-light"></use>
        </svg>
      </button>
    </div>

    <!-- Add Btn -->
    <button
      class="w-full p-2 md:p-4 py-2 sm:py-3 2xl:py-2 3xl:py-3 bg-black rounded sm:rounded-md text-white">
      افزودن
      <span class="hidden 2xs:inline">به سبد خرید</span>
    </button>
  </div>

  <!-- Product Actions -->
  <div
    class="w-full py-3 sm:py-4 border-y border-gray-300 dark:border-gray-500 flex items-center gap-1 2xs:gap-2 text-gray-500 dark:text-gray-300">
    <button class="flex items-center gap-[2px] 2xs:gap-1">
      <svg class="size-5">
        <use xlink:href="#heart-icon"
          class="text-gray-500 dark:text-gray-300"></use>
      </svg>

      <span>علاقه مندی ها</span>
    </button>

    <button class="flex items-center gap-[2px] 2xs:gap-1">
      <svg class="size-6 scale-[0.65]">
        <use xlink:href="#change-icon"
          class="text-gray-500 dark:text-gray-300"></use>
      </svg>

      <span>مقایسه</span>
    </button>
  </div>

  <!-- Product Seller Info -->
  <div
    class="w-full mt-2 sm:mt-4 lg:mt-6 pb-2 sm:pb-4 lg:pb-6 border-b border-gray-300 dark:border-gray-500">
    <span
      class="font-semibold">اطلاعات فروشگاه</span>

    <ul
      class="flex flex-col gap-2 xs:gap-3 mt-2 xs:mt-3 mx-2 px-2 xs:px-3 pr-6 xs:pr-7 py-4 xs:py-6 bg-gray-200 dark:bg-gray-700 rounded-md shadow-md list-disc w-full sm:w-4/5">
      <li class="list-disk">
        <div class="w-max flex items-center gap-1 xs:gap-3 translate-x-1">
          <span class="text-gray-500 dark:text-gray-300">نوع:</span>
          <span class="font-medium">کیک شکلاتی</span>
        </div>
      </li>

      <li class="list-disk">
        <div class="w-max flex items-center gap-1 xs:gap-3 translate-x-1">
          <span class="text-gray-500 dark:text-gray-300">کد محصول:</span>
          <span class="font-medium">SDFVW65467</span>
        </div>
      </li>

      <li class="list-disk">
        <div class="w-max flex items-center gap-1 xs:gap-3 translate-x-1">
          <span class="text-gray-500 dark:text-gray-300">تاریخ ثبت:</span>
          <span class="font-medium">2 هفته پیش</span>
        </div>
      </li>

      <li class="list-disk">
        <div class="w-max flex items-center gap-1 xs:gap-3 translate-x-1">
          <span class="text-gray-500 dark:text-gray-300">موجود در انبار:</span>
          <span class="font-medium">2</span>
        </div>
      </li>

      <li class="list-disk">
        <div class="w-max flex items-center gap-1 xs:gap-3 translate-x-1">
          <span class="text-gray-500 dark:text-gray-300">برچسب ها:</span>
          <span class="font-medium">کیک, شکلات</span>
        </div>
      </li>

    </ul>
  </div>

  <div class="mt-2 sm:mt-4 lg:mt-6">
    <span class="font-semibold">پرداخت ایمن با:</span>
    <img src="./assets/image/app-img/1.png" alt="app" class="mt-2 xs:mt-3 mx-2">
  </div>
</div>
`

export default class ProductMainDetails extends HTMLElement {
  constructor(){
    super();
    this.appendChild(template.content.cloneNode(true))
  }

  connectedCallback(){
    this.className = 'grid grid-cols-2 gap-4 sm:gap-6 2xl:gap-4'
  }
}