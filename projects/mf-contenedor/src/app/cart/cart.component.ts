import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { productosCart } from '@commons-lib';

@Component({
  selector: 'app-cart',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './cart.component.html',
  styleUrl: './cart.component.scss',
})
export class CartComponent implements OnInit {
  productosCart: productosCart[] = [];

  constructor() {}

  ngOnInit(): void {}

  showCart: boolean = false;

  toggleCart() {
    this.showCart = !this.showCart;
    const arregloLocalStorage = localStorage.getItem('cart');
    if (arregloLocalStorage) {
      this.productosCart = JSON.parse(arregloLocalStorage);
    }
  }
}
