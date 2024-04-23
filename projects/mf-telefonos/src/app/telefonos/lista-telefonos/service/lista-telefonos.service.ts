import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { telefono } from '../interface/telefono.interface';
import { Observable } from 'rxjs/internal/Observable';

@Injectable({
  providedIn: 'root',
})
export class ListaTelefonosService {
  constructor(private http: HttpClient) {}

  getTelefonos(): Observable<telefono> {
    return this.http.get<telefono>('https://dummyjson.com/products');
  }
}
