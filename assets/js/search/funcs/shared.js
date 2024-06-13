import {
  getUrlParam,
  handleBredcrumb,
  removeParamWithotRefresh,
  setParamWithotRefresh,
} from "../../funcs/utils.js";
import { generateSearchedItem, getSearchedData } from "./utils.js";

const pageSearchInput = document.querySelector("#page-search-input");

const renderSlider = () => {
  const swiper = new Swiper(".swiper", {
    spaceBetween: 12,
    slidesPerView: "auto",
    // loop: true,
    autoplay: {
      delay: 1500,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
    rewind: true,
  });
};

const renderSearchedData = async (searchedValue) => {
  if (searchedValue) {
    const dataWrapper = document.querySelector("#searched-data-wrapper");
    dataWrapper.innerHTML = "";

    const searchedData = await getSearchedData(searchedValue);
    searchedData.forEach((item) => {
      dataWrapper.insertAdjacentHTML("beforeend", generateSearchedItem(item));
    });
  }else{
    location.reload();
  }
};

const searchAsUrlParam = () => {
  const searchedValue = getUrlParam("searchedValue");
  if (!searchedValue) {
    renderSlider();
    return false;
  }

  renderSearchedData(searchedValue);
};

const loadSearchedValue = () => {
  pageSearchInput.value = getUrlParam("searchedValue");
};

const renderSearching = () => {
  const pageSearchBtn = document.querySelector("#page-search-btn");

  pageSearchInput.addEventListener("keyup", (e) => {
    const searchedValue = pageSearchInput.value.trim();
    if (e.keyCode === 13) {
      renderSearchedData(searchedValue);
      setParamWithotRefresh("searchedValue", searchedValue);
      renderBreadcrumb(searchedValue)
    }
  });

  pageSearchBtn.addEventListener("click", () => {
    const searchedValue = pageSearchInput.value.trim();

    renderSearchedData(searchedValue);
    setParamWithotRefresh("searchedValue", searchedValue);
    renderBreadcrumb(searchedValue)
  });
};

const renderBreadcrumb = (searchedValue) => {
  searchedValue = searchedValue
    ? searchedValue
    : getUrlParam("searchedValue") || null;
  const breadcrumbList = [{ href: "./search.html", value: "جستجو" }];

  if (searchedValue) {
    breadcrumbList.push({
      href: `./search.html?searchedValue=${searchedValue}`,
      value: searchedValue,
    });
  }

  handleBredcrumb("جستجو", breadcrumbList);
};

export {
  searchAsUrlParam,
  loadSearchedValue,
  renderSearching,
  renderBreadcrumb,
};
