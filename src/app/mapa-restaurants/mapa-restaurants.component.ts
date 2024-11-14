import { Component, OnInit, Input, SimpleChanges } from '@angular/core';
import * as L from 'leaflet';
import { Restaurante, RestauranteInput } from '../models/models';
import { Router } from '@angular/router';

const iconRetinaUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png';
const iconUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png';
const shadowUrl = 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png';
const defaultIcon = L.icon({
  iconRetinaUrl,
  iconUrl,
  shadowUrl,
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41]
});
L.Marker.prototype.options.icon = defaultIcon;

@Component({
  selector: 'mapa-restaurants',
  standalone: true,
  imports: [],
  templateUrl: './mapa-restaurants.component.html',
  styleUrls: ['./mapa-restaurants.component.css']
})
export class MapaRestaurantsComponent implements OnInit {

  @Input() restaurantes: Restaurante[] = [];
  @Input() restauranteSeleccionado?: Restaurante;

  map: any;
  markers: Map<string, L.Marker> = new Map();

  constructor(private router: Router) {}

  ngOnInit(): void {
    // Inicializar el mapa centrado en Buenos Aires (latitud y longitud)
    
    this.map = L.map('map').setView([-34.6037, -58.3816], 13); // Buenos Aires

    // Agregar capa base de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    this.mostrarRestaurantes();

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

    if (this.restaurantes.length > 0) {

    this.restaurantes.forEach(rest => {
      const popupContent = `<b>${rest.name}</b><br> <a href="javascript:void(0)" class="hacer-pedido" data-id="${rest.id}" data-table="0"> Hacer pedido </a>`;
      const marker = L.marker([rest.location.latitude, rest.location.longitude]).addTo(this.map)
      .bindPopup(popupContent);
      this.markers.set(rest.name, marker);
    });

    this.map.on('popupopen', (event: any) => {
      const popup = event.popup;
      const hacerPedidoLink = popup.getElement().querySelector('.hacer-pedido');
      
      if (hacerPedidoLink) {
        hacerPedidoLink.addEventListener('click', (e: MouseEvent) => {
          e.preventDefault(); // Prevenir la acción por defecto
          const restaurantId = hacerPedidoLink.getAttribute('data-id');
          const tableNumber = hacerPedidoLink.getAttribute('data-table');
          this.router.navigate([`/user/order/${restaurantId}`], { queryParams: { table: tableNumber } });
        });
      }
    });
  }
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
      this.markers.forEach(marker => marker.remove());
      this.markers.clear();
      
      this.mostrarRestaurantes();
    }
  };
}
