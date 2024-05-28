const template =document.createElement('template');
template.innerHTML = `
<!-- Dairy Section -->
  <section-header
    title="صبحانه و لبنیات"
    subTitle="یک دستیار مجازی محصولات را از لیست شما جمع آوری می کند">
  </section-header>

  <!-- Section Content -->
    <div class="swiper__products relative mt-5 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide w-full 2xs:w-max">
          <product-box
            id="df786asdf08adf11"
            src="dairies/11.png"
            title="وافل بلژیکی"
            stars="4"
            counts="32"
            unit="عدد"
            amount="1"
            price="28000"
          ></product-box>
          <product-box
            id="df786asdf08adf33"
            src="dairies/12.png"
            title="بیسکوییت بسیار مغذی"
            stars="3"
            counts="53"
            unit="عدد"
            amount="1"
            price="11000"
          ></product-box>
        </div>
    
        <div class="swiper-slide w-full 2xs:w-max">
          <product-box
            id="df786asdf08adf44"
            src="dairies/13.png"
            title="کروسانت کره"
            stars="5"
            counts="28"
            unit="عدد"
            amount="5"
            price="83000"
          ></product-box>
          <product-box
            id="df786asdf08adf55"
            src="dairies/14.png"
            title="نوشیدنی انبه فروتی"
            stars="1"
            counts="23"
            unit="عدد"
            amount="1"
            price="50000"
          ></product-box>
        </div>
    
        <div class="swiper-slide w-full 2xs:w-max">
          <product-box
            id="df786asdf08adf66"
            src="dairies/15.png"
            title="پاستا ماکارونی آرنج بامبینو"
            stars="4"
            counts="71"
            unit="عدد"
            amount="1"
            price="40000"
          ></product-box>
          <product-box
            id="df786asdf08adf77"
            src="dairies/16.png"
            title="نان برگر موفه"
            stars="3"
            counts="28"
            unit="قرص"
            amount="1"
            price="28000"
          ></product-box>
        </div>
    
        <div class="swiper-slide w-full 2xs:w-max">
          <product-box
            id="df786asdf08adf88"
            src="dairies/17.png"
            title="پنیر تبریزی اعلی"
            stars="2"
            counts="5"
            unit="کیلوگرم"
            amount="1"
            price="120000"
          ></product-box>
          <product-box
            id="df786asdf08adf99"
            src="dairies/18.png"
            title="تخم مرغ"
            stars="4"
            counts="53"
            unit="شانه"
            amount="1"
            price="78000"
          ></product-box>
        </div>
    
        <div class="swiper-slide w-full 2xs:w-max">
          <product-box
            id="df786asdf08adf10"
            src="dairies/19.png"
            title="ماست تازه"
            stars="5"
            counts="89"
            unit="کیلوگرم"
            amount="1"
            price="120000"
          ></product-box>
          <product-box
            id="df786asdf08adf44"
            src="dairies/20.png"
            title="مربای پرتقال ارگانیک"
            stars="3"
            counts="12"
            unit="عدد"
            amount="1"
            price="56000"
          ></product-box>
        </div>

        <div class="swiper-slide w-full 2xs:w-max">
          <product-box
            id="df786asdf08adf11"
            src="dairies/11.png"
            title="وافل بلژیکی"
            stars="4"
            counts="32"
            unit="عدد"
            amount="1"
            price="28000"
          ></product-box>
          <product-box
            id="df786asdf08adf77"
            src="dairies/16.png"
            title="نان برگر موفه"
            stars="3"
            counts="28"
            unit="قرص"
            amount="1"
            price="28000"
          ></product-box>
        </div>
    
        <div class="swiper-slide w-full 2xs:w-max">
          <product-box
            id="df786asdf08adf33"
            src="dairies/12.png"
            title="بیسکوییت بسیار مغذی"
            stars="3"
            counts="53"
            unit="عدد"
            amount="1"
            price="11000"
          ></product-box>
          <product-box
            id="df786asdf08adf88"
            src="dairies/17.png"
            title="پنیر تبریزی اعلی"
            stars="2"
            counts="5"
            unit="کیلوگرم"
            amount="1"
            price="120000"
          ></product-box>
        </div>

        <div class="swiper-slide w-full 2xs:w-max">
          <product-box
            id="df786asdf08adf44"
            src="dairies/13.png"
            title="کروسانت کره"
            stars="5"
            counts="28"
            unit="عدد"
            amount="5"
            price="83000"
          ></product-box>
          <product-box
            id="df786asdf08adf44"
            src="dairies/20.png"
            title="مربای پرتقال ارگانیک"
            stars="3"
            counts="12"
            unit="عدد"
            amount="1"
            price="56000"
          ></product-box>
        </div>
    
        <div class="swiper-slide w-full 2xs:w-max">
          <product-box
            id="df786asdf08adf77"
            src="dairies/16.png"
            title="نان برگر موفه"
            stars="3"
            counts="28"
            unit="قرص"
            amount="1"
            price="28000"
          ></product-box>
          <product-box
            id="df786asdf08adf88"
            src="dairies/17.png"
            title="پنیر تبریزی اعلی"
            stars="2"
            counts="5"
            unit="کیلوگرم"
            amount="1"
            price="120000"
          ></product-box>
        </div>
    
        <div class="swiper-slide w-full 2xs:w-max">
          <product-box
            id="df786asdf08adf99"
            src="dairies/18.png"
            title="تخم مرغ"
            stars="4"
            counts="53"
            unit="شانه"
            amount="1"
            price="78000"
          ></product-box>
          <product-box
            id="df786asdf08adf99"
            src="dairies/18.png"
            title="تخم مرغ"
            stars="4"
            counts="53"
            unit="شانه"
            amount="1"
            price="78000"
          ></product-box>
        </div>
  
      </div>
    </div>
`

class dairySection extends HTMLElement{
  constructor(){
    super()
    this.appendChild(template.content.cloneNode(true))
  }
}

export {
  dairySection
}