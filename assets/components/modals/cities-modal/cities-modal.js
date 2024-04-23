const citiesModalTemplate = document.createElement('template');
citiesModalTemplate.innerHTML = `
<div
    class="pointer-events-auto  relative w-full h-full md:h-[405px] md:w-[500px] bg-white dark:bg-gray-900 shadow-lg rounded-0 md:rounded-xl p-[18px] ">
    
    <!-- Close Button -->
    <button
        class="close-modal-btn size-8 rounded absolute -left-2 -top-2 flex items-center justify-center bg-theme-color-dark dark:bg-theme-color-dark"
        data-target="cities-modal">
        <svg class="size-6">
            <use xlink:href="#close-icon" class="text-white"></use>
        </svg>
    </button>

    <!-- Modal Header -->
    <div
        class="space-y-3">
        <!-- Modal Title -->
        <span
            class="p-1 font-vazir-bold text-xl dark:text-gray-100">آدرس
            خود را انتخاب
            کنید</span>

        <!-- Modal Sub Title -->
        <p
            class="p-1 pr-5 line-clamp-1 text-sm text-gray-400 dark:text-gray-300">-
            آدرس خود را وارد کنید تا ما پیشنهاد را برای منطقه شما
            مشخص می کنیم.</p>
    </div>

    <!-- Modal Search Box -->
    <div class="w-full mt-3 relative h-11">
        <input type="text"
            class="absolute inset-0 w-full h-full pr-12 dark:bg-gray-600 border border-gray-300 dark:border-x-gray-200 rounded-md  focus:outline-none focus:border-green-600 dark:focus:border-green-400">
        <!-- Search Button -->
        <button
            class="absolute right-0 top-0 h-full px-[15px] flex items-center justify-center">
            <svg class="size-[17px] font-vazir-bold">
                <use xlink:href="#search-icon"
                    class="text-gray-700 dark:text-gray-300"></use>
            </svg>
        </button>
    </div>

    <p
        class="p-1 mt-6 text-sm text-gray-400 dark:text-gray-300">انتخاب
        مکان شما</p>

    <!-- Cities List -->
    <ul
        class="w-full h-[190px] overflow-auto border-t border-t-gray-300 dark:border-t-gray-200">
        <li
            class="group w-full h-11 transition cursor-pointer px-2 flex items-center justify-between hover:bg-teal-100 text-gray-600 dark:text-gray-200 dark:hover:text-gray-600 hover:text-green-800 text-sm">
            <span>آلاباما</span>
            <span
                class="px-2 rounded-full border border-gray-300 dark:border-x-gray-200 group-hover:bg-teal-600 group-hover:text-white text-[10px]">حداقل
                : 100 تومان</span>
        </li>
        <li
            class="group w-full h-11 transition cursor-pointer px-2 flex items-center justify-between hover:bg-teal-100 text-gray-600 dark:text-gray-200 dark:hover:text-gray-600 hover:text-green-800 text-sm">
            <span>آریزوانا</span>
            <span
                class="px-2 rounded-full border border-gray-300 dark:border-x-gray-200 group-hover:bg-teal-600 group-hover:text-white text-[10px]">حداقل
                : 150 تومان</span>
        </li>
        <li
            class="group w-full h-11 transition cursor-pointer px-2 flex items-center justify-between hover:bg-teal-100 text-gray-600 dark:text-gray-200 dark:hover:text-gray-600 hover:text-green-800 text-sm">
            <span>ایران</span>
            <span
                class="px-2 rounded-full border border-gray-300 dark:border-x-gray-200 group-hover:bg-teal-600 group-hover:text-white text-[10px]">حداقل
                : 170 تومان</span>
        </li>
        <li
            class="group w-full h-11 transition cursor-pointer px-2 flex items-center justify-between hover:bg-teal-100 text-gray-600 dark:text-gray-200 dark:hover:text-gray-600 hover:text-green-800 text-sm">
            <span>آلاباما</span>
            <span
                class="px-2 rounded-full border border-gray-300 dark:border-x-gray-200 group-hover:bg-teal-600 group-hover:text-white text-[10px]">حداقل
                : 100 تومان</span>
        </li>
        <li
            class="group w-full h-11 transition cursor-pointer px-2 flex items-center justify-between hover:bg-teal-100 text-gray-600 dark:text-gray-200 dark:hover:text-gray-600 hover:text-green-800 text-sm">
            <span>آریزوانا</span>
            <span
                class="px-2 rounded-full border border-gray-300 dark:border-x-gray-200 group-hover:bg-teal-600 group-hover:text-white text-[10px]">حداقل
                : 150 تومان</span>
        </li>
        <li
            class="group w-full h-11 transition cursor-pointer px-2 flex items-center justify-between hover:bg-teal-100 text-gray-600 dark:text-gray-200 dark:hover:text-gray-600 hover:text-green-800 text-sm">
            <span>ایران</span>
            <span
                class="px-2 rounded-full border border-gray-300 dark:border-x-gray-200 group-hover:bg-teal-600 group-hover:text-white text-[10px]">حداقل
                : 170 تومان</span>
        </li>
        <li
            class="group w-full h-11 transition cursor-pointer px-2 flex items-center justify-between hover:bg-teal-100 text-gray-600 dark:text-gray-200 dark:hover:text-gray-600 hover:text-green-800 text-sm">
            <span>آلاباما</span>
            <span
                class="px-2 rounded-full border border-gray-300 dark:border-x-gray-200 group-hover:bg-teal-600 group-hover:text-white text-[10px]">حداقل
                : 100 تومان</span>
        </li>
        <li
            class="group w-full h-11 transition cursor-pointer px-2 flex items-center justify-between hover:bg-teal-100 text-gray-600 dark:text-gray-200 dark:hover:text-gray-600 hover:text-green-800 text-sm">
            <span>آریزوانا</span>
            <span
                class="px-2 rounded-full border border-gray-300 dark:border-x-gray-200 group-hover:bg-teal-600 group-hover:text-white text-[10px]">حداقل
                : 150 تومان</span>
        </li>
        <li
            class="group w-full h-11 transition cursor-pointer px-2 flex items-center justify-between hover:bg-teal-100 text-gray-600 dark:text-gray-200 dark:hover:text-gray-600 hover:text-green-800 text-sm">
            <span>ایران</span>
            <span
                class="px-2 rounded-full border border-gray-300 dark:border-x-gray-200 group-hover:bg-teal-600 group-hover:text-white text-[10px]">حداقل
                : 170 تومان</span>
        </li>
        <li
            class="group w-full h-11 transition cursor-pointer px-2 flex items-center justify-between hover:bg-teal-100 text-gray-600 dark:text-gray-200 dark:hover:text-gray-600 hover:text-green-800 text-sm">
            <span>آلاباما</span>
            <span
                class="px-2 rounded-full border border-gray-300 dark:border-x-gray-200 group-hover:bg-teal-600 group-hover:text-white text-[10px]">حداقل
                : 100 تومان</span>
        </li>
        <li
            class="group w-full h-11 transition cursor-pointer px-2 flex items-center justify-between hover:bg-teal-100 text-gray-600 dark:text-gray-200 dark:hover:text-gray-600 hover:text-green-800 text-sm">
            <span>آریزوانا</span>
            <span
                class="px-2 rounded-full border border-gray-300 dark:border-x-gray-200 group-hover:bg-teal-600 group-hover:text-white text-[10px]">حداقل
                : 150 تومان</span>
        </li>
        <li
            class="group w-full h-11 transition cursor-pointer px-2 flex items-center justify-between hover:bg-teal-100 text-gray-600 dark:text-gray-200 dark:hover:text-gray-600 hover:text-green-800 text-sm">
            <span>ایران</span>
            <span
                class="px-2 rounded-full border border-gray-300 dark:border-x-gray-200 group-hover:bg-teal-600 group-hover:text-white text-[10px]">حداقل
                : 170 تومان</span>
        </li>
    </ul>
</div>
`

class CitiesModal extends HTMLElement {
    constructor(){
        super();
        this.appendChild(citiesModalTemplate.content.cloneNode(true));
    }

    connectedCallback(){
        const classArr = "modal backdrop-blur pointer-events-none hidden absolute z-20 h-full w-full mx-auto items-center justify-center"

        this.className = classArr
        this.setAttribute('id', "cities-modal")        
    }
}

export {CitiesModal}