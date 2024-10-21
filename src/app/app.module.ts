import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module'; // Ensure this path is correct
import { HomeComponent } from './pages/home/home.component';
import { LocalesComponent } from './pages/locales/locales.component';
import { CartaComponent } from './pages/carta/carta.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    LocalesComponent,
    CartaComponent,
  ],
  imports: [
    BrowserModule,
    HttpClientModule,
    AppRoutingModule,
  ],
  providers: [],
  bootstrap: [AppComponent],
})
export class AppModule {}
