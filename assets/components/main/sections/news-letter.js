const template = document.createElement('template');
template.innerHTML = `
  <div class="newsletter__content py-7 sm:py-12 relative z-10 px-3 mr-2 sm:mr-[50px]">
    <h5 class="text-white text-xl md:text-2xl font-bold line-clamp-1">عضویت در خبرنامه ...</h5>
    <p class="text-yellow-500 md:text-lg font-medium line-clamp-1">20درصد تخفیف ویژه با عضویت در خبرنامه</p>

    <!-- Input Box -->
    <div class="max-w-[450px] bg-white rounded-md flex items-center p-1 mt-2 md:mt-5 relative overflow-hidden">
      <span class="envelop-icon hidden xs:inline-block p-[7px] relative">
        <svg class="size-[15px]">
          <use xlink:href="#envelop-icon" class="text-theme-color-dark font-medium"></use>
        </svg>
      </span>

      <input type="text" class="p-2 text-sm xs:text-base" placeholder="ایمیل خود را وارد کنید...">

      <button type="button" class="bg-danger text-white rounded px-1 xs:px-4 py-2  flex items-center justify-center xs:gap-1 absolute left-1">
        <span class="hidden xs:inline">عضویت</span>
        <svg class="size-5 text-xl scale-75">
          <use xlink:href="#arrow-icon" class="text-white"></use>
        </svg>
      </button>
    </div>
  </div>
`

class NewsLetter extends HTMLElement{
  constructor(){
    super()
    this.appendChild(template.content.cloneNode(true));
  }

  connectedCallback(){
    this.className = "newsletter block relative rounded-[10px] overflow-hidden"
  }
}

export {
  NewsLetter
}