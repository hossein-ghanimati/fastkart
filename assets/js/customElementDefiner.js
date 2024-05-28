import { CatBox } from "../components/boxes/cat-box.js";
import { MainBar } from "../components/header/main-bar.js";
import { MobileMenu } from "../components/header/mobile-menu.js";
import { NavBar } from "../components/header/nav-bar.js";
import { TopBar } from "../components/header/top-bar.js";
import { Landing } from "../components/landing.js";
import { BestSellingModal } from "../components/modals/best-selling-modal.js";
import { CitiesModal } from "../components/modals/cities-modal.js";
import { ProductBox } from "../components/boxes/product-box.js";
import { SectionHeader } from "../components/section-header.js";
import { CategoriesSection } from "../components/sections/categories-section.js";
import { FriutSection } from "../components/sections/fruit-section.js";
import { OfferSection } from "../components/sections/offer-section.js";
import { SvgPack } from "../components/svg-pack.js";
import { OfferTimer } from "../components/sections/offer-timer.js";
import { dairySection } from "../components/sections/dairy-section.js";

customElements.define('svg-pack', SvgPack)
customElements.define('cities-modal', CitiesModal)
customElements.define('best-selling-modal', BestSellingModal)
customElements.define('mobile-menu', MobileMenu)
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