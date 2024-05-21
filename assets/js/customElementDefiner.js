import { CatBox } from "../components/cat-box/cat-box.js";
import { MainBar } from "../components/header/main-bar/main-bar.js";
import { MobileMenu } from "../components/header/mobile-menu/mobile-menu.js";
import { NavBar } from "../components/header/nav-bar/nav-bar.js";
import { TopBar } from "../components/header/top-bar/top-bar.js";
import { Landing } from "../components/landing/landing.js";
import { BestSellingModal } from "../components/modals/best-selling-modal/best-selling-modal.js";
import { CitiesModal } from "../components/modals/cities-modal/cities-modal.js";
import { SectionHeader } from "../components/section-header/section-header.js";
import { CategoriesSection } from "../components/sections/categories-section/categories-section.js";
import { SvgPack } from "../components/svg-pack/svg-pack.js";

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