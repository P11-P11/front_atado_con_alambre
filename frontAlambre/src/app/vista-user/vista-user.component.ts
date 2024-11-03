import { Component, ViewChild, Injectable } from '@angular/core';
import { MapaRestaurantsComponent } from '../mapa-restaurants/mapa-restaurants.component';
import { ItemRestaurantComponent } from '../item-restaurant/item-restaurant.component';
import { RestauranteInput } from '../models/models';
import { exampleRestaurantes } from '../models/examples';
import { Environment } from '../env/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'vista-user',
  standalone: true,
  imports: [MapaRestaurantsComponent, ItemRestaurantComponent],
  templateUrl: './vista-user.component.html',
  styleUrl: './vista-user.component.css'
})
@Injectable({providedIn: 'root'})
export class VistaUserComponent {

  constructor(private http: HttpClient) { }

  restaurantes: RestauranteInput[] = [];
  
  restauranteSeleccionado?: RestauranteInput;

  seleccionarRestaurante(restaurant: RestauranteInput): void {
    this.restauranteSeleccionado = restaurant;
  }

  buscarRestaurantes(): void {
    if(Environment.conectadoApi) {

      this.http.get<RestauranteInput[]>(Environment.apiUrl + '/restaurants').subscribe(data =>
        console.log(data)
      );
    } else {
      this.restaurantes = exampleRestaurantes;
    }  
  }

  @ViewChild(MapaRestaurantsComponent) mapaRestaurantsComponent!: MapaRestaurantsComponent;

  centrar(): void {
    this.mapaRestaurantsComponent.centrarEnUbicacionUsuario();
  }
}
