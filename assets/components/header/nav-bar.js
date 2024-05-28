const navbarTemplate = document.createElement('template')
navbarTemplate.innerHTML = `
<div
    class="container mx-auto flex items-center justify-between">
    <!-- Right Side -->
    <div
        class="w-[62%] md:w-[50%] xl:w-[70%] flex items-center justify-between md:justify-start xl:justify-between md:gap-3">
        <!-- Mobile Menu Icon -->
        <button id="open-menu-btn"
            class="xl:hidden relative z-20">
            <svg class="size-7">
                <use xlink:href="#menu-icon"></use>
            </svg>
        </button>

        <!-- Logo -->
        <a href="./index.html"
            class="text-3xl font-aviny inline-flex">
            <span
                class="text-theme-color-dark dark:text-theme-color-light">فست</span>
            کارت
        </a>

        <!-- Location And Searh Bar -->
        <div class="gap-3 hidden md:flex">
            <!-- Location Button -->
            <button type="button"
                class="open-modal-btn cursor-pointer block p-[6px] border border-gray-300 rounded-lg dark:border-gray-200"
                data-target="cities-modal">

                <svg
                    class="p-2 size-9 bg-gray-300 rounded-md dark:bg-gray-900">
                    <use xlink:href="#location-icon"
                        class="text-gray-800 dark:text-gray-100"></use>
                </svg>
            </button>

            <!-- Search Bar -->
            <div
                class="hidden w-[527px] h-[50px] xl:flex">
                <!-- Search Input -->
                <input type="text"
                    class="w-[90%] h-full border border-l-0 bg-transparent p-1 px-3 border-gray-300  placeholder-gray-400 dark:placeholder-gray-200 rounded-search-input "
                    placeholder="جستجو برای ...">

                <!-- Search Button -->
                <button
                    class="w-[10%] h-full flex items-center justify-center border border-orange-400 bg-orange-400 rounded-search-button">
                    <svg class="size-5">
                        <use xlink:href="#search-icon"
                            class="text-gray-100"></use>
                    </svg>
                </button>
            </div>
        </div>
    </div>

    <!-- Left Side -->
    <div
        class="w-[38%] md:w-[50%] xl:w-[25%] flex items-center justify-end">

        <!-- Search Button -->
        <button
            class="hidden md:block xl:hidden px-3 border-l border-gray-500 dark:border-x-gray-300">
            <svg
                class="size-7">
                <use xlink:href="#search-icon"
                    class="text-gray-700 dark:text-gray-300"></use>
            </svg>
        </button>

        <!-- Contact Us Button -->
        <button
            class="hidden md:block px-3 border-l border-gray-500 dark:border-x-gray-300">
            <svg
                class="size-7">
                <use xlink:href="#phone-icon"
                    class="text-gray-700 dark:text-gray-300"></use>
            </svg>
        </button>

        <!-- Favorites -->
        <div
            class="hidden md:block">
            <!-- Favorites Button -->
            <button
                class="h-full px-3 flex items-center border-l border-gray-500 dark:border-x-gray-300">
                <svg class="size-7">
                    <use xlink:href="#heart-icon"
                        class="text-gray-700 dark:text-gray-300"></use>
                </svg>
            </button>
        </div>

        <!-- Cart -->
        <div
            class="parent hidden md:block relative z-20">
            <!-- Cart Button -->
            <button
                class="h-full  px-3 flex items-center border-l border-gray-500 dark:border-x-gray-300 relative">
                <svg class="size-7">
                    <use xlink:href="#shopping-cart-icon"
                        class="text-gray-700 dark:text-gray-300"></use>
                </svg>

                <span
                    class="absolute top-0 left-3 size-[15px] inline-flex items-center justify-center rounded text-[8px] bg-red-700 dark:bg-red-500 text-white ">
                    2
                </span>
            </button>

            <!-- Cart List -->
            <div
                class="child hidden group-hover:opacity-100 w-80 bg-white dark:bg-gray-900 shadow-l min-h-11 absolute z-20 left-0 p-3 rounded-xl font-medium">
                                <!-- Cart Last Items -->
                <ul class="w-full space-y-3 pb-3">
                    <li
                        class="transition h-[72px] w-full flex items-center justify-start gap-2 relative hover:bg-[#f8f8f8] hover:dark:bg-slate-950">
                        <a href="#"
                            class="h-full bg-[#f8f8f8] dark:bg-slate-950 rounded-md aspect-square">
                            <img
                                src="./assets/image/cart-item-1.png"
                                alt="cart-item"
                                class="h-full aspect-square p-3">
                        </a>

                        <div class="flex flex-col">
                            <a href="#"
                                class="text-theme-color-dark dark:text-theme-color-light line-clamp-1">شکلات
                                قهوه ای فرانسوی با ظرف شیشه
                                ای</a>
                            <p
                                class="dark:text-gray-200 text-[12px]">
                                <span>1</span>
                                <svg
                                    class="inline-block size-3">
                                    <use
                                        xlink:href="#close-icon"
                                        class="text-black dark:text-gray-100"></use>
                                </svg>
                                <span>80.000</span> تومان
                            </p>
                        </div>

                        <svg
                            class="absolute top-0 left-0 inline-block size-[1.1rem] cursor-pointer">
                            <use xlink:href="#close-icon"
                                class="text-black dark:text-gray-100"></use>
                        </svg>
                    </li>

                    <li
                        class="transition h-[72px] w-full flex items-center justify-start gap-2 relative hover:bg-[#f8f8f8] hover:dark:bg-slate-950">
                        <a href="#"
                            class="h-full bg-[#f8f8f8] dark:bg-slate-950 rounded-md aspect-square">
                            <img
                                src="./assets/image/cart-item-2.png"
                                alt="cart-item"
                                class="h-full aspect-square p-3">
                        </a>

                        <div class="flex flex-col">
                            <a href="#"
                                class="text-theme-color-dark dark:text-theme-color-light line-clamp-1">بیسکویت
                                کره بادام زمینی 600 گرمی</a>
                            <p
                                class="dark:text-gray-200 text-[12px]">
                                <span>2</span>
                                <svg
                                    class="inline-block size-3">
                                    <use
                                        xlink:href="#close-icon"
                                        class="text-black dark:text-gray-100"></use>
                                </svg>
                                <span>150.000</span> تومان
                            </p>
                        </div>

                        <svg
                            class="absolute top-0 left-0 inline-block size-[1.1rem] cursor-pointer">
                            <use xlink:href="#close-icon"
                                class="text-black dark:text-gray-100"></use>
                        </svg>
                    </li>

                    <li
                        class="transition h-[72px] w-full flex items-center justify-start gap-2 relative hover:bg-[#f8f8f8] hover:dark:bg-slate-950">
                        <a href="#"
                            class="h-full bg-[#f8f8f8] dark:bg-slate-950 rounded-md aspect-square">
                            <img
                                src="./assets/image/cart-item-1.png"
                                alt="cart-item"
                                class="h-full aspect-square p-3">
                        </a>

                        <div class="flex flex-col">
                            <a href="#"
                                class="text-theme-color-dark dark:text-theme-color-light line-clamp-1">شکلات
                                قهوه ای فرانسوی با ظرف شیشه
                                ای</a>
                            <p
                                class="dark:text-gray-200 text-[12px]">
                                <span>1</span>
                                <svg
                                    class="inline-block size-3">
                                    <use
                                        xlink:href="#close-icon"
                                        class="text-black dark:text-gray-100"></use>
                                </svg>
                                <span>80.000</span> تومان
                            </p>
                        </div>

                        <svg
                            class="absolute top-0 left-0 inline-block size-[1.1rem] cursor-pointer">
                            <use xlink:href="#close-icon"
                                class="text-black dark:text-gray-100"></use>
                        </svg>
                    </li>
                </ul>

                <!-- Cart Infos -->
                <div
                    class="pt-3 border-t border-t-gray-200 dark:border-t-gray-500 space-y-3">
                    <!-- Cart Price -->
                    <div
                        class="w-full flex items-center justify-between">
                        <span
                            class="dark:text-gray-200">جمع
                            کل:</span>

                        <div
                            class="text-theme-color-dark dark:text-theme-color-light space-x-1 font-semibold">
                            <span>310.000</span>
                            <span>تومان</span>
                        </div>
                    </div>

                                    <!-- Cart Actions -->
                    <div
                        class="flex items-center justify-between">
                        <a href="#"
                            class="p-1 px-2 border-2 border-theme-color-dark dark:border-theme-color-light text-theme-color-dark dark:text-theme-color-light hover:bg-theme-color-dark hover:text-white dark:hover:text-white rounded">سبد
                            خرید</a>
                        <a href="#"
                            class="bg-theme-color-dark dark:bg-theme-color-light text-stone-50 p-1 px-2 rounded">پرداخت
                            نهایی</a>
                    </div>
                </div>
            </div>
        </div>

        <!-- Profile -->
        <div
            class="parent px-3 relative z-20">
            <!-- Profile Button -->
            <button class="h-full flex items-center">
                <svg class="size-9">
                    <use xlink:href="#user-icon"
                        class="text-gray-500 dark:text-gray-300"></use>
                </svg>
            </button>

            <!-- Profile Actions -->
            <div
                class="hidden child absolute z-20 left-0 p-5 bg-white dark:bg-gray-900 rounded-lg border-b-2 border-b-theme-color-dark dark:border-b-theme-color-dark">
                <ul
                    class="w-32 flex flex-col gap-1 text-gray-700 dark:text-gray-100 divide-y">
                    <li class="py-1 group">
                        <a href="#" class="transition-all flex items-center justify-between group-hover:pr-1">
                            <span>ورود</span>
                            <svg class="size-5">
                                <use xlink:href="#login-icon" class="text-gray-700 dark:text-gray-300 block"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="py-1 group">
                        <a href="#" class="transition-all flex items-center justify-between group-hover:pr-1">
                            <span>عضویت</span>
                            <svg class="size-5">
                                <use xlink:href="#register-icon" class="text-gray-700 dark:text-gray-300 block"></use>
                            </svg>
                        </a>
                    </li>
                    <li class="py-1 group">
                        <a href="#">
                            <span class="transition-all group-hover:scale-75">فراموشی رمز عبور</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    </div>
</div>
`

class NavBar extends HTMLElement {
    constructor(){
        super();
        this.appendChild(navbarTemplate.content.cloneNode(true));
    }

    connectedCallback(){
        this.className = "w-full h-14 md:h-20 flex items-center  relative bg-gray-200 dark:bg-gray-700"
    }
}

export {NavBar}