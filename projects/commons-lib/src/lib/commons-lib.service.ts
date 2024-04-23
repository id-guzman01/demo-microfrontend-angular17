import { Injectable } from '@angular/core';
import { productosCart } from './models/products-cart.interface';

@Injectable({
  providedIn: 'root',
})
export class CommonsLibService {
  private productosCart: productosCart[] = [];

  constructor() {}

  public chargueData(productos: productosCart): void {
    this.productosCart = this.productosCart.concat(productos);
  }

  public addCart(producto: productosCart): void {
    if (this.productosCart.length == 0) {
      this.pushCart(producto);
    } else {
      if (
        !this.productosCart.find((product) => product.title == producto.title)
      ) {
        this.pushCart(producto);
      } else {
        let actual = this.productosCart.find(
          (product) => product.title === producto.title
        );
        if (actual) {
          actual.cantidad = producto.cantidad;
          localStorage.setItem('cart', JSON.stringify(this.productosCart));
        }
      }
    }
  }

  private pushCart(producto: productosCart): void {
    this.productosCart.push(producto);
    localStorage.setItem('cart', JSON.stringify(this.productosCart));
  }

  public calcPrice(): number {
    return this.productosCart.reduce(
      (total, item) => total + item.price * item.cantidad,
      0
    );
  }
}
