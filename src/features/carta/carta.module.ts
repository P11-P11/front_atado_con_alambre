import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';
import { CartaComponent } from './components/carta/carta.component';
import { CartaRoutingModule } from './carta-routing.module';
import { SharedModule } from '../../shared/shared.module';

@NgModule({
  declarations: [CartaComponent],
  imports: [CommonModule, SharedModule, CartaRoutingModule],
})
export class CartaModule {}
