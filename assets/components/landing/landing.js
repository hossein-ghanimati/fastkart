const landingTemplate = document.createElement('template')
landingTemplate.innerHTML = `
<!-- Landing Right -->
<div
    class="col-start-1 col-end-5 lg:col-end-4 relative h-max overflow-hidden rounded-xl shadow-md max-h-[533px]">
    <img src="./assets/image/landing/1.jpg" alt="landing">
    <div
        class="absolute top-0 right-0 col-start-1 col-end-4 p-4 md:p-7 xl:px-12 xl:py-14 h-full w-3/4 flex items-center">
        <div>
            <!-- Top Part -->
            <p class="text-[10px] sm:text-sm">
                <span class="text-gray-500">تخفیف ویژه</span>
                <span
                    class="mr-[7px] py-[6px] px-4 bg-gradient-to-r from-red-100 from-55% to-white rounded-full text-red-600">
                    %<span>30</span>
                    تخفیف
                </span>
            </p>

            <!-- Main Part -->
            <div
                class="px-4 sm:px-[72px] pb-2 mt-2 text-lg sm:text-5xl font-aviny font-bold text-black">
                <span class="block">با خیال راحت
                    خرید کنید</span>
                <span
                    class="text text-theme-color-dark">نیازهای
                    روزانه</span>
            </div>

            <!-- Text Part -->
            <p class="hidden sm:block w-[58%] text-gray-500 text-sm">
                بسیاری از سازمان ها بیانیه های رسمی صادر کرده
                اند که مردم را تشویق به کاهش مصرف نوشیدنی های
                شیرین کرده اند.
            </p>

            <!-- Button -->
            <button type="button"
                class="sm:mt-6 py-2 sm:py-3 px-4 sm:px-8 text-sm sm:text-base rounded-lg text-white bg-red-500">
                خرید آنلاین
            </button>
        </div>
    </div>
</div>

<!-- Landing Left -->
<div
    class="relative hidden lg:block col-start-4 col-end-5 rounded-lg overflow-hidden shadow-md max-h-[533px]">
    <img src="./assets/image/landing/2.jpg" alt class="h-full w-full">
    <div class="absolute right-0 top-0 h-full w-3/4 p-5">
        <!-- Top -->
        <p class="mt-10 text-red-500 text-3xl font-bold">
            <span>45</span>%
            <span class="text-gray-700 text-base font-light">تخفیف</span>
        </p>

        <!-- Main -->
        <p
            class="font-aviny font-medium text-[34px] text-theme-color-dark my-4">
            طراوت سلطنتی
        </p>

        <!-- Text -->
        <p class="text-gray-700 line-clamp-2">
            فقط این هفته از دست ندید ...
        </p>
    </div>
</div>
`

class Landing extends HTMLElement {
    constructor(){
        super();
        this.appendChild(landingTemplate.content.cloneNode(true));
    }

    connectedCallback(){
        this.className = "container mx-auto mt-6 grid grid-cols-4 gap-6"
    }
}

export {Landing}