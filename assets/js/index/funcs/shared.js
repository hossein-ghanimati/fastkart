import Swiper from "../../../../node_modules/swiper/swiper.mjs";

const renderSwiper = (selector = '.swiper') => {
  const swiper = new Swiper(selector, {     
    spaceBetween: 10,
    slidesPerView: 'auto', 
    whatchSlidesProgress: true,
  
  })
}

export {
  renderSwiper
}