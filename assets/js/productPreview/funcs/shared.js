import { handleBredcrumb } from "../../funcs/utils.js"

const renderBreadcrumb = () => {
  handleBredcrumb("جزئیات محصول", [
    {href: "./products.html?cat=cakes", value: 'کیک ها'},
    {href: "./productpreview.html?id=12sd234sd22q34-01", value: 'کیک شکلات خامه ای سفید'}
  ])
}

const handlePicsSliders = pics => {
  console.log("Hi slider");
  // const mainSlider = document.querySelector('#main-slider-wrapper')
  // const secondSlider = document.querySelector('#secend-slider-wrapper')

  // pics.forEach(pic => {
  //   mainSlider.insertAdjacentHTML('beforeend', generatePicSlidTemplate(pic))
  //   secondSlider.insertAdjacentHTML('beforeend', generatePicSlidTemplate(pic))
  // })

  const secondSliderConfig = new Swiper('.swiper-2', {
    spaceBetween: 10,
    rewind: true,
    slidesPerView: "auto",
    freeMode: true,
    whatchSlidesProgress: true,
  })

  const mainSliderConfig = new Swiper('.swiper', {
    rewind: true,
    efect: "fade",
    thumbs:{
     swiper: secondSliderConfig
    }
  })
}

export{
  renderBreadcrumb,
  handlePicsSliders
}