import { handleBreadcrumb } from "../../funcs/utils.js";
const renderBreadcrumb = () => {
  const breadcrumbList = [{href: './products.html?cat=fruits', value: "میوه ها"}]
  handleBreadcrumb("میوه ها", breadcrumbList);
}

export{
  renderBreadcrumb
}