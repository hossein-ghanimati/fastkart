const template = document.createElement('template');
template.innerHTML = 
  `  
    <section-header
      title="مروری بر دسته ها"
      subTitle="بهترین انتخاب در این هفته"
    ></section-header>

    <!-- Section Content -->
    <!-- Slider main container -->
    <div class="swiper mt-5">
      <!-- Additional required wrapper -->
      <div class="swiper-wrapper">
        <!-- Slides -->
        <cat-box
          class="swiper-slide"
          icon="#vegetable-icon"
            title="مروری بر دسته ها"
        ></cat-box>
        <cat-box
          class="swiper-slide"
          icon="#meat-icon"
          title="مروری بر دسته ها"
        ></cat-box>
        <cat-box
          class="swiper-slide"
          icon="#vegetable-icon"
          title="گوشت و پروتئین ها"
        ></cat-box>
        <cat-box
          class="swiper-slide"
          icon="#vegetable-icon"
            title="مروری بر دسته ها"
        ></cat-box>
        <cat-box
          class="swiper-slide"
          icon="#meat-icon"
          title="مروری بر دسته ها"
        ></cat-box>
        <cat-box
          class="swiper-slide"
          icon="#vegetable-icon"
          title="گوشت و پروتئین ها"
        ></cat-box>
      </div>
    </div>
  `


class CategoriesSection extends HTMLElement {
  constructor(){
    super()
    this.appendChild(template.content.cloneNode(true))
  }

  connectedCallback(){
    this.className = "section"
  }
}

export {
  CategoriesSection
}