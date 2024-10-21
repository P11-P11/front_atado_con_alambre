import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { HomeComponent } from './pages/home/home.component';
import { LocalesComponent } from './pages/locales/locales.component';
import { CartaComponent } from './pages/carta/carta.component';

export const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'locales', component: LocalesComponent },
  { path: 'cartas/:id', component: CartaComponent },
  { path: '**', redirectTo: '', pathMatch: 'full' },
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule],
})
export class AppRoutingModule {}
