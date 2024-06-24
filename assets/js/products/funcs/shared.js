import { handleBreadcrumb } from "../../funcs/utils.js";

let mainProducts = [];
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

      catChanged = true;      
      const products = await applyFilters()
      insertProducts(products);
    })
  });
}


const renderMinPriceFiltering = () => {
  const minPriceSelectors = document.querySelectorAll('.min-price-selector');
  minPriceSelectors.forEach(selector => {
    selector.addEventListener('change', () => {
      const nowSelectedValue = +selector.dataset.price;

      if (selectedMaxPrice <= nowSelectedValue) {
        minPriceSelectors.forEach(sl => {
          sl.checked = false;          
          selectedMinPrice = 0
        })        
      }else{
        selectedMinPrice = nowSelectedValue;
      }
      const products = applyFilters();
      insertProducts(products);
    })
  })
}


const renderMaxFiltering = () => {
  const maxPriceSelectors = document.querySelectorAll('.max-price-selector');
  maxPriceSelectors.forEach(selector => {
    selector.addEventListener('change', () => {
      const nowSelectedValue = +selector.dataset.price;

      if (nowSelectedValue<= selectedMinPrice) {
        maxPriceSelectors.forEach(sl => {
          sl.checked = false;          
          selectedMaxPrice = 1_000_000
        })        
      }else{
        selectedMaxPrice = nowSelectedValue
      }
      const products = applyFilters();
      insertProducts(products);
    })
  })
}

const renderSorting = () => {
  const sortOptionSelector = document.querySelector('#sort-by')
  sortOptionSelector.addEventListener('change', () => {
    sortOption = sortOptionSelector.value
    const products = applyFilters()
    insertProducts(products);
  })
}

const renderFiltering = () => {
  renderCategoryFiltering()
  renderMinPriceFiltering()
  renderMaxFiltering()
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

export{
  renderBreadcrumb,
  renderFiltering,
  renderDisplayMood,
  renserProducts
}