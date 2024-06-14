import { handleBredcrumb } from "../../funcs/utils.js"

const renderBreadcrumb = () => {
  handleBredcrumb("جزئیات محصول", [
    {href: "./products.html?cat=cakes", value: 'کیک ها'},
    {href: "./productpreview.html?id=12sd234sd22q34-01", value: 'کیک شکلات خامه ای سفید'}
  ])
}

export{
  renderBreadcrumb
}