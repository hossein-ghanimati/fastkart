import { handleBreadcrumb } from "../../funcs/utils.js";

let mainProducts = [];
let lastSelectedCats = [];
let selectedCats = [];
let catChanged = true;
let selectedMinPrice = 0;
let selectedMaxPrice = 1_000_000;
let sortOption = "last";
let displayMode = 'row';

const filterByCategory = async () => {
  console.log("Selected Cats =>", selectedCats);


  catChanged = false
}

const filterByMinPrice = () => {
  console.log("Selected Min Price =>", selectedMinPrice);
}

const filterByMaxPrice = () => {
  console.log("Selected Max Price =>", selectedMaxPrice);
}

const sortProducts = products => {
  console.log("Sort Products By =>", sortOption);
}

const applyFilters = async () => {
  console.clear()
  let products = catChanged ? await filterByCategory() : mainProducts;
  products = filterByMinPrice(products)
  products = filterByMaxPrice(products)
  products = sortProducts(products)
  return products
}


const renderCategoryFiltering = () => {
  const categorySelectors = document.querySelectorAll('.cat-selector');
  categorySelectors.forEach(catSelector => {
    catSelector.addEventListener('change', async () => {
      selectedCats = [];

      categorySelectors.forEach(selector => {
        if (selector.checked) {
          selectedCats.push(selector.dataset.cat)
        }
      })
    })
  });
}


const renderSorting = () => {
  const sortOptionSelector = document.querySelector('#sort-by')
  sortOptionSelector.addEventListener('change', () => {
    sortOption = sortOptionSelector.value
    const products = applyFilters()
    insertProducts(products);
  })
}

const applyFilstersClickHandler = () => {
  const minPriceInput = document.querySelector('.min-price-input')
  const maxPriceInput = document.querySelector('.max-price-input')
  const areCatsChanged = !(JSON.stringify(selectedCats) == JSON.stringify(lastSelectedCats))

  catChanged = areCatsChanged ? true : false

  lastSelectedCats = [...selectedCats]

  selectedMinPrice = +minPriceInput.value;
  selectedMaxPrice = +maxPriceInput.value;

  const products = applyFilters(...mainProducts)
  insertProducts(products)

}

const renderFiltering = () => {
  renderCategoryFiltering()
  renderSorting()
}

const renderDisplayMood = () => {
  const displayModeInputs = document.querySelectorAll('.display-mode__input')
  displayModeInputs.forEach(modeInput => {
    modeInput.addEventListener('change', () => {
      displayMode = modeInput.dataset.display;
      const products = applyFilters()
      insertProducts(products)
    })
  })
}

const insertProducts = products => {
  console.log("Inserting Mode...", displayMode);
}

const renderBreadcrumb = () => {
  const breadcrumbList = [{href: './products.html?cat=fruits', value: "میوه ها"}]
  handleBreadcrumb("میوه ها", breadcrumbList);
}

const renserProducts = async () => {
  const products = await applyFilters()
  insertProducts(products)
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
      this.minprice = Math.min(this.minprice, this.maxprice - 500)
      this.minthumb = ((this.minprice - this.min) / (this.max - this.min)) * 100
    },
     
    maxtrigger() {
      this.maxprice = Math.max(this.maxprice, this.minprice + 500)
      this.maxthumb = 100 - (((this.maxprice - this.min) / (this.max - this.min)) * 100)
    }, 
  }
}

export{
  renderBreadcrumb,
  renderFiltering,
  renderDisplayMood,
  renserProducts,
  range,
  applyFilstersClickHandler
}