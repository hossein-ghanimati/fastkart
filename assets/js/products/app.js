import { renderBreadcrumb, renderDisplayMood, renderFiltering, renderProducts, range, applyFilstersClickHandler, paginationBtnClickHandler } from "./funcs/shared.js";


renderFiltering();
renderDisplayMood()
await renderProducts()
renderBreadcrumb()

window.range = range
window.applyFilstersClickHandler = applyFilstersClickHandler
window.paginationBtnClickHandler = paginationBtnClickHandler