import { handleBreadcrumb } from "../../funcs/utils.js";

const renderBreadcrumb = () => {
  const title = "سبد خرید"
  const list = [{
    href: "./cart.html", value: title
  }]

  handleBreadcrumb(title, list)
}

export{
  renderBreadcrumb
}