const mainBarTemplate = document.createElement('template')
mainBarTemplate.innerHTML = `


<!-- category -->
<div class="parent relative">
    <!-- Category Button -->
    <button type="button"
        class="flex items-center gap-1 justify-center py-[10px]  px-5 font-vazir-bold bg-gradient-to-r from-[#0e947a] to-theme-color-dark rounded text-gray-100">
        <svg class="size-7">
            <use xlink:href="#category-icon"
                class="text-gray-100"></use>
        </svg>

        <span>دسته بندی ها</span>
    </button>

    <!-- Category List -->
    <ul
        class="hidden child absolute z-10 bg-white dark:bg-gray-900 rounded-lg right-0 shadow-md w-[300px] border-b-4 border-b-theme-color-dark dark:border-b-theme-color-dark">

        <li
            class="transition-all w-full flex items-center justify-between py-3 px-6 hover:pr-9 cursor-pointer hover:bg-gray-100 hover:dark:bg-gray-800">
            <a href="#"
                class="flex gap-2 text-gray-600 dark:text-gray-200">
                <svg class="size-6">
                    <use xlink:href="#vegetable-icon"
                        class="dark:text-gray-100"></use>
                </svg>
                <span
                    class="font-vazir-bold">میوه جنوب
                </span>
            </a>

            <svg
                class="size-5">
                <use xlink:href="#angle"
                    class="dark:text-gray-100"></use>
            </svg>
        </li>
    
        <li
            class="transition-all w-full flex items-center justify-between py-3 px-6 hover:pr-9 cursor-pointer hover:bg-gray-100 hover:dark:bg-gray-800">
            <a href="#"
                class="flex gap-2 text-gray-600 dark:text-gray-200">
                <svg class="size-6">
                    <use xlink:href="#tea-icon"
                        class="dark:text-gray-100"></use>
                </svg>
                <span
                    class="font-vazir-bold">نوشیدنی
                </span>
            </a>

            <svg
                class="size-5">
                <use xlink:href="#angle"
                    class="dark:text-gray-100"></use>
            </svg>
        </li>
    
        <li
            class="transition-all w-full flex items-center justify-between py-3 px-6 hover:pr-9 cursor-pointer hover:bg-gray-100 hover:dark:bg-gray-800">
            <a href="#"
                class="flex gap-2 text-gray-600 dark:text-gray-200">
                <svg class="size-6">
                    <use xlink:href="#meat-icon"
                        class="dark:text-gray-100"></use>
                </svg>
                <span
                    class="font-vazir-bold">گوشت و پروتئین
                </span>
            </a>

            <svg
                class="size-5">
                <use xlink:href="#angle"
                    class="dark:text-gray-100"></use>
            </svg>
        </li>
        
        <li
            class="transition-all w-full flex items-center justify-between py-3 px-6 hover:pr-9 cursor-pointer hover:bg-gray-100 hover:dark:bg-gray-800">
            <a href="#"
                class="flex gap-2 text-gray-600 dark:text-gray-200">
                <svg class="size-6">
                    <use xlink:href="#bread-icon"
                        class="dark:text-gray-100">
                    </use>
                </svg>
                
                <span
                    class="font-vazir-bold">صبحانه
                </span>
            </a>

            <svg
                class="size-5">
                <use xlink:href="#angle"
                    class="dark:text-gray-100">
                </use>
            </svg>
        </li>
    
        <li
            class="transition-all w-full flex items-center justify-between py-3 px-6 hover:pr-9 cursor-pointer hover:bg-gray-100 hover:dark:bg-gray-800">
            <a href="#"
                class="flex gap-2 text-gray-600 dark:text-gray-200">
                <svg class="size-6">
                    <use xlink:href="#frozen-icon"
                        class="dark:text-gray-100">
                    </use>
                </svg>

                <span
                    class="font-vazir-bold">غذای منمجد
                </span>
            </a>

            <svg
                class="size-5">
                <use xlink:href="#angle"
                    class="dark:text-gray-100"></use>
            </svg>
        </li>
    
        <li
            class="transition-all w-full flex items-center justify-between py-3 px-6 hover:pr-9 cursor-pointer hover:bg-gray-100 hover:dark:bg-gray-800">
            <a href="#"
                class="flex gap-2 text-gray-600 dark:text-gray-200">
                <svg class="size-6">
                    <use xlink:href="#biscuit-icon"
                        class="dark:text-gray-100">
                    </use>
                </svg>

                <span
                    class="font-vazir-bold">بیسکوییت
                </span>
            </a>

            <svg
                class="size-5">
                <use xlink:href="#angle"
                    class="dark:text-gray-100">
                </use>
            </svg>
        </li>
    
        <li
            class="transition-all w-full flex items-center justify-between py-3 px-6 hover:pr-9 cursor-pointer hover:bg-gray-100 hover:dark:bg-gray-800">
            <a href="#"
                class="flex gap-2 text-gray-600 dark:text-gray-200">
                <svg class="size-6">
                    <use xlink:href="#grocery-icon"
                        class="dark:text-gray-100">
                    </use>
                </svg>

                <span
                    class="font-vazir-bold">مکمل های غذایی
                </span>
            </a>

            <svg
                class="size-5">
                <use xlink:href="#angle"
                    class="dark:text-gray-100">
                </use>
            </svg>
        </li>
    </ul>
</div>

<!-- Desktop Menu -->
<ul
        class="hidden xl:flex w-[800px] h-[52px] items-center justify-between gap-3 relative z-20">

        <li>
            <a href="./index.html"
                class="font-vazir-medium hover:text-theme-color-dark dark:hover:text-theme-color-light transition">خانه</a>
        </li>

        <!-- Has Sub Menu -->
        <li class="parent group relative text-gray-800 dark:text-gray-50">

            <div
                class="flex items-center group-hover:text-theme-color-dark dark:group-hover:text-theme-color-light transition">

                <a href="./products"
                    class="font-vazir-medium">فروشگاه</a>

                <svg
                    class="size-5 -rotate-90">
                    <use xlink:href="#angle"><use>
                </svg>
            </div>

            <ul
                class="hidden child absolute right-0 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 rounded-lg shadow-md w-48 p-2 space-y-1 border-b-2 border-b-theme-color-dark dark:border-b-theme-color-light">
                        
                <li
                    class="hover:text-gray-900 dark:hover:text-gray-50 hover:-translate-x-1 transition py-1 border-b last:border-0 border-b-gray-100 dark:border-b-gray-800">
                    <a href="#">سبزیجات</a>
                </li>
                <li
                    class="hover:text-gray-900 dark:hover:text-gray-50 hover:-translate-x-1 transition py-1 border-b last:border-0 border-b-gray-100 dark:border-b-gray-800">
                    <a href="#">میوه ها</a>
                </li>
                <li
                    class="hover:text-gray-900 dark:hover:text-gray-50 hover:-translate-x-1 transition py-1 border-b last:border-0 border-b-gray-100 dark:border-b-gray-800">
                    <a href="#">لبنیات</a>
                </li>
                <li
                    class="hover:text-gray-900 dark:hover:text-gray-50 hover:-translate-x-1 transition py-1 border-b last:border-0 border-b-gray-100 dark:border-b-gray-800">
                    <a href="#">تازه ترین ها</a>
                </li>
            </ul>
        </li>

        <li
            class="parent group relative text-gray-800 dark:text-gray-50">
            <div
                class="flex items-center group-hover:text-theme-color-dark dark:group-hover:text-theme-color-light transition">
                <a href="./products"
                    class="font-vazir-medium">محصولات
                    برتر</a>
                <svg
                    class="size-5 -rotate-90">
                    <use xlink:href="#angle"><use>
                </svg>
            </div>

            <ul
                class="hidden child absolute right-0 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 rounded-lg shadow-md w-48 p-2 space-y-1 border-b-2 border-b-theme-color-dark dark:border-b-theme-color-light">
                <li
                    class="hover:text-gray-900 dark:hover:text-gray-50 hover:-translate-x-1 transition py-1 border-b last:border-0 border-b-gray-100 dark:border-b-gray-800">
                    <a href="#">هنوانه</a>
                </li>
                
                <li
                    class="hover:text-gray-900 dark:hover:text-gray-50 hover:-translate-x-1 transition py-1 border-b last:border-0 border-b-gray-100 dark:border-b-gray-800">
                    <a href="#">خربزه</a>
                </li>
                                
                <li
                    class="hover:text-gray-900 dark:hover:text-gray-50 hover:-translate-x-1 transition py-1 border-b last:border-0 border-b-gray-100 dark:border-b-gray-800">
                    <a href="#">موز</a>
                </li>

                <li
                    class="hover:text-gray-900 dark:hover:text-gray-50 hover:-translate-x-1 transition py-1 border-b last:border-0 border-b-gray-100 dark:border-b-gray-800">
                    <a href="#">خیار</a>
                </li>

                <li
                    class="hover:text-gray-900 dark:hover:text-gray-50 hover:-translate-x-1 transition py-1 border-b last:border-0 border-b-gray-100 dark:border-b-gray-800">
                    <a href="#">کاهو</a>
                </li>
            </ul>
        </li>

        <li
            class="parent group relative text-gray-800 dark:text-gray-50">
            <div
                class="flex items-center group-hover:text-theme-color-dark dark:group-hover:text-theme-color-light transition">
                <a href="./products"
                    class="font-vazir-medium">میوه
                    ها
                </a>

                <svg
                    class="size-5 -rotate-90">
                    <use xlink:href="#angle"><use>
                </svg>

            </div>

            <ul
                class="hidden child absolute right-0 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 rounded-lg shadow-md w-48 p-2 space-y-1 border-b-2 border-b-theme-color-dark dark:border-b-theme-color-light">
                <li
                    class="hover:text-gray-900 dark:hover:text-gray-50 hover:-translate-x-1 transition py-1 border-b last:border-0 border-b-gray-100 dark:border-b-gray-800">
                    <a href="#">انگور</a>
                </li>
                
                <li
                    class="hover:text-gray-900 dark:hover:text-gray-50 hover:-translate-x-1 transition py-1 border-b last:border-0 border-b-gray-100 dark:border-b-gray-800">
                    <a href="#">سیب</a>
                </li>

                <li
                    class="hover:text-gray-900 dark:hover:text-gray-50 hover:-translate-x-1 transition py-1 border-b last:border-0 border-b-gray-100 dark:border-b-gray-800">
                    <a href="#">شلیل</a>
                </li>

                <li
                    class="hover:text-gray-900 dark:hover:text-gray-50 hover:-translate-x-1 transition py-1 border-b last:border-0 border-b-gray-100 dark:border-b-gray-800">
                    <a href="#">زد آلو</a>
                </li>
            </ul>
        </li>

        <li
            class="parent group relative text-gray-800 dark:text-gray-50">
            <div
                class="flex items-center group-hover:text-theme-color-dark dark:group-hover:text-theme-color-light transition">
                <a href="./products"
                    class="font-vazir-medium">سبزیجات</a>
                    
                <svg
                    class="size-5 -rotate-90">
                    <use
                        xlink:href="#angle"><use>
                </svg>
            </div>

            <ul
                class="hidden child absolute right-0 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 rounded-lg shadow-md w-48 p-2 space-y-1 border-b-2 border-b-theme-color-dark dark:border-b-theme-color-light">
                <li
                    class="hover:text-gray-900 dark:hover:text-gray-50 hover:-translate-x-1 transition py-1 border-b last:border-0 border-b-gray-100 dark:border-b-gray-800">
                    <a href="#">کدو</a>
                </li>

                <li
                    class="hover:text-gray-900 dark:hover:text-gray-50 hover:-translate-x-1 transition py-1 border-b last:border-0 border-b-gray-100 dark:border-b-gray-800">
                    <a href="#">لوبیا</a>
                </li>

                <li
                    class="hover:text-gray-900 dark:hover:text-gray-50 hover:-translate-x-1 transition py-1 border-b last:border-0 border-b-gray-100 dark:border-b-gray-800">
                    <a href="#">قارچ</a>
                </li>

                <li
                    class="hover:text-gray-900 dark:hover:text-gray-50 hover:-translate-x-1 transition py-1 border-b last:border-0 border-b-gray-100 dark:border-b-gray-800">
                    <a href="#">سبزی</a>
                </li>
            </ul>
        </li>

        <li
            class="parent group relative text-gray-800 dark:text-gray-50">
            <div
                class="flex items-center group-hover:text-theme-color-dark dark:group-hover:text-theme-color-light transition">
                <a href="./products" class="font-vazir-medium">لبنیات</a>
                <svg
                    class="size-5 -rotate-90">
                    <use
                        xlink:href="#angle"><use>
                </svg>
            </div>

            <ul
                class="hidden child absolute right-0 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 rounded-lg shadow-md w-48 p-2 space-y-1 border-b-2 border-b-theme-color-dark dark:border-b-theme-color-light">
                <li
                    class="hover:text-gray-900 dark:hover:text-gray-50 hover:-translate-x-1 transition py-1 border-b last:border-0 border-b-gray-100 dark:border-b-gray-800">
                    <a
                        href="#">شیر</a>
                </li>

                <li
                    class="hover:text-gray-900 dark:hover:text-gray-50 hover:-translate-x-1 transition py-1 border-b last:border-0 border-b-gray-100 dark:border-b-gray-800">
                    <a
                        href="#">ماست</a>
                </li>

                <li
                    class="hover:text-gray-900 dark:hover:text-gray-50 hover:-translate-x-1 transition py-1 border-b last:border-0 border-b-gray-100 dark:border-b-gray-800">
                    <a
                        href="#">کره</a>
                </li>

                <li
                    class="hover:text-gray-900 dark:hover:text-gray-50 hover:-translate-x-1 transition py-1 border-b last:border-0 border-b-gray-100 dark:border-b-gray-800">
                    <a
                        href="#">سرشیر</a>
                </li>
            </ul>
        </li>

        <li
            class="parent group relative text-gray-800 dark:text-gray-50">
            <div
                class="flex items-center group-hover:text-theme-color-dark dark:group-hover:text-theme-color-light transition">
                <a
                    href="./products"
                    class="font-vazir-medium">
                    فروشندگان
                </a>

                <svg
                    class="size-5 -rotate-90">
                    <use
                        xlink:href="#angle">
                    <use>
                </svg>
            </div>

            <ul
                class="hidden child absolute right-0 bg-white dark:bg-gray-900 text-gray-600 dark:text-gray-300 rounded-lg shadow-md w-48 p-2 space-y-1 border-b-2 border-b-theme-color-dark dark:border-b-theme-color-light">
                <li
                    class="hover:text-gray-900 dark:hover:text-gray-50 hover:-translate-x-1 transition py-1 border-b last:border-0 border-b-gray-100 dark:border-b-gray-800">
                    <a
                        href="#">حسین
                        غنیمتی</a>
                </li>

                <li
                    class="hover:text-gray-900 dark:hover:text-gray-50 hover:-translate-x-1 transition py-1 border-b last:border-0 border-b-gray-100 dark:border-b-gray-800">
                    <a
                        href="#">حسین
                        محمدی</a>
                </li>

                <li
                    class="hover:text-gray-900 dark:hover:text-gray-50 hover:-translate-x-1 transition py-1 border-b last:border-0 border-b-gray-100 dark:border-b-gray-800">
                    <a
                        href="#">امین
                        غنیمتی</a>
                </li>

                <li
                    class="hover:text-gray-900 dark:hover:text-gray-50 hover:-translate-x-1 transition py-1 border-b last:border-0 border-b-gray-100 dark:border-b-gray-800">
                    <a
                        href="#">امین
                        محمدی</a>
                </li>
            </ul>
        </li>

        <li>
            <button
                class="toggle-theme-btn float-left p-1 border border-gray-500 dark:border-gray-300 text-gray-500 dark:text-gray-300 shadow-md  rounded-full">
                <!-- Moon Icon -->
                <svg
                    class="dark:hidden size-8">
                    <use
                        xlink:href="#moon-icon">
                    </use>
                </svg>

                <!-- Sun Icon -->
                <svg
                    class="hidden dark:block size-8">
                    <use
                        xlink:href="#sun-icon">
                    </use>
                </svg>
            </button>
        </li>
</ul>

<!-- Best Sellers Button -->
<button
    type="button"
    class="open-modal-btn px-[14px] py-[9px] rounded relative before:block before:absolute before:inset-0 before:h-full before:w-full before:rounded before:bg-theme-color-dark before:opacity-10"
    data-target="best-selling-modal">

    <svg
        class="size-6">
        <use
            xlink:href="#bolt-icon"
            class="text-theme-color-dark">
        </use>
    </svg>
</button>
`

class MainBar extends HTMLElement {
    constructor(){
        super();
        this.appendChild(mainBarTemplate.content.cloneNode(true));
    }

    connectedCallback(){
        this.className = "hidden md:flex container mx-auto  items-center justify-between mt-5"
    }
}

export {MainBar}