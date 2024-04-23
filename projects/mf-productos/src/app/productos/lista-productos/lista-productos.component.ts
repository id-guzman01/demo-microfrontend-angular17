import { Component, OnInit } from '@angular/core';
import { productos } from './interface/productos.interface';
import { ListaProductosService } from './services/lista-productos.service';
import { CommonsLibService } from '@commons-lib';
import { productosCart } from '@commons-lib';

@Component({
  selector: 'app-lista-productos',
  templateUrl: './lista-productos.component.html',
  styleUrl: './lista-productos.component.scss',
})
export class ListaProductosComponent implements OnInit {
  productos: productos[] = [];
  cart: productosCart[] = [];

  constructor(
    private listaProductosService: ListaProductosService,
    private _commonsLibService: CommonsLibService
  ) {}

  ngOnInit(): void {
    this.listaProductosService.getProductos().subscribe((data: any) => {
      // Obtener datos del producto desde la API
      this.productos = data.map((producto: any) => {
        return {
          id: producto.id,
          title: producto.title,
          price: producto.price,
          description: producto.description,
          category: producto.category,
          image: producto.image,
          rating: producto.rating,
          contador: 0, // Inicializar el contador en 0
        };
      });
    });
  }

  aumentarContador(producto: productos) {
    producto.contador++;
  }

  disminuirContador(producto: productos) {
    if (producto.contador > 0) {
      producto.contador--;
    }
  }

  addToCart(producto: productos): void {
    if (producto.contador >= 1) {
      this._commonsLibService.addCart({
        id: producto.id,
        title: producto.title,
        cantidad: producto.contador,
        img: producto.image,
        price: producto.price,
      });
      alert('Producto añadido');
    } else {
      alert('Tiene que seleccionar al menos un producto');
    }
  }
}
