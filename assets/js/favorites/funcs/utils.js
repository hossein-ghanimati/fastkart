import productsAPI from "../../../../none.js";
import { handlePagination } from "../../funcs/utils.js";

let mainProducts = null;
let paginationCurrentPage = 1

const getProducts = () => {
  mainProducts = productsAPI().splice(0, 12)
  return mainProducts
}


window.paginationBtnClickHandler = async clickedPage => {
  paginationCurrentPage = clickedPage;
  const paginatedProducts = paginateProducts(mainProducts)
  insertProducts(paginatedProducts);
  scrollTo(0, 0)
}

const paginateProducts = products => {
  const paginatedProducts = handlePagination(
      [...products], 
      window.screen.width > 1280 ? 12 : 8,       
      paginationCurrentPage
    )
  return paginatedProducts
}

const generateProductTemplate = product => `
<favorite-box
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
></favorite-box>
`

const insertProducts = products => {
  const productsWrapper = document.querySelector('#products-wrapper')
  productsWrapper.innerHTML = ''

  products.forEach(product => {
    productsWrapper.insertAdjacentHTML('beforeend', generateProductTemplate(product))
  });
}

export {
  insertProducts,
  getProducts,
  paginateProducts
}