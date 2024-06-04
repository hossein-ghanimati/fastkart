const mobileMenuTemplate = document.createElement('template')
mobileMenuTemplate.innerHTML = `
<!-- Mobile Menu Header -->
<div
    class="w-full h-[58.03px] flex items-center justify-between shadow dark:shadow-white p-4">
    <!-- Mobile Menu Header Text -->
    <a href="index.html"
        class="text-2xl font-aviny inline-flex">
        <span
            class="text-theme-color-dark dark:text-theme-color-light">فست</span>
        کارت
    </a>

    <!-- Mobile Menu Close Button -->
    <button type="button" id="close-menu-btn">
        <svg class="size-7">
            <use xlink:href="#close-icon"
                class="text-gray-500 dark:text-gray-300"></use>
        </svg>
    </button>
</div>

<!-- Mobile Menu List -->
<ul
    class="w-full p-3 pb-5 border-b-2 border-b-gray-400 dark:border-b-gray-200 font-medium space-y-5 ">
    <!-- Dont Has Sub -->
    <li class="w-full flex tems-center justify-between">
        <a href="./index.html">خانه</a>
    </li>

    <li class="mobile-menu__item w-full cursor-pointer">
        <p class="flex items-center justify-between">
            <span
                class="mobile-menu__item-text">فروشگاه</span>
            <svg class="mobile-menu__item-icon size-5">
                <use xlink:href="#angle"></use>
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
            <span
                class="mobile-menu__item-text">محصولات
                برتر</span>
            <svg class="mobile-menu__item-icon size-5">
                <use xlink:href="#angle"></use>
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
            <span
                class="mobile-menu__item-text">سبزیجات</span>
            <svg class="mobile-menu__item-icon size-5">
                <use xlink:href="#angle"></use>
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
            <span
                class="mobile-menu__item-text">میوه
                ها</span>
            <svg class="mobile-menu__item-icon size-5">
                <use xlink:href="#angle"></use>
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
            <span
                class="mobile-menu__item-text">لبنیات</span>
            <svg class="mobile-menu__item-icon size-5">
                <use xlink:href="#angle"></use>
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
            <span
                class="mobile-menu__item-text">فروشندگان</span>
            <svg class="mobile-menu__item-icon size-5">
                <use xlink:href="#angle"></use>
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

<!-- Switch Theme Button -->
<button
    class="toggle-theme-btn float-left p-1 border border-gray-500 dark:border-gray-300 text-gray-500 dark:text-gray-300  rounded-full ml-2 mt-5 ">
    <!-- Moon Icon -->
    <svg class="dark:hidden size-8">
        <use xlink:href="#moon-icon"></use>
    </svg>

    <!-- Sun Icon -->
    <svg class="hidden dark:block size-8">
        <use xlink:href="#sun-icon"></use>
    </svg>
</button>
`

class MobileMenu extends HTMLElement {
    constructor(){
        super();
        this.appendChild(mobileMenuTemplate.content.cloneNode(true))
    }

    connectedCallback(){
        this.className = "mobile-menu transition-all fixed inset-0 translate-x-full max-w-64 h-full bg-gray-50 dark:bg-gray-900 z-30 space-y-4"
    }
}

export {MobileMenu}