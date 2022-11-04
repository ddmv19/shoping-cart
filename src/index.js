import './styles.css';
import { products } from './js/products';
import { ShopingCar } from './classes/shoping-car';
import { fillProducts, fillProductsCart, countProductsCartElement } from './js/shop-cart';

fillProducts(products);

export const shopCart = new ShopingCar();

shopCart.products.forEach( product => fillProductsCart( product ));

countProductsCartElement.innerText = shopCart.products.length;
