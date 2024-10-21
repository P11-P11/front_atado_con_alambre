import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { SeguimientoPedidoComponent } from './components/seguimiento-pedido/seguimiento-pedido.component';
import { PedidoRoutingModule } from './pedido-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [SeguimientoPedidoComponent],
  imports: [CommonModule, SharedModule, PedidoRoutingModule],
})
export class PedidoModule {}
