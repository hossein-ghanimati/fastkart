import { handleBreadcrumb } from "../../funcs/utils.js";

const renderBreadcrumb  = () => {
  const title = 'خرید موفق'
  const list = [
    {href: "./cart.html", value: "سبدخرید"},
    {href: "./checkout.html", value: "پرداخت نهایی"},
    {href: "./success-purchase.html", value: "خرید موفق"},
  ]

  handleBreadcrumb(title, list)
}

export {
  renderBreadcrumb
}