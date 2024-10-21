import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { AppComponent } from './app.component';
import { AppRoutingModule } from './app-routing.module';


@NgModule({
  declarations: [
    AppComponent, // Other components you have created
  ],
  imports: [
    BrowserModule,
    HttpClientModule, // Allows making HTTP requests
    AppRoutingModule, // Handles routing within your app
  ],
  providers: [],
  bootstrap: [AppComponent], // Main component to bootstrap
})
export class AppModule {}


