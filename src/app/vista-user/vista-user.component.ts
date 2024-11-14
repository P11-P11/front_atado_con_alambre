import { Component, ViewChild, Injectable } from '@angular/core';
import { MapaRestaurantsComponent } from '../mapa-restaurants/mapa-restaurants.component';
import { ItemRestaurantComponent } from '../item-restaurant/item-restaurant.component';
import { Restaurante, RestauranteInput } from '../models/models';
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

  restaurantes: Restaurante[] = [];
  
  restauranteSeleccionado?: Restaurante;

  seleccionarRestaurante(restaurant: Restaurante): void {
    this.restauranteSeleccionado = restaurant;
  }

  buscarRestaurantes(): void {
   
    const url = `${Environment.apiUrl}/restaurants`;
    this.http.get<Restaurante[]>(url).subscribe(data =>
      this.restaurantes = data
    );
     
  }

  buscarRestaurantesCercanos(): void {

    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      
      const url = `${Environment.apiUrl}/restaurants?latitude=${lat}&longitude=${lon}`;
      this.http.get<Restaurante[]>(url).subscribe(data =>
        this.restaurantes = data
      );
      
    }, () => {
      alert('No se pudo obtener la ubicación.');
    });
    
  }

  @ViewChild(MapaRestaurantsComponent) mapaRestaurantsComponent!: MapaRestaurantsComponent;

  centrar(): void {
    this.mapaRestaurantsComponent.centrarEnUbicacionUsuario();
  }
}
