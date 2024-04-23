import { Routes } from '@angular/router';

import { ListaProductosComponent } from './productos/lista-productos/lista-productos.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'productos' },
  {
    path: 'productos',
    loadChildren: () =>
      import('./productos/productos.module').then((m) => m.ProductosModule),
  },
];
