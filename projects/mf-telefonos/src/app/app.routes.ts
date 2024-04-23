import { Routes } from '@angular/router';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'telefonos' },
  {
    path: 'telefonos',
    loadChildren: () =>
      import('./telefonos/telefonos.module').then((m) => m.TelefonosModule),
  },
];
