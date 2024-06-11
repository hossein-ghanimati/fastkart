const template = document.createElement('template');
template.innerHTML = `
  <section-header
    title="میوه ها وسبزیجات"
    subTitle="یک دستیار مجازی محصولات را از لیست شما جمع آوری می کند">
  </section-header>

  <!-- Section Content -->
    <div class="swiper__products relative mt-5 border border-gray-200 dark:border-gray-700 rounded-lg overflow-hidden">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <div class="swiper-slide w-full 3xs:w-max">
          <product-box
            id="df786asdf08adf11"
            src="fruits/1.png"
            title="نارگیل قهوه ای تازه"
            stars="4"
            counts="32"
            unit="کیلوگرم"
            amount="1"
            price="150000"
          ></product-box>
          <product-box
            id="df786asdf08adf33"
            src="fruits/3.png"
            title="موز های درجه یک"
            stars="5"
            counts="53"
            unit="کیلوگرم"
            amount="1"
            price="70000"
          ></product-box>
        </div>
    
        <div class="swiper-slide w-full 3xs:w-max">
          <product-box
            id="df786asdf08adf44"
            src="fruits/4.png"
            title="کیوی تمیز و درشت"
            stars="3"
            counts="12"
            unit="کیلوگرم"
            amount="1"
            price="40000"
          ></product-box>
          <product-box
            id="df786asdf08adf55"
            src="fruits/5.png"
            title="لیمو ترش اعلی"
            stars="1"
            counts="23"
            unit="کیلوگرم"
            amount="1"
            price="50000"
          ></product-box>
        </div>
    
        <div class="swiper-slide w-full 3xs:w-max">
          <product-box
            id="df786asdf08adf66"
            src="fruits/6.png"
            title="پرتغال تامسون شیرین"
            stars="4"
            counts="71"
            unit="کیلوگرم"
            amount="1"
            price="40"
          ></product-box>
          <product-box
            id="df786asdf08adf77"
            src="fruits/7.png"
            title="کلم بوروکلی تازه و طعم دار"
            stars="3"
            counts="28"
            unit="کیلوگرم"
            amount="1"
            price="40000"
          ></product-box>
        </div>
    
        <div class="swiper-slide w-full 3xs:w-max">
          <product-box
            id="df786asdf08adf88"
            src="fruits/8.png"
            title="کدو تازه رسیده"
            stars="2"
            counts="5"
            unit="کیلوگرم"
            amount="6"
            price="120000"
          ></product-box>
          <product-box
            id="df786asdf08adf99"
            src="fruits/9.png"
            title="فلفل دلمه ای ارگانیک"
            stars="4"
            counts="53"
            unit="کیلوگرم"
            amount="1"
            price="35000"
          ></product-box>
        </div>
    
        <div class="swiper-slide w-full 3xs:w-max">
          <product-box
            id="df786asdf08adf10"
            src="fruits/10.png"
            title="توت فرنگی شیرین"
            stars="5"
            counts="89"
            unit="کیلوگرم"
            amount="1"
            price="240000"
          ></product-box>
          <product-box
            id="df786asdf08adf44"
            src="fruits/4.png"
            title="کیوی تمیز و درشت"
            stars="3"
            counts="12"
            unit="کیلوگرم"
            amount="1"
            price="40000"
          ></product-box>
        </div>

        <div class="swiper-slide w-full 3xs:w-max">
          <product-box
            id="df786asdf08adf11"
            src="fruits/1.png"
            title="نارگیل قهوه ای تازه"
            stars="4"
            counts="32"
            unit="کیلوگرم"
            amount="1"
            price="150000"
          ></product-box>
          <product-box
            id="df786asdf08adf33"
            src="fruits/3.png"
            title="موز های درجه یک"
            stars="5"
            counts="53"
            unit="کیلوگرم"
            amount="1"
            price="70000"
          ></product-box>
        </div>
    
        <div class="swiper-slide w-full 3xs:w-max">
          <product-box
            id="df786asdf08adf44"
            src="fruits/4.png"
            title="کیوی تمیز و درشت"
            stars="3"
            counts="12"
            unit="کیلوگرم"
            amount="1"
            price="40000"
          ></product-box>
          <product-box
            id="df786asdf08adf55"
            src="fruits/5.png"
            title="لیمو ترش اعلی"
            stars="1"
            counts="23"
            unit="کیلوگرم"
            amount="1"
            price="50000"
          ></product-box>
        </div>

        <div class="swiper-slide w-full 3xs:w-max">
          <product-box
            id="df786asdf08adf66"
            src="fruits/6.png"
            title="پرتغال تامسون شیرین"
            stars="4"
            counts="71"
            unit="کیلوگرم"
            amount="1"
            price="40"
          ></product-box>
          <product-box
            id="df786asdf08adf77"
            src="fruits/7.png"
            title="کلم بوروکلی تازه و طعم دار"
            stars="3"
            counts="28"
            unit="کیلوگرم"
            amount="1"
            price="40000"
          ></product-box>
        </div>
    
        <div class="swiper-slide w-full 3xs:w-max">
          <product-box
            id="df786asdf08adf88"
            src="fruits/8.png"
            title="کدو تازه رسیده"
            stars="2"
            counts="5"
            unit="کیلوگرم"
            amount="6"
            price="120000"
          ></product-box>
          <product-box
            id="df786asdf08adf99"
            src="fruits/9.png"
            title="فلفل دلمه ای ارگانیک"
            stars="4"
            counts="53"
            unit="کیلوگرم"
            amount="1"
            price="35000"
          ></product-box>
        </div>
    
        <div class="swiper-slide w-full 3xs:w-max">
          <product-box
            id="df786asdf08adf10"
            src="fruits/10.png"
            title="توت فرنگی شیرین"
            stars="5"
            counts="89"
            unit="کیلوگرم"
            amount="1"
            price="240000"
          ></product-box>
          <product-box
            id="df786asdf08adf44"
            src="fruits/4.png"
            title="کیوی تمیز و درشت"
            stars="3"
            counts="12"
            unit="کیلوگرم"
            amount="1"
            price="40000"
          ></product-box>
        </div>
  
      </div>
    </div>
`

class FriutSection extends HTMLElement {
  constructor(){
    super()
    this.appendChild(template.content.cloneNode(true))
  }
}

export {
  FriutSection
}