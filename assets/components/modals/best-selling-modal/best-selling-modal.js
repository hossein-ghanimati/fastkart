const bestSellingModalTemplate = document.createElement('template')
bestSellingModalTemplate.innerHTML = `
    <div
        class="pointer-events-auto relative w-full h-full md:h-[415px] md:w-[500px] bg-white dark:bg-gray-900 shadow-lg rounded-0 md:rounded-xl p-5 pb-6 space-y-4 border-b-4 border-b-theme-color-dark dark:border-b-theme-color-light">
        <!-- Close Button -->
        <button
            class="close-modal-btn size-8 rounded absolute left-2 top-2  md:-left-2 md:-top-2 flex items-center justify-center bg-theme-color-dark dark:bg-theme-color-dark"
            data-target="best-selling-modal">
            <svg class="size-6">
                <use xlink:href="#close-icon" class="text-white"></use>
            </svg>
        </button>

        <!-- Modal Header -->
        <div class="space-y-4">
            <!-- Modal Title -->
            <span
                class="p-1 font-vazir-bold text-xl dark:text-gray-100">پر
                فروشترین محصولات</span>

            <!-- Modal Sub Title -->
            <p
                class="p-1 pr-5 line-clamp-1 text-sm text-gray-400 dark:text-gray-300">محصولات
                پیشنهادی برای شما</p>
        </div>

        <!-- Modal List -->
        <ul
            class="overflow-auto h-[275px] space-y-2">
            <li>
                <a href="#"
                    class="h-[105px] flex items-center justify-start bg-green-100 rounded-lg p-[14px]">
                    <!-- Product Image -->
                    <img src="./assets/image/products/coffee.png"
                        alt="coffee" class="size-[75px]">

                    <!-- Product Information -->
                    <div
                        class="space-y-[6px] mr-4">
                        <!-- Product Name -->
                        <span
                            class="max-x-[300px] line-clamp-1 text-lg text-gray-800">قهوه
                            فوری مخلوص 50 گرم</span>

                        <p
                            class="text-xs flex items-center gap-2">
                            <span class="text-sm text-gray-700">
                                <span>52,720</span>
                                <span>تومان</span>
                            </span>
                            <span
                                class="p-1 text-red-700 line-through decoration-red-500">56,000</span>
                            <span class="text-gray-600">500 گرم</span>
                        </p>
                    </div>
                </a>
            </li>
            <li>
                <a href="#"
                    class="h-[105px] flex items-center justify-start bg-red-100 rounded-lg p-[14px]">
                    <!-- Product Image -->
                    <img src="./assets/image/products/bread.png"
                        alt="coffee" class="size-[75px]">

                    <!-- Product Information -->
                    <div
                        class="space-y-[6px] mr-4">
                        <!-- Product Name -->
                        <span
                            class="max-x-[300px] line-clamp-1 text-lg text-gray-800">قهوه
                            فوری مخلوص 50 گرم</span>

                        <p
                            class="text-xs flex items-center gap-2">
                            <span class="text-sm text-gray-700">
                                <span>52,720</span>
                                <span>تومان</span>
                            </span>
                            <span
                                class="p-1 text-red-700 line-through decoration-red-500">56,000</span>
                            <span class="text-gray-600">500 گرم</span>
                        </p>
                    </div>
                </a>
            </li>
            <li>
                <a href="#"
                    class="h-[105px] flex items-center justify-start bg-yellow-100 rounded-lg p-[14px]">
                    <!-- Product Image -->
                    <img src="./assets/image/products/tomato.png"
                        alt="coffee" class="size-[75px]">

                    <!-- Product Information -->
                    <div
                        class="space-y-[6px] mr-4">
                        <!-- Product Name -->
                        <span
                            class="max-x-[300px] line-clamp-1 text-lg text-gray-800">قهوه
                            فوری مخلوص 50 گرم</span>

                        <p
                            class="text-xs flex items-center gap-2">
                            <span class="text-sm text-gray-700">
                                <span>52,720</span>
                                <span>تومان</span>
                            </span>
                            <span
                                class="p-1 text-red-700 line-through decoration-red-500">56,000</span>
                            <span class="text-gray-600">500 گرم</span>
                        </p>
                    </div>
                </a>
            </li>
            <li>
                <a href="#"
                    class="h-[105px] flex items-center justify-start bg-green-100 rounded-lg p-[14px]">
                    <!-- Product Image -->
                    <img src="./assets/image/products/pepper.png"
                        alt="coffee" class="size-[75px]">

                    <!-- Product Information -->
                    <div
                        class="space-y-[6px] mr-4">
                        <!-- Product Name -->
                        <span
                            class="max-x-[300px] line-clamp-1 text-lg text-gray-800">قهوه
                            فوری مخلوص 50 گرم</span>

                        <p
                            class="text-xs flex items-center gap-2">
                            <span class="text-sm text-gray-700">
                                <span>52,720</span>
                                <span>تومان</span>
                            </span>
                            <span
                                class="p-1 text-red-700 line-through decoration-red-500">56,000</span>
                            <span class="text-gray-600">500 گرم</span>
                        </p>
                    </div>
                </a>
            </li>
        </ul>
    </div>

`
class BestSellingModal extends HTMLElement {
    constructor(){
        super();
        this.appendChild(bestSellingModalTemplate.content.cloneNode(true))

        
    }
    connectedCallback(){
        const elemClass = "modal backdrop-blur pointer-events-none hidden absolute z-60 h-full w-full mx-auto items-center justify-center"
        
        this.className = elemClass
        this.setAttribute('id', "best-selling-modal")
    }
}

export {BestSellingModal}