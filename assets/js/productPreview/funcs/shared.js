import { closeOtherMenuItems, toggleMenuItem } from "../../funcs/shared-utils.js";
import { handleBredcrumb } from "../../funcs/utils.js";

const renderBreadcrumb = () => {
  handleBredcrumb("جزئیات محصول", [
    { href: "./products.html?cat=cakes", value: "کیک ها" },
    {
      href: "./productpreview.html?id=12sd234sd22q34-01",
      value: "کیک شکلات خامه ای سفید",
    },
  ]);
};

const renderPicsSliders = (pics) => {
  console.log("Hi slider");
  // const mainSlider = document.querySelector('#main-slider-wrapper')
  // const secondSlider = document.querySelector('#secend-slider-wrapper')

  // pics.forEach(pic => {
  //   mainSlider.insertAdjacentHTML('beforeend', generatePicSlidTemplate(pic))
  //   secondSlider.insertAdjacentHTML('beforeend', generatePicSlidTemplate(pic))
  // })

  const secondSliderConfig = new Swiper(".swiper-2", {
    spaceBetween: 9,
    rewind: true,
    slidesPerView: "auto",
    freeMode: true,
    whatchSlidesProgress: true,

    breakpoints: {
      640: {
        direction: "vertical",
      },

      1280: {
        direction: "horizontal",
      },

      1536: {
        direction: "vertical",
      },
    },
  });

  const mainSliderConfig = new Swiper(".swiper", {
    rewind: true,
    effect: "fade",
    thumbs: {
      swiper: secondSliderConfig,
    },
  });
};

const renderOtheDescriptionTabsOpention = () => {
  const tabItems = document.querySelectorAll(".other-details__tab-item");

  tabItems.forEach((menuItem) => {
    menuItem.addEventListener("click", () => {
      closeOtherMenuItems(tabItems, menuItem);
      toggleMenuItem(menuItem);
    });
  });
};

export { renderBreadcrumb, renderPicsSliders, renderOtheDescriptionTabsOpention };
