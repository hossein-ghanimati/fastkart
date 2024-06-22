import CommentBox from "../../components/productPreview/boxes/comment-box.js";
import ProductMainDetails from "../../components/productPreview/product-main-details.js";
import ProductOtherDetails from "../../components/productPreview/product-other-details.js";
import SideBar from "../../components/productPreview/side-bar.js";
import { LabelProduct } from "../../components/main/boxes/label-product.js"
import RelatedProducts from "../../components/productPreview/related-products.js";
import BasketBottomActions from "../../components/productPreview/basket-bottom-actions.js";
import RegisterCommentModal from "../../components/share/modals/register-comment-modal.js";

customElements.define('product-main-details', ProductMainDetails)
customElements.define('comment-box', CommentBox)
customElements.define('product-other-details', ProductOtherDetails)
customElements.define('label-product', LabelProduct)
customElements.define('side-bar', SideBar)
customElements.define('related-products', RelatedProducts)
customElements.define('basket-bottom-actions', BasketBottomActions)
customElements.define('register-comment-modal', RegisterCommentModal)