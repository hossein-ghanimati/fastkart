import { handleBreadcrumb } from "../../funcs/utils.js";
import { getProducts, insertProducts, paginateProducts } from "./utils.js";

const renderBreadcrumb = () => {
  const title = 'لیست علاقه مندی ها'
  const list = [{
    href: './favorites.html', value: title
  }]

  handleBreadcrumb(title, list)
}





const renderProducts = () => {
  const products = getProducts()
  const paginatedProducts = paginateProducts(products)
  insertProducts(paginatedProducts)
}

export{
  renderBreadcrumb,
  renderProducts,
}