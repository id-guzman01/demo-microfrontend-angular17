import { Component, OnInit } from '@angular/core';
import { productosCart } from '@commons-lib';
import { CommonsLibService } from '@commons-lib';

@Component({
  selector: 'app-payment',
  standalone: true,
  imports: [],
  templateUrl: './payment.component.html',
  styleUrl: './payment.component.scss',
})
export class PaymentComponent implements OnInit {
  productosCart: productosCart[] = [];
  total: number = 0;

  constructor(private _commonsLibService: CommonsLibService) {}

  ngOnInit(): void {
    const arregloLocalStorage = localStorage.getItem('cart');
    if (arregloLocalStorage) {
      this.productosCart = JSON.parse(arregloLocalStorage);
      this._commonsLibService.chargueData(JSON.parse(arregloLocalStorage));
    }
    this.total = this._commonsLibService.calcPrice();
  }
}
