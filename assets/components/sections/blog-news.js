const template = document.createElement('template');
template.innerHTML = `
  <section-header
    title="جدید ترین های وبلاگ"
    subtitle="یک دستیار مجازی محصولات را از لیست شما جمع آوری می کند"></section-header>

  <!-- Section Content -->
  <div class="block swiper__catsPicture overflow-hidden mt-9 md:mt-15">
    <!-- Additional required wrapper -->
    <div class="swiper-wrapper">
      <!-- Slides -->
      <blog-box
        id="asdf544asdf3-01"
        src="blog/1.jpg"
        subtitle="فارمات"
        title="گیاه مغذی">
      </blog-box>
      <blog-box
        id="asdf544asdf3-02"
        src="blog/2.jpg"
        subtitle="برند شیر"
        title="شیر تازه">
      </blog-box>
      <blog-box
        id="asdf544asdf3-03"
        src="blog/3.jpg"
        subtitle="برند آبجو"
        title="آبجو تازه - 30% تخفیف">
      </blog-box>
      <blog-box
        id="asdf544asdf3-04"
        src="blog/4.jpg"
        subtitle="برند آبجو"
        title="آبجو 500 میلی لیتر - 20% تخفیف">
      </blog-box>
      <blog-box
        id="asdf544asdf3-05"
        src="blog/5.jpg"
        subtitle="برند سودا"
        title="گوشت سوسیس تازه">
      </blog-box>
    </div>
  </div>
`

class BlogNews extends HTMLElement{
  constructor(){
    super();
    this.appendChild(template.content.cloneNode(true))
  }

  connectedCallback(){
    this.className = "block"
  }
}

export {
  BlogNews
}