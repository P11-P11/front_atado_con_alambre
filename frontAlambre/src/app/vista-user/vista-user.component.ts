import { Component } from '@angular/core';
import { MapaRestaurantsComponent } from '../mapa-restaurants/mapa-restaurants.component';

@Component({
  selector: 'vista-user',
  standalone: true,
  imports: [MapaRestaurantsComponent],
  templateUrl: './vista-user.component.html',
  styleUrl: './vista-user.component.css'
})
export class VistaUserComponent {
  restaurantes = [
    { nombre: 'Restaurante 1', numero: 1 },
    { nombre: 'Restaurante 2', numero: 2 },
    { nombre: 'Restaurante 3', numero: 3 },
    { nombre: 'Restaurante 4', numero: 4 },
    { nombre: 'Restaurante 5', numero: 5 },
    { nombre: 'Restaurante 6', numero: 6 },
    { nombre: 'Restaurante 7', numero: 7 },
    { nombre: 'Restaurante 8', numero: 8 },
    { nombre: 'Restaurante 9', numero: 9 },
    { nombre: 'Restaurante 10', numero: 10 },
    { nombre: 'Restaurante 11', numero: 11 },
    { nombre: 'Restaurante 12', numero: 12 },
    { nombre: 'Restaurante 13', numero: 1 },
    { nombre: 'Restaurante 14', numero: 2 },
    { nombre: 'Restaurante 15', numero: 3 },
    { nombre: 'Restaurante 16', numero: 4 },
    { nombre: 'Restaurante 17', numero: 5 },
    { nombre: 'Restaurante 18', numero: 6 },
    { nombre: 'Restaurante 19', numero: 7 },
    { nombre: 'Restaurante 20', numero: 8 },
    { nombre: 'Restaurante 21', numero: 9 },
    { nombre: 'Restaurante 22', numero: 10 },
    { nombre: 'Restaurante 23', numero: 11 },
    { nombre: 'Restaurante 24', numero: 12 },
  ];
}
