const template = document.createElement('template');
template.innerHTML = `
<!-- Additional required wrapper -->
<div class="swiper-wrapper">
  <!-- Slides -->
  <cat-picture
    id="dsfsa65234gas65-cat1"
    src="./main-cats/1.jpg"
    title="تخم مرغ و لبنیات"
    subtitle="ملزومات روزانه تخم مرغ ولبنیات"
    stars="5"
    count="56"
    sellerName="حسین غنیمتی"
    sellerId="324hg234hgkh-seller1">
  </cat-picture>
  <cat-picture
    id="dsfsa65234gas65-cat2"
    src="./main-cats/2.jpg"
    title="گوشت ارگانیک آماده شده"
    subtitle="تحویل در خانه شما"
    stars="4"
    count="12"
    sellerName="نست فود"
    sellerId="324hg234hgkh-seller2">
  </cat-picture>
  <cat-picture
    id="dsfsa65234gas65-cat3"
    src="./main-cats/3.jpg"
    title="حبوبات"
    subtitle="عدسی و آجیل های مغذی"
    stars="4"
    count="12"
    sellerName="مهدی شاهی"
    sellerId="324hg234hgkh-seller1">
  </cat-picture>
  <cat-picture
    id="dsfsa65234gas65-cat4"
    src="./main-cats/4.jpg"
    title="میوه های اعلی"
    subtitle="میوه ها و سبزیجات درجه یک"
    stars="5"
    count="24"
    sellerName="نست فود"
    sellerId="324hg234hgkh-seller1">
  </cat-picture>
</div>
`

class CatsPicture extends HTMLElement {
  constructor(){
    super()
    this.appendChild(template.content.cloneNode(true))
  }

  connectedCallback(){
    this.className = "block swiper__catsPicture overflow-hidden mt-9 md:mt-10"
  }
}

export {
  CatsPicture
}