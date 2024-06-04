const template = document.createElement('template');
template.innerHTML = `
<div class="footer-main__content border-y border-dashed border-gray-500 dark:border-gray-300 grid grid-cols-4 xl:grid-cols-5 gap-x-2 gap-y-7 sm:gap-y-4">
  <div class="footer-main__content-part col-span-4 sm:col-span-2 lg:col-span-1">
    <a href="./index.html" class="font-aviny inline-flex text-3xl">
      <span class="text-theme-color-dark dark:text-theme-color-light">فست</span>
      کارت
    </a>
    <p class="pr-2 xs:pr-4 sm:pr-0 text-gray-500 dark:text-gray-300 text-sm sm:text-base line-clamp-4">لورم ایپسوم متن ساختگی با تولید سادگی نامفهوم از صنعت چاپ و با استفاده از طراحان گرافیک است.</p>

    <ul class="pr-2 xs:pr-4 sm:pr-0 space-y-[6px] text-sm text-gray-500 dark:text-gray-300">
      <li class="flex items-center gap-2">
        <svg class="size-5">
          <use xlink:href="#home-icon" class="text-gray-500 dark:text-gray-300"></use>
        </svg>
        <spa>تهران - برج میلاد</spa>
      </li>

      <li class="flex items-center gap-2">
        <svg class="size-5">
          <use xlink:href="#envelop-icon" class="text-gray-500 dark:text-gray-300"></use>
        </svg>
        <spa>fastkart@gmail.com</spa>
      </li>

    </ul>
  </div>

  <div class="footer-main__content-part col-span-4 sm:col-span-2 lg:col-span-1">
    <h5 class="font-bold">دسته بندی</h5>
    <ul class="pr-2 xs:pr-4 sm:pr-0 sm:space-y-2 text-gray-500 dark:text-gray-300">
      <li>
        <a href="#">میوه جنوب</a>
      </li>

      <li>
        <a href="#">نوشیدنی</a>
      </li>

      <li>
        <a href="#">گوشت و پروتئین</a>
      </li>

      <li>
        <a href="#">صبحانه</a>
      </li>

      <li>
        <a href="#">غذای منجمد</a>
      </li>

      <li>
        <a href="#">مکمل های غذایی</a>
      </li>

    </ul>
  </div>

  <div class="footer-main__content-part col-span-4 sm:col-span-1 lg:col-span-1">
    <h5 class="font-bold">دسترسی سریع</h5>
    <ul class="pr-2 xs:pr-4 sm:pr-0 sm:space-y-2 text-gray-500 dark:text-gray-200">
      <li>
        <a href="./index.html">خانه</a>
      </li>

      <li>
        <a href="./products.html">فروشگاه</a>
      </li>

      <li>
        <a href="./aboutUs.html">درباره ما</a>
      </li>

      <li>
        <a href="./posts.html">وبلاگ</a>
      </li>

      <li>
        <a href="./contactUs.html">تماس با ما</a>
      </li>
    </ul>
  </div>

  <div class="footer-main__content-part col-span-4 sm:col-span-1 lg:col-span-1">
    <h5 class="font-bold">لینک های مهم</h5>
    <ul class="pr-2 xs:pr-4 sm:pr-0 sm:space-y-2 text-gray-500 dark:text-gray-200">
      <li>
        <a href="./userPanel/basket.html">خرید راحت</a>
      </li>

      <li>
        <a href="./userPanel/mail.html">حساب کاربری</a>
      </li>

      <li>
        <a href="./userPanel/orders.html">پیگری سفارشات</a>
      </li>

      <li>
        <a href="./userPanel/favorites">علاقه مندی ها</a>
      </li>

      <li>
        <a href="./search.html">جستجو</a>
      </li>
      <li>
        <a href="./questions.html">سوالات متداول</a>
      </li>
    </ul>
  </div>

  <div class="footer-main__content-part col-span-4 sm:col-span-2 lg:col-span-1">
    <h5 class="font-bold">تماس با ما</h5>
    <ul>
      <li class="flex gap-2 pb-2 md:pb-4">
        <svg class="size-6">
          <use xlink:href="#phone-icon" class="text-gray-500 dark:text-gray-200"></use>
        </svg>
        <div>
          <span class="text-gray-500 dark:text-gray-200 text-sm">پشتیبانی 24 ساعته :</span>
          <p class="font-bold">09915823411</p>
        </div>
      </li>
      <li class="flex border-y border-dashed border-gray-400 dark:border-gray-300 gap-2 py-2 md:py-4">
        <svg class="size-5">
          <use xlink:href="#envelop-icon" class="text-gray-500 dark:text-gray-300"></use>
        </svg>
        <div>
          <span class="text-gray-500 dark:text-gray-200 text-sm">آدرس ایمیل :</span>
          <p class="font-bold">fastkart@gmail.com</p>
        </div>
      </li>
      <li class="flex gap-2 pt-2 md:pt-4">
        <div>
          <span class="text-gray-500 dark:text-gray-200 text-sm">دانلود اپلیکیشن :</span>
          <div class="flex items-center justify-center gap-1 mt-1">
            <img src="./assets/image/app-img/appstore.svg" alt="appstore">
            <img src="./assets/image/app-img/playstore.svg" alt="playstore">
          </div>
        </div>
      </li>
    </ul>
  </div>
</div>
`

class FooterMain extends HTMLElement {
  constructor(){
    super()
    this.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(){
    this.className = "block"
  }
}

export{
  FooterMain
}