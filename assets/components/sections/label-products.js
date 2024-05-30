const template = document.createElement('template')

template.innerHTML = `
<div class="swiper-wrapper">
  <!-- Best Label -->
  <div class="swiper-slide w-full sm:w-[410px] bg-gray-100 dark:bg-gray-800">
    <h4 class="label-title border-b border-gray-300 dark:border-gray-700 text-black dark:text-stone-50 font-semibold">برترین ها</h4>

    <!-- Content -->
    <div>
      <label-product
        id="23hfgf234gkf-13"
        src="beans/13.jpg"
        title="مغز گردوی گودلایف"
        price="10000"
        stars="4"
      ></label-product>
      <label-product
        id="23hfgf234gkf-14"
        src="fruits/14.jpg"
        title="گیلاس قرمز ممتاز وارداتی"
        price="40000"
        stars="5"
      ></label-product>
      <label-product
        id="23hfgf234gkf-15"
        src="beans/15.jpg"
        title="کاری بز ممتاز"
        price="45000"
        stars="3"
      ></label-product>
      <label-product
        id="23hfgf234gkf-16"
        src="fruits/16.jpg"
        title="خرمای وارداتی"
        price="70000"
        stars="4"
      ></label-product>
    </div>
  </div>

  <!-- New Label -->
  <div class="swiper-slide w-full sm:w-[410px] bg-gray-100 dark:bg-gray-800">
    <h4 class="label-title border-b border-gray-300 dark:border-gray-700 text-black dark:text-stone-50 font-semibold">جدیدترین ها</h4>

    <!-- Content -->
    <div>
      <label-product
        id="23hfgf234gkf-13"
        src="dairies/17.png"
        title="پنیر ایتالیایی"
        price="10000"
        stars="4"
      ></label-product>
      <label-product
        id="23hfgf234gkf-11"
        src="fruits/11.jpg"
        title="گوجه فرنگی ارگانیک"
        price="45000"
        stars="2"
      ></label-product>
      <label-product
        id="23hfgf234gkf-12"
        src="dairies/12.jpg"
        title="عسل خالص ارگانیک"
        price="90000"
        stars="5"
      ></label-product>
      <label-product
        id="23hfgf234gkf-10"
        src="dairies/10.jpg"
        title="شیر تنیده لانگ لایف"
        price="42000"
        stars="4"
      ></label-product>
    </div>
  </div>

  <!-- Popular Label -->
  <div class="swiper-slide w-full sm:w-[410px] bg-gray-100 dark:bg-gray-800">
    <h4 class="label-title border-b border-gray-300 dark:border-gray-700 text-black dark:text-stone-50 font-semibold">محصولات پرطرفدار</h4>

    <!-- Content -->
    <div>
      <label-product
        id="23hfgf234gkf-5"
        src="dairies/5.jpg"
        title="روغن آفتابگردان تصفیه شده"
        price="32000"
        stars="5"
      ></label-product>
      <label-product
        id="23hfgf234gkf-6"
        src="beans/6.jpg"
        title="بادام زمینی خام"
        price="41000"
        stars="5"
      ></label-product>
      <label-product
        id="23hfgf234gkf-7"
        src="beans/7.jpg"
        title="پسته آماده"
        price="240000"
        stars="5"
      ></label-product>
      <label-product
        id="23hfgf234gkf-14"
        src="dairies/14.png"
        title="نوشیدنی انبه فروتی"
        price="25000"
        stars="4"
      ></label-product>
    </div>
  </div>

  <!-- Best-Sellers Label -->
  <div class="swiper-slide w-full sm:w-[410px] bg-gray-100 dark:bg-gray-800">
    <h4 class="label-title border-b border-gray-300 dark:border-gray-700 text-black dark:text-stone-50 font-semibold">پرفروش ترین ها</h4>

    <!-- Content -->
    <div>
      <label-product
        id="23hfgf234gkf-01"
        src="dairies/1.jpg"
        title="نان تافتان سبوسه دار"
        price="31000"
        stars="4"
      ></label-product>
      <label-product
        id="23hfgf234gkf-02"
        src="fruits/2.jpg"
        title="سیب زمینی اعلی"
        price="23000"
        stars="5"
      ></label-product>
      <label-product
        id="23hfgf234gkf-03"
        src="beans/3.jpg"
        title="فلفل سبز"
        price="45000"
        stars="5"
      ></label-product>
      <label-product
        id="23hfgf234gkd-16"
        src="dairies/16.png"
        title="نان برگر موفه"
        price="70000"
        stars="4"
      ></label-product>
    </div>
  </div>
</div>
`

class LabelProducts extends HTMLElement {
  constructor(){
    super();
    this.appendChild(template.content.cloneNode(true))
  }

  connectedCallback(){
    this.className = "block swiper__catsPicture overflow-hidden mt-9 md:mt-15"
  }
}

export{
  LabelProducts
}