import { mount as mountProducts } from "products/Index"
import { mount as mountCart } from "cart/Index"

mountProducts(document.querySelector("#app-products"))
mountCart(document.querySelector("#app-cart"))
