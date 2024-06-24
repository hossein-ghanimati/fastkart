import { renderBreadcrumb, renderDisplayMood, renderFiltering, renserProducts, range, applyFilstersClickHandler } from "./funcs/shared.js";


renderFiltering();
renderDisplayMood()
await renserProducts()
renderBreadcrumb()

window.range = range
window.applyFilstersClickHandler = applyFilstersClickHandler