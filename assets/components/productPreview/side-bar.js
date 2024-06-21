const template = document.createElement('template')
template.innerHTML = `
<!-- Seller -->
<div class="sidebar-item rounded-md overflow-hidden">
  <!-- Seller Box -->
  <div
    class="bg-gray-100 dark:bg-gray-800 px-[22px] py-[7px] rounded flex items-center justify-start gap-2">
    <div class="size-max">
      <img src="./assets/image/seller/vendor.png" alt="seller"
        class="w-16">
    </div>

    <div class="space-y-2">
      <span class="font-medium">فارس کد</span>

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
          (<span id="stars-count">23</span>
          دیدگاه)
        </span>
      </div>
    </div>
  </div>

  <!-- Seller Description -->
  <p
    class="mt-[22px] mb-[14px] pb-[14px] text-gray-500 dark:text-gray-300 text-sm border-b border-gray-300 dark:border-x-gray-500 max-h-[95px] overflow-hidden">
    لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با
    استفاده از طراحان گرافیک است. چاپگرها و متون بلکه روزنامه و مجله
    در ستون و سطرآنچنان که لازم است.
  </p>

  <!-- Seller Contact Infos -->
  <ul class="space-y-2">
    <li class="flex items-center gap-2">
      <svg class="size-6">
        <use xlink:href="#location-icon"
          class="text-theme-color-dark dark:text-theme-color-light"></use>
      </svg>
      <span class="font-medium">آدرس: </span>
      <span
        class="text-gray-500 dark:text-gray-300 cursor-copy">تهران
        برج میلاد</span>
    </li>
    <li class="flex items-center gap-2">
      <svg class="size-6">
        <use xlink:href="#phone-icon"
          class="text-theme-color-dark dark:text-theme-color-light"></use>
      </svg>
      <span class="font-medium">شماره تماس: </span>
      <span
        class="text-gray-500 dark:text-gray-300 cursor-copy">09915823411</span>
    </li>
  </ul>
</div>

<!-- News -->
<div class="sidebar-item my-6 rounded-md">
  <div class="mb-10">
    <h5 class="text-lg font-bold">محصولات جدید</h5>
    <i
      class="block h-[2px] w-3/12 bg-theme-color-dark dark:bg-theme-color-light mt-1"></i>
  </div>

  <ul>
    <label-product
      id="23hfgf234gkf-13"
      src="beans/13.jpg"
      title="مغز گردوی گودلایف"
      price="10000"
      stars="4"></label-product>

    <label-product
      id="23hfgf234gkf-14"
      src="fruits/14.jpg"
      title="گیلاس قرمز ممتاز وارداتی"
      price="40000"
      stars="5"></label-product>

    <label-product
      id="23hfgf234gkf-15"
      src="beans/15.jpg"
      title="کاری بز ممتاز"
      price="45000"
      stars="3"></label-product>

    <label-product
      id="23hfgf234gkf-16"
      src="fruits/16.jpg"
      title="خرمای وارداتی"
      price="70000"
      stars="4"></label-product>

  </ul>
</div>

<!-- Propaganda -->
<div
  class="sidebar-propaganda rounded-lg w-full h-[543px] shadow-md bg-center bg-cover">
  <!-- Container -->
  <div class="w-1/2">
    <span class="text-sm text-yellow-500">غذای دریایی</span>
    <div class="mt-3 text-[33px] font-aviny font-medium">
      <span class="text-theme-color-dark">ماهی</span>
      تازه
    </div>

    <div class="mt-7 text-[33px] font-aviny font-medium whitespace-nowrap">
      بهترین پیشنهاد
    </div>

    <button type="button"
      class="mt-4 py-2 sm:py-3 px-4 sm:px-8 text-sm sm:text-base rounded-lg text-white bg-red-500 whitespace-nowrap">
      خرید آنلاین
    </button>
  </div>
</div>
`

export default class SideBar extends HTMLElement {
  constructor(){
    super()
    this.appendChild(template.content.cloneNode(true))
  }

  connectedCallback(){
    this.className = "sidebar block hidden h-max col-span-4 lg:block xl:col-span-3 sticky top-3"
  }
}
