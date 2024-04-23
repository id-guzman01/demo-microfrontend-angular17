import { Component, OnInit } from '@angular/core';
import { telefono } from './interface/telefono.interface';
import { ListaTelefonosService } from './service/lista-telefonos.service';
import { CommonsLibService } from '@commons-lib';

@Component({
  selector: 'app-lista-telefonos',
  templateUrl: './lista-telefonos.component.html',
  styleUrl: './lista-telefonos.component.scss',
})
export class ListaTelefonosComponent implements OnInit {
  productos: telefono[] = [];

  constructor(
    private listaTelefonosService: ListaTelefonosService,
    private _commonsLibService: CommonsLibService
  ) {}

  ngOnInit(): void {
    this.listaTelefonosService.getTelefonos().subscribe((res: any) => {
      let contador = res;
      for (let i of contador.products) {
        // Inicializamos la propiedad quantity en 0
        i.cantidad = 0;
        this.productos.push(i);
      }
    });
  }

  increaseQuantity(product: telefono) {
    product.cantidad++;
  }

  decreaseQuantity(product: telefono) {
    if (product.cantidad > 1) {
      product.cantidad--;
    }
  }

  addToCart(telefono: telefono): void {
    if (telefono.cantidad >= 1) {
      this._commonsLibService.addCart({
        id: telefono.id,
        title: telefono.title,
        cantidad: telefono.cantidad,
        img: telefono.thumbnail,
        price: telefono.price,
      });
      alert('Producto añadido');
    } else {
      alert('Tiene que seleccionar al menos un producto');
    }
  }
}
