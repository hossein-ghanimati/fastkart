const template = document.createElement('template');
template.innerHTML = `
<!-- Mobile Menu Header -->
<div
  class="w-full h-[58.03px] flex items-center justify-end shadow dark:shadow-white p-4">
  <!-- Mobile Menu Close Button -->
  <button type="button" class="close-menu-btn" id="close-cat-menu-btn">
    <svg class="size-7">
      <use xlink:href="#close-icon"
        class="text-gray-500 dark:text-gray-300"></use>
    </svg>
  </button>
</div>

<!-- Mobile Menu List -->
<ul
  class="w-full p-3 pb-5 font-medium space-y-7">

  <li class="mobile-menu__item w-full cursor-pointer">
    <p class="flex items-center justify-between">
      <span href="#" class="flex gap-2 text-gray-600 dark:text-gray-200">
        <svg class="size-6">
          <use xlink:href="#vegetable-icon" class="dark:text-gray-100"></use>
        </svg>
        <span class="font-semibold">میوه جنوب
        </span>
      </span>

      <svg class="mobile-menu__item-icon size-5">
        <use xlink:href="#angle" class="dark:text-gray-100"></use>
      </svg>
    </p>
    <ul
      class="mobile-menu__item-dropdown hidden w-full p-1 px-4 space-y-2 text-gray-400 dark:text-gray-300 text-sm">
      <li>
        <span>-</span>
        <a href="#">میوه ها</a>
      </li>
      <li>
        <span>-</span>
        <a href="#">سبزیجات</a>
      </li>
      <li>
        <span>-</span>
        <a href="#">لبنیات</a>
      </li>
      <li>
        <span>-</span>
        <a href="#">تازه ترین ها</a>
      </li>
    </ul>
  </li>

  <li class="mobile-menu__item w-full cursor-pointer">
    <p class="flex items-center justify-between">
      <span href="#" class="flex gap-2 text-gray-600 dark:text-gray-200">
        <svg class="size-6">
          <use xlink:href="#tea-icon" class="dark:text-gray-100"></use>
        </svg>
        <span class="font-semibold">نوشیدنی
        </span>
      </span>

      <svg class="mobile-menu__item-icon size-5">
        <use xlink:href="#angle" class="dark:text-gray-100"></use>
      </svg>
    </p>
    <ul
      class="mobile-menu__item-dropdown hidden w-full p-1 px-4 space-y-2 text-gray-400 dark:text-gray-300 text-sm">
      <li>
        <span>-</span>
        <a href="#">موز</a>
      </li>
      <li>
        <span>-</span>
        <a href="#">شلیل</a>
      </li>
      <li>
        <span>-</span>
        <a href="#">هلو</a>
      </li>
      <li>
        <span>-</span>
        <a href="#">بروکلی</a>
      </li>
      <li>
        <span>-</span>
        <a href="#">فلفل</a>
      </li>
      <li>
        <span>-</span>
        <a href="#">خیار</a>
      </li>
    </ul>
  </li>

  <li class="mobile-menu__item w-full cursor-pointer">
    <p class="flex items-center justify-between">
      <span class="flex gap-2 text-gray-600 dark:text-gray-200">
        <svg class="size-6">
          <use xlink:href="#meat-icon" class="dark:text-gray-100"></use>
        </svg>
        <span class="font-semibold">گوشت و پروتئین
        </span>
      </span>

      <svg class="mobile-menu__item-icon size-5">
        <use xlink:href="#angle" class="dark:text-gray-100"></use>
      </svg>
    </p>
    <ul
      class="mobile-menu__item-dropdown hidden w-full p-1 px-4 space-y-2 text-gray-400 dark:text-gray-300 text-sm">
      <li>
        <span>-</span>
        <a href="#">کاهو</a>
      </li>
      <li>
        <span>-</span>
        <a href="#">بروکلی</a>
      </li>
      <li>
        <span>-</span>
        <a href="#">کدو</a>
      </li>
      <li>
        <span>-</span>
        <a href="#">سایر...</a>
      </li>
    </ul>
  </li>

  <li class="mobile-menu__item w-full cursor-pointer">
    <p class="flex items-center justify-between">
      <span class="flex gap-2 text-gray-600 dark:text-gray-200">
        <svg class="size-6">
          <use xlink:href="#bread-icon" class="dark:text-gray-100">
          </use>
        </svg>

        <span class="font-semibold">صبحانه
        </span>
      </span>

      <svg class="mobile-menu__item-icon size-5">
        <use xlink:href="#angle" class="dark:text-gray-100">
        </use>
      </svg>
    </p>
    <ul
      class="mobile-menu__item-dropdown hidden w-full p-1 px-4 space-y-2 text-gray-400 dark:text-gray-300 text-sm">
      <li>
        <span>-</span>
        <a href="#">هندوانه</a>
      </li>
      <li>
        <span>-</span>
        <a href="#">خربزه</a>
      </li>
      <li>
        <span>-</span>
        <a href="#">سیب</a>
      </li>
      <li>
        <span>-</span>
        <a href="#">انار</a>
      </li>
      <li>
        <span>-</span>
        <a href="#">سایر...</a>
      </li>
    </ul>
  </li>

  <li class="mobile-menu__item w-full cursor-pointer">
    <p class="flex items-center justify-between">
      <span class="flex gap-2 text-gray-600 dark:text-gray-200">
        <svg class="size-6">
          <use xlink:href="#frozen-icon" class="dark:text-gray-100">
          </use>
        </svg>

        <span class="font-semibold">غذای منمجد
        </span>
      </span>

      <svg class="mobile-menu__item-icon size-5">
        <use xlink:href="#angle" class="dark:text-gray-100"></use>
      </svg>
    </p>
    <ul
      class="mobile-menu__item-dropdown hidden w-full p-1 px-4 space-y-2 text-gray-400 dark:text-gray-300 text-sm">
      <li>
        <span>-</span>
        <a href="#">شیر</a>
      </li>
      <li>
        <span>-</span>
        <a href="#">ماست</a>
      </li>
      <li>
        <span>-</span>
        <a href="#">کره</a>
      </li>
      <li>
        <span>-</span>
        <a href="#">سرشیر</a>
      </li>
      <li>
        <span>-</span>
        <a href="#">سایر...</a>
      </li>
    </ul>
  </li>
  <li class="mobile-menu__item w-full cursor-pointer">
    <p class="flex items-center justify-between">
      <span class="flex gap-2 text-gray-600 dark:text-gray-200">
        <svg class="size-6">
          <use xlink:href="#grocery-icon" class="dark:text-gray-100">
          </use>
        </svg>

        <span class="font-semibold">مکمل های غذایی
        </span>
      </span>

      <svg class="mobile-menu__item-icon size-5">
        <use xlink:href="#angle" class="dark:text-gray-100">
        </use>
      </svg>
    </p>
    <ul
      class="mobile-menu__item-dropdown hidden w-full p-1 px-4 space-y-2 text-gray-400 dark:text-gray-300 text-sm">
      <li>
        <span>-</span>
        <a href="#">شیر</a>
      </li>
      <li>
        <span>-</span>
        <a href="#">ماست</a>
      </li>
      <li>
        <span>-</span>
        <a href="#">کره</a>
      </li>
      <li>
        <span>-</span>
        <a href="#">سرشیر</a>
      </li>
      <li>
        <span>-</span>
        <a href="#">سایر...</a>
      </li>
    </ul>
  </li>

  <li class="mobile-menu__item w-full cursor-pointer">
    <p class="flex items-center justify-between">
      <span class="flex gap-2 text-gray-600 dark:text-gray-200">
        <svg class="size-6">
          <use xlink:href="#biscuit-icon" class="dark:text-gray-100">
          </use>
        </svg>

        <span class="font-semibold">بیسکوییت
        </span>
      </span>

      <svg class="mobile-menu__item-icon size-5">
        <use xlink:href="#angle" class="dark:text-gray-100">
        </use>
      </svg>
    </p>
    <ul
      class="mobile-menu__item-dropdown hidden w-full p-1 px-4 space-y-2 text-gray-400 dark:text-gray-300 text-sm">
      <li>
        <span>-</span>
        <a href="#">حسین غنیمتی</a>
      </li>
      <li>
        <span>-</span>
        <a href="#">حسین محمدی</a>
      </li>
      <li>
        <span>-</span>
        <a href="#">امین محمدی</a>
      </li>
      <li>
        <span>-</span>
        <a href="#">امین غنیمتی</a>
      </li>
      <li>
        <span>-</span>
        <a href="#">سایر...</a>
      </li>
    </ul>
  </li>
</ul>
`

class mobileCatMenu extends HTMLElement {
  constructor(){
    super();
    this.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(){
    this.className = "mobile-cat-menu transition-all translate-x-full fixed inset-0 max-w-64 h-full bg-gray-50 dark:bg-gray-900 z-50 space-y-4"
  }
}

export{
  mobileCatMenu
}