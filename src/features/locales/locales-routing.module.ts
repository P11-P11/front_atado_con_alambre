import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { LocalesComponent } from './components/locales/locales.component';

const routes: Routes = [{ path: '', component: LocalesComponent }];

@NgModule({
  imports: [RouterModule.forChild(routes)],
  exports: [RouterModule],
})
export class LocalesRoutingModule {}
