import { CatBox } from "../components/main/boxes/cat-box.js";
import { MainBar } from "../components/share/header/main-bar.js";
import { MobileMenu } from "../components/share/header/mobile-menu.js";
import { NavBar } from "../components/share/header/nav-bar.js";
import { TopBar } from "../components/share/header/top-bar.js";
import { BestSellingModal } from "../components/share/modals/best-selling-modal.js";
import { CitiesModal } from "../components/share/modals/cities-modal.js";
import { SectionHeader } from "../components/main/section-header.js";
import { SvgPack } from "../components/share/svg-pack.js";
import { FooterTop } from "../components/share/footer/footer-top.js";
import { FooterMain } from "../components/share/footer/footer-main.js";
import { FooterBottom } from "../components/share/footer/footer-bottom.js";
import { MobileNav } from "../components/share/header/mobile-nav.js";
import { mobileCatMenu } from "../components/share/header/mobile-cat-menu.js";

customElements.define('svg-pack', SvgPack)
customElements.define('cities-modal', CitiesModal)
customElements.define('best-selling-modal', BestSellingModal)
customElements.define('mobile-menu', MobileMenu)
customElements.define('mobile-nav', MobileNav)
customElements.define('top-bar', TopBar)
customElements.define('nav-bar', NavBar)
customElements.define('main-bar', MainBar)
customElements.define('section-header', SectionHeader)
customElements.define('footer-top', FooterTop)
customElements.define('footer-main', FooterMain)
customElements.define('footer-bottom', FooterBottom)
customElements.define('mobile-cat-menu', mobileCatMenu)