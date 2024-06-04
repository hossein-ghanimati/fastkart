import { CatBox } from "../components/main/boxes/cat-box.js";
import { MainBar } from "../components/share/header/main-bar.js";
import { MobileMenu } from "../components/share/header/mobile-menu.js";
import { NavBar } from "../components/share/header/nav-bar.js";
import { TopBar } from "../components/share/header/top-bar.js";
import { Landing } from "../components/main/landing.js";
import { BestSellingModal } from "../components/share/modals/best-selling-modal.js";
import { CitiesModal } from "../components/share/modals/cities-modal.js";
import { ProductBox } from "../components/main/boxes/product-box.js";
import { SectionHeader } from "../components/main/section-header.js";
import { CategoriesSection } from "../components/main/sections/categories-section.js";
import { FriutSection } from "../components/main/sections/fruit-section.js";
import { OfferSection } from "../components/main/sections/offer-section.js";
import { SvgPack } from "../components/share/svg-pack.js";
import { OfferTimer } from "../components/main/sections/offer-timer.js";
import { dairySection } from "../components/main/sections/dairy-section.js";
import { CatPicture } from "../components/main/boxes/cat-picture.js";
import { CatsPicture } from "../components/main/sections/cats-picture.js";
import { LabelProduct } from "../components/main/boxes/label-product.js";
import { LabelProducts } from "../components/main/sections/label-products.js";
import { BlogBox } from "../components/main/boxes/blog-box.js";
import { BlogNews } from "../components/main/sections/blog-news.js";
import { NewsLetter } from "../components/main/sections/news-letter.js";
import { FooterTop } from "../components/share/footer/footer-top.js";
import { FooterMain } from "../components/share/footer/footer-main.js";
import { FooterBottom } from "../components/share/footer/footer-bottom.js";
import { MobileNav } from "../components/share/header/mobile-nav.js";

customElements.define('svg-pack', SvgPack)
customElements.define('cities-modal', CitiesModal)
customElements.define('best-selling-modal', BestSellingModal)
customElements.define('mobile-menu', MobileMenu)
customElements.define('mobile-nav', MobileNav)
customElements.define('top-bar', TopBar)
customElements.define('nav-bar', NavBar)
customElements.define('main-bar', MainBar)
customElements.define('site-landing', Landing)
customElements.define('section-header', SectionHeader)
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
customElements.define('footer-top', FooterTop)
customElements.define('footer-main', FooterMain)
customElements.define('footer-bottom', FooterBottom)