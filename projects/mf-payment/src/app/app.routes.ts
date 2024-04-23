import { Routes } from '@angular/router';
import { PaymentComponent } from './payment/payment.component';

export const routes: Routes = [
  { path: '', pathMatch: 'full', redirectTo: 'payment' },
  {
    path: 'payment',
    component: PaymentComponent,
  },
];
