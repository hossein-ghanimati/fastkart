const deleteProductsSwiperBugs = () => {
  const swiperInterval = setInterval(() => {
    const slideDivs = document.querySelectorAll(
      ".swiper__products .swiper-slide > div"
    );

    const productBoxs = document.querySelectorAll(
      "product-box"
    );

    slideDivs.forEach((div) => {
      div.remove();
    });

    productBoxs.forEach(box => {
      const boxChilds = Array.from(box.children)
      boxChilds.forEach((child, index) => {
        if (index >= 2) child.remove();
      })
    })
  }, 1000);

  setTimeout(() => {
    clearInterval(swiperInterval);
  }, 5_000);
};

export { deleteProductsSwiperBugs };
