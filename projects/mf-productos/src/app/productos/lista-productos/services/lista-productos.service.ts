import { Injectable } from '@angular/core';
import { productos } from '../interface/productos.interface';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ListaProductosService {
  constructor(private http: HttpClient) {}

  getProductos(): Observable<productos> {
    return this.http.get<productos>('https://fakestoreapi.com/products');
  }
}
