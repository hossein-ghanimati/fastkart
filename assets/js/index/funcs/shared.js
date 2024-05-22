const renderSwiper = (selector = '.swiper') => {
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

const deleteSwiperBugs = () => {
  const swiperInterval = setInterval(() =>{
    const boxs = document.querySelectorAll('cat-box')
    boxs.forEach(box => {
      box.children[1]?.remove()
    })
  }
  ,1000)

  setTimeout(() => {
    removeInterval(swiperInterval)
  }, 10_1000)
}

export {
  deleteSwiperBugs,
  renderSwiper
}