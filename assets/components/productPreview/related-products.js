const template = document.createElement('template');
template.innerHTML = `
<section-header
  title="محصولات مرتبط"
  subtitle="یک خرید عالی رو از ما داشته باشید"></section-header>

<div
  class="swiper__related block relative mt-5 pb-10 rounded-lg overflow-hidden">
  <div class="swiper-wrapper" id="searched-data-wrapper">
    <!-- Slides -->
    <product-box-2
      id="df786asdf08adf44"
      src="fruits/4.png"
      title="کیوی تمیز و درشت"
      stars="3"
      counts="12"
      unit="کیلوگرم"
      amount="1"
      price="40000"
      category="میوه ها">
    </product-box-2>

    <product-box-2
      id="df786asdf08adf55"
      src="fruits/5.png"
      title="لیمو ترش اعلی"
      stars="1"
      counts="23"
      unit="کیلوگرم"
      amount="1"
      price="50000"
      category="میوه ها">
    </product-box-2>

    <product-box-2
      id="df786asdf08adf66"
      src="fruits/6.png"
      title="پرتغال تامسون شیرین"
      stars="4"
      counts="71"
      unit="کیلوگرم"
      amount="1"
      price="40"
      category="میوه ها">
    </product-box-2>

    <product-box-2
      id="df786asdf08adf77"
      src="fruits/7.png"
      title="کلم بوروکلی تازه و طعم دار"
      stars="3"
      counts="28"
      unit="کیلوگرم"
      amount="1"
      price="40000"
      category="میوه ها">
    </product-box-2>

    <product-box-2
      id="df786asdf08adf88"
      src="fruits/8.png"
      title="کدو تازه رسیده"
      stars="2"
      counts="5"
      unit="کیلوگرم"
      amount="6"
      price="120000"
      category="میوه ها">
    </product-box-2>

    <product-box-2
      id="df786asdf08adf99"
      src="fruits/9.png"
      title="فلفل دلمه ای ارگانیک"
      stars="4"
      counts="53"
      unit="کیلوگرم"
      amount="1"
      price="35000"
      category="میوه ها">
    </product-box-2>

    <product-box-2
      id="df786asdf08adf10"
      src="fruits/10.png"
      title="توت فرنگی شیرین"
      stars="5"
      counts="89"
      unit="کیلوگرم"
      amount="1"
      price="240000"
      category="میوه ها">
    </product-box-2>

    <product-box-2
      id="df786asdf08adf44"
      src="fruits/4.png"
      title="کیوی تمیز و درشت"
      stars="3"
      counts="12"
      unit="کیلوگرم"
      amount="1"
      price="40000"
      category="میوه ها">
    </product-box-2>
  </div>

  <!-- Pagination -->
  <div class="swiper-pagination"></div>
</div>
`

export default class RelatedProducts extends HTMLElement{
  constructor(){
    super();
    this.appendChild(template.content.cloneNode(true))
  }

  connectedCallback(){
    this.classList = "block"
  }
}