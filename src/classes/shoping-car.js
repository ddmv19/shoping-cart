export class ShopingCar {
  constructor() {
    this.loadLocalStorage();
  }

  addToCart( product ) {
    this.products.push( product );
    this.saveLocalStorage();
  }

  deleteFromCart( id ) {
    this.products = this.products.filter( product => product.id != id);
    this.saveLocalStorage();
  }

  saveLocalStorage() {
    localStorage.setItem('cart', JSON.stringify(this.products));
  }

  loadLocalStorage() {
    this.products = localStorage.getItem('cart') ?
                    JSON.parse(localStorage.getItem('cart')) :
                    [];
  }
}