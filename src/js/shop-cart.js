import '../styles.css';
import { products } from './products';
import { shopCart } from '../index';

const containerProducts = document.querySelector('.container__products');
const cartShop = document.querySelector('.cart-shop');

const openCart = document.querySelector('.header___icons-itemcart');
const closeCart = document.querySelector('.container-cross');

const containerProductsCart = document.querySelector('.container-products');

export const countProductsCartElement = document.querySelector('#count-products-cart');


export const fillProducts = ( products ) => {
  products.forEach( ( { id, name,  price, trademark, img } ) => {
    const item = document.createElement('li');
    item.setAttribute('data-id', id);
    item.setAttribute('class', 'container__products-item');
    item.innerHTML = `
      <figure>
        <img src="${ img }" alt="product">
      </figure>
      <div class="items-description">
        <p class="trademark">${ trademark }</p>
        <p>${ name }</p>
        <p class="price">${ price }</p>
      </div>
      <button class="button-cart">Add to Car</button>
      <button class="button-fav">Add to Fav</button>
    `;
    
    containerProducts.append(item);
  });
}

export const fillProductsCart = ( product ) => {
  const item = document.createElement('li');
  item.setAttribute('data-id', product.id);
  item.setAttribute('class', 'container-product');
  item.innerHTML = `
    <figure class="product-img">
      <img src="${ product.img }" alt="product">
    </figure>
    <div class="product-description">
      <p class="trademark">${ product.trademark }</p>
      <p>${ product.name }</p>
      <p class="price">${ product.price }</p>
      <button class="btn-remove-cart">Remove from cart</button>
    </div>
  `;

  containerProductsCart.append(item);
}

containerProducts.addEventListener('click', (event) => {
  const htmlElement = event.target;
  const btn = htmlElement.getAttribute('class');
  const containerProduct = event.target.parentElement;
  const idProduct = containerProduct.getAttribute('data-id');

  
  if(btn == 'button-cart') {
    const product = products.find(product => product.id == idProduct);
    shopCart.addToCart( product );
    fillProductsCart( product );

    countProductsCartElement.innerText = shopCart.products.length;
  }
});

openCart.addEventListener('click', () => {
  const classCartShot = cartShop.getAttribute('class');
  if(!classCartShot.includes('cart-shop-animation-open')) {
    cartShop.classList.remove('cart-shop-animation-close');
    cartShop.classList.add('cart-shop-animation-open');
  }
});

closeCart.addEventListener('click', () => {
  const classCartShop = cartShop.getAttribute('class');
  if(!classCartShop.includes('cart-shop-animation-close')) {
    cartShop.classList.remove('cart-shop-animation-open');
    cartShop.classList.add('cart-shop-animation-close');
  }
});

containerProductsCart.addEventListener('click', (event) => {
  const btnRemoveFromCart = event.target.localName;
  const containerProduct = event.target.parentElement.parentElement;
  const productCartId = containerProduct.getAttribute('data-id');
  if(btnRemoveFromCart === 'button') {
    containerProductsCart.removeChild(containerProduct);
    shopCart.deleteFromCart( productCartId );

    countProductsCartElement.innerText = shopCart.products.length;
  }
});





