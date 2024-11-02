import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';

interface Restaurante {
  name: string;
  number: string;
  location: {
    latitude: number;
    longitude: number;
  };
}

@Component({
  selector: 'mapa-restaurants',
  standalone: true,
  templateUrl: './mapa-restaurants.component.html',
  styleUrls: ['./mapa-restaurants.component.css']
})
export class MapaRestaurantsComponent implements OnInit {

  @Input() restaurantes: Restaurante[] = [];
  @Input() restauranteSeleccionado?: Restaurante;

  map: any;
  markers: Map<string, L.Marker> = new Map();

  ngOnInit(): void {
    // Inicializar el mapa centrado en Buenos Aires (latitud y longitud)
    
    this.map = L.map('map').setView([-34.6037, -58.3816], 13); // Buenos Aires

    // Agregar capa base de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

  };

  centrarEnUbicacionUsuario(): void {
    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      this.map.setView([lat, lon]); // Centrar el mapa en la ubicación del usuario
    }, () => {
      alert('No se pudo obtener la ubicación.');
    });
  }

  mostrarRestaurantes(): void {
    this.restaurantes.forEach(rest => {
      const popupContent = `<b>${rest.name}</b><br>${rest.number}`;
      const marker = L.marker([rest.location.latitude, rest.location.longitude]).addTo(this.map)
      .bindPopup(popupContent);
      this.markers.set(rest.name, marker);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if(changes['restauranteSeleccionado'] && this.restauranteSeleccionado) {
      // Centrar el mapa en el restaurante seleccionado
      this.map.setView([this.restauranteSeleccionado.location.latitude, 
                        this.restauranteSeleccionado.location.longitude],15);
      const marker = this.markers.get(this.restauranteSeleccionado.name);
      if (marker) {
        setTimeout(() => {
          marker.openPopup();
        }, 300);
      }
    }
    if(changes['restaurantes']) {
      this.mostrarRestaurantes();
    }
  };
}
