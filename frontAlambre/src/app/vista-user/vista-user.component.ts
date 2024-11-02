import { Component, ViewChild } from '@angular/core';
import { MapaRestaurantsComponent } from '../mapa-restaurants/mapa-restaurants.component';
import { ItemRestaurantComponent } from '../item-restaurant/item-restaurant.component';

interface Restaurante {
  name: string;
  number: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

@Component({
  selector: 'vista-user',
  standalone: true,
  imports: [MapaRestaurantsComponent, ItemRestaurantComponent],
  templateUrl: './vista-user.component.html',
  styleUrl: './vista-user.component.css'
})
export class VistaUserComponent {
  restaurantes: Restaurante[] = [];
  
  restauranteSeleccionado?: Restaurante;

  seleccionarRestaurante(restaurant: Restaurante): void {
    this.restauranteSeleccionado = restaurant;
  }

  buscarRestaurantes(): void {
     
    this.restaurantes = [
      {
        "name": "Parrilla El Porteño",
        "number": "1029384",
        "location": {
          "latitude": -34.6037,
          "longitude": -58.3816
        }
      },
      {
        "name": "La Cocina del Sur",
        "number": "2398472",
        "location": {
          "latitude": -34.6050,
          "longitude": -58.3835
        }
      },
      {
        "name": "Bistro Buenos Aires",
        "number": "3459821",
        "location": {
          "latitude": -34.6083,
          "longitude": -58.3700
        }
      },
      {
        "name": "Café Plaza Mayor",
        "number": "4927810",
        "location": {
          "latitude": -34.6012,
          "longitude": -58.3860
        }
      },
      {
        "name": "El Asador Criollo",
        "number": "5912039",
        "location": {
          "latitude": -34.6104,
          "longitude": -58.3755
        }
      },
      {
        "name": "Rincón Porteño",
        "number": "6782398",
        "location": {
          "latitude": -34.6055,
          "longitude": -58.3721
        }
      },
      {
        "name": "Sabores de La Boca",
        "number": "7823491",
        "location": {
          "latitude": -34.6142,
          "longitude": -58.3623
        }
      },
      {
        "name": "Tango & Tapas",
        "number": "8591032",
        "location": {
          "latitude": -34.6091,
          "longitude": -58.3776
        }
      },
      {
        "name": "Parrilla Las Cañitas",
        "number": "9273852",
        "location": {
          "latitude": -34.5837,
          "longitude": -58.4232
        }
      },
      {
        "name": "La Esquina del Gusto",
        "number": "1092384",
        "location": {
          "latitude": -34.6121,
          "longitude": -58.3832
        }
      },
      {
        "name": "Los Sabores de San Telmo",
        "number": "1172634",
        "location": {
          "latitude": -34.6215,
          "longitude": -58.3708
        }
      },
      {
        "name": "Empanadas El Caminito",
        "number": "1258934",
        "location": {
          "latitude": -34.6137,
          "longitude": -58.3824
        }
      },
      {
        "name": "Pizzería La Reina",
        "number": "1329478",
        "location": {
          "latitude": -34.6061,
          "longitude": -58.3799
        }
      },
      {
        "name": "Asador Palermo",
        "number": "1428394",
        "location": {
          "latitude": -34.5872,
          "longitude": -58.4298
        }
      },
      {
        "name": "Parrilla Viejo Almacén",
        "number": "1578390",
        "location": {
          "latitude": -34.6129,
          "longitude": -58.3920
        }
      }
    ];
  }

  @ViewChild(MapaRestaurantsComponent) mapaRestaurantsComponent!: MapaRestaurantsComponent;

  centrar(): void {
    this.mapaRestaurantsComponent.centrarEnUbicacionUsuario();
  }
}
