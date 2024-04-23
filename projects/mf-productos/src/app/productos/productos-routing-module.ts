import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { ListaProductosComponent } from './lista-productos/lista-productos.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'lista/productos' },
  {
    path: 'lista/productos',
    component: ListaProductosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)], // Use forChild for sub-routes
  exports: [RouterModule],
})
export class ProductosRoutingModule {}
