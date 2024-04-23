import { Routes } from '@angular/router';

export const routes: Routes = [
  {
    path: 'productos',
    loadChildren: () =>
      import('mfProductos/ProductosModule').then((m) => m.ProductosModule),
  },
  {
    path: 'telefonos',
    loadChildren: () =>
      import('mfTelefonos/TelefonosModule').then((m) => m.TelefonosModule),
  },
  {
    path: 'payment',
    loadComponent: () =>
      import('mfPayment/PaymentComponent').then((m) => m.PaymentComponent),
  },
];
