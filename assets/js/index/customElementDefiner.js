import { BlogBox } from "../../components/main/boxes/blog-box.js"
import { CatBox } from "../../components/main/boxes/cat-box.js"
import { CatPicture } from "../../components/main/boxes/cat-picture.js"
import { LabelProduct } from "../../components/main/boxes/label-product.js"
import { ProductBox } from "../../components/main/boxes/product-box.js"
import { Landing } from "../../components/main/landing.js"
import { BlogNews } from "../../components/main/sections/blog-news.js"
import { CategoriesSection } from "../../components/main/sections/categories-section.js"
import { CatsPicture } from "../../components/main/sections/cats-picture.js"
import { dairySection } from "../../components/main/sections/dairy-section.js"
import { FriutSection } from "../../components/main/sections/fruit-section.js"
import { LabelProducts } from "../../components/main/sections/label-products.js"
import { NewsLetter } from "../../components/main/sections/news-letter.js"
import { OfferSection } from "../../components/main/sections/offer-section.js"
import { OfferTimer } from "../../components/main/sections/offer-timer.js"

customElements.define('site-landing', Landing)
customElements.define('cat-box', CatBox)
customElements.define('categories-section', CategoriesSection)
customElements.define('offer-section', OfferSection)
customElements.define('product-box', ProductBox)
customElements.define('fruit-section', FriutSection)
customElements.define('offer-timer', OfferTimer)
customElements.define('dairy-section', dairySection)
customElements.define('cat-picture', CatPicture)
customElements.define('cats-picture', CatsPicture)
customElements.define('label-product', LabelProduct)
customElements.define('label-products', LabelProducts)
customElements.define('blog-box', BlogBox)
customElements.define('blog-news', BlogNews)
customElements.define('news-letter', NewsLetter)