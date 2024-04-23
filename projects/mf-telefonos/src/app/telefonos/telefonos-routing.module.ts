import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListaTelefonosComponent } from './lista-telefonos/lista-telefonos.component';

const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'lista/telefonos' },
  {
    path: 'lista/telefonos',
    component: ListaTelefonosComponent,
  },
];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class TelefonosRoutingModule {}
