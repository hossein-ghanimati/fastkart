const sortProductsWithLast = products => products.sort((a, b) => {
  // const aCreatedTime = new Date(a.createdAt)
  // const bCreatedTime = new Date(b.createdAt)
  return b.createdAt - a.createdAt
})

const sortProductsWithFirst = products => products.sort((a, b) => {
  // const aCreatedTime = new Date(a.createdAt)
  // const bCreatedTime = new Date(b.createdAt)
  return a.createdAt - b.createdAt
})

const sortProductsWithStars = products => products.sort((a, b) => b.stars - a.stars)

const sortProductsWithExpensive = products => products.sort((a, b) => b.mainPrice - a.mainPrice)

const sortProductsWithLowset = products => products.sort((a, b) => a.mainPrice - b.mainPrice)


const sortProducts = (products, option) => {
  let sortedProducts = null;
  switch (option) {
    case "last":
      sortedProducts = sortProductsWithLast(products)
      break;
    case "first":
      sortedProducts = sortProductsWithFirst(products)
      break;
    case "stars":
      sortedProducts = sortProductsWithStars(products)
      break;
    case "expensive":
      sortedProducts = sortProductsWithExpensive(products)
      break;
    case "lowest":
      sortedProducts = sortProductsWithLowset(products)
      break;
  
    default:
      break;
  }

  return sortedProducts
}

export {
  sortProducts
}