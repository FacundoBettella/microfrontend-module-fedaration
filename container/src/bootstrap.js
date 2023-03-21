// If the webpack cannot find this dependency in nodule_modules it looks on webpack config at remote section and search a "products" key.
import { mount as productMount } from "productsApp/ProductsIndex";
import { mount as cartMount } from "cartApp/CartIndex";

productMount(document.querySelector("#dev-products"));
cartMount(document.querySelector("#dev-cart"));

console.log("Container");
