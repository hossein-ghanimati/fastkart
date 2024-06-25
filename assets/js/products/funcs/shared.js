import { handleBreadcrumb, handlePagination } from "../../funcs/utils.js";
import productsAPI from "../../../../none.js";
import { sortProducts } from "./utils.js";

let mainProducts = [];
let lastProduct = []
let lastSelectedCats = [];
let selectedCats = [];
let catChanged = true;
let selectedMinPrice = 0;
let selectedMaxPrice = 1_000_000;
let sortOption = "last";
let displayMode = "col";
let paginationCurrentPage = 1

const filterByCategory = async () => {
  mainProducts = productsAPI();
  return productsAPI();
};

const filterByMinPrice = (products) => {
  const filteredProducts = products.filter(
    (product) => product.percentedPrice > selectedMinPrice
  );
  return filteredProducts;
};

const filterByMaxPrice = (products) => {
  const filteredProducts = products.filter(
    (product) => product.percentedPrice < selectedMaxPrice
  );
  return filteredProducts;
};

const handleProductsSort = (products) => {
  const sortedProducts = sortProducts(products, sortOption);
  return sortedProducts;
};

const paginateProducts = products => {
  const paginatedProducts = handlePagination(
      products, 
      displayMode == 'col' ? 
        window.screen.width > 1280 ? 12 : 8
       : 4,
      paginationCurrentPage
    )
  return paginatedProducts
}

const applyFilters = async () => {
  // console.clear();
  let products = catChanged ? await filterByCategory() : mainProducts;
  products = filterByMinPrice(products);
  products = filterByMaxPrice(products);
  products = handleProductsSort(products);
  lastProduct = products
  products = paginateProducts(products)
  return products;
};

const renderCategoryFiltering = () => {
  const categorySelectors = document.querySelectorAll(".cat-selector");
  categorySelectors.forEach((catSelector) => {
    catSelector.addEventListener("change", async () => {
      selectedCats = [];

      categorySelectors.forEach((selector) => {
        if (selector.checked) {
          selectedCats.push(selector.dataset.cat);
        }
      });
    });
  });
};

const renderSorting = () => {
  const sortOptionSelector = document.querySelector("#sort-by");
  sortOptionSelector.addEventListener("change", async () => {
    sortOption = sortOptionSelector.value;
    const products = await applyFilters();
    insertProducts(products);
  });
};

const applyFilstersClickHandler = async () => {
  const minPriceInput = document.querySelector(".min-price-input");
  const maxPriceInput = document.querySelector(".max-price-input");
  const areCatsChanged = !(
    JSON.stringify(selectedCats) == JSON.stringify(lastSelectedCats)
  );

  catChanged = areCatsChanged ? true : false;

  lastSelectedCats = [...selectedCats];

  selectedMinPrice = +minPriceInput.value;
  selectedMaxPrice = +maxPriceInput.value;

  const products = await applyFilters(...mainProducts);
  insertProducts(products);
};

const renderFiltering = () => {
  renderCategoryFiltering();
  renderSorting();
};

const renderDisplayMood = () => {
  const displayModeInputs = document.querySelectorAll(".display-mode__input");
  displayModeInputs.forEach((modeInput) => {
    modeInput.addEventListener("change", async () => {
      displayMode = modeInput.dataset.display;
      paginationCurrentPage = 1
      const products = await applyFilters();
      insertProducts(products);
    });
  });
};

const insertProducts = (products) => {
  const productsWrapper = document.querySelector("#products-wrapper");
  productsWrapper.innerHTML = "";
  products.forEach((product) => {
    if (displayMode == "col") {
      productsWrapper.insertAdjacentHTML(
        "beforeend",
        `
          <product-box-2
            customClass="col-span-12 xs:col-span-6 md:col-span-4 lg:col-span-3 2xl:col-span-2"
            id="${product.id}"
            src="${product.src}"
            title="${product.title}"
            stars="${product.stars}"
            counts="${product.counts}"
            unit="${product.unit}"
            amount="${product.amount}"
            price="${product.percentedPrice}"
            categoryلبنیات"
          ></product-box-2>
        `
      );
    } else {
      productsWrapper.insertAdjacentHTML(
        "beforeend",
        `
          <product-row-box
            customClass="col-span-12"
            id="${product.id}"
            src="${product.src}"
            title="${product.title}"
            description="${product.description}"
            stars="${product.stars}"
            counts="${product.counts}"
            unit="${product.unit}"
            amount="${product.amount}"
            mainPrice="${product.mainPrice}"
            percentedPrice="${product.percentedPrice}"
          ></product-row-box>
        `
      );
    }
  });
};

const renderBreadcrumb = () => {
  const breadcrumbList = [
    { href: "./products.html?cat=fruits", value: "میوه ها" },
  ];
  handleBreadcrumb("میوه ها", breadcrumbList);
};

const renderProducts = async () => {
  const products = await applyFilters();
  insertProducts(products);
};


const paginationBtnClickHandler = async clickedPage => {
  paginationCurrentPage = clickedPage;
  const products = await applyFilters(lastProduct)
  insertProducts(products);
  scrollTo(0, 0)
}

const range = () => {
  return {
    minprice: 0,
    maxprice: 1_000_000,
    min: 0,
    max: 1_000_000,
    minthumb: 0,
    maxthumb: 0,

    mintrigger() {
      this.minprice = Math.min(this.minprice, this.maxprice - 500);
      this.minthumb =
        ((this.minprice - this.min) / (this.max - this.min)) * 100;
    },

    maxtrigger() {
      this.maxprice = Math.max(this.maxprice, this.minprice + 500);
      this.maxthumb =
        100 - ((this.maxprice - this.min) / (this.max - this.min)) * 100;
    },
  };
};

export {
  renderBreadcrumb,
  renderFiltering,
  renderDisplayMood,
  renderProducts,
  range,
  applyFilstersClickHandler,
  paginationBtnClickHandler
};
