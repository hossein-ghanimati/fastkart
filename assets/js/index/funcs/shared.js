import { deleteProductsSwiperBugs } from "./utils.js"

const renderCatsSlider = (selector = '.swiper') => {
  const swiper = new Swiper(selector, {    
    spaceBetween: 12,
    slidesPerView: 'auto',
    // loop: true,
    autoplay: {
      delay: 1500,
    },
    pagination: {
      el : '.swiper-pagination',
      dynamicBullets : true,
      clickable : true,
    },
    rewind: true,

  })
}

const renderProductsSlider = () => {
  const swiper = new Swiper(".swiper__products", {  
    slidesPerView: "auto",
    loop: true,
    autoplay: {
      delay: 2000,
    },
    pagination: {
      el : '.swiper-pagination',
      dynamicBullets : true,
      clickable : true,
    },
  })
}

const deleteSwiperBugs = () => {
  const swiperInterval = setInterval(() =>{
    const boxs = document.querySelectorAll('cat-box')
    boxs.forEach(box => {
      box.children[1]?.remove()
    })
  }
  ,1000)

  setTimeout(() => {
    clearInterval(swiperInterval)
  }, 10_000)

  deleteProductsSwiperBugs()
}

export {
  renderCatsSlider,
  renderProductsSlider,
  deleteSwiperBugs,
}