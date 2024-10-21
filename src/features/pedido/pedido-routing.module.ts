import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { SeguimientoPedidoComponent } from './components/seguimiento-pedido/seguimiento-pedido.component';

const routes: Routes = [{ path: 'seguimiento', component: SeguimientoPedidoComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class PedidoRoutingModule {}
