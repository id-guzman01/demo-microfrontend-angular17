import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { TelefonosRoutingModule } from './telefonos-routing.module';
import { ListaTelefonosComponent } from './lista-telefonos/lista-telefonos.component';

@NgModule({
  declarations: [ListaTelefonosComponent],
  imports: [CommonModule, TelefonosRoutingModule],
  exports: [ListaTelefonosComponent],
})
export class TelefonosModule {}
