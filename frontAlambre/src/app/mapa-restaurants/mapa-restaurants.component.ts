import { Component, OnInit } from '@angular/core';
import * as L from 'leaflet';

@Component({
  selector: 'mapa-restaurants',
  standalone: true,
  templateUrl: './mapa-restaurants.component.html',
  styleUrls: ['./mapa-restaurants.component.css']
})
export class MapaRestaurantsComponent implements OnInit {
  map: any;

  ngOnInit(): void {
    // Inicializar el mapa centrado en Buenos Aires (latitud y longitud)
    
    this.map = L.map('map').setView([-34.6037, -58.3816], 13); // Buenos Aires

    // Agregar capa base de OpenStreetMap
    L.tileLayer('https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png', {
      attribution: '&copy; OpenStreetMap contributors'
    }).addTo(this.map);

    // Agregar un marcador de ejemplo en Buenos Aires
    const marker = L.marker([-34.6037, -58.3816]).addTo(this.map)
      .bindPopup('<b>Local de comida</b><br>Dirección: Obelisco.')
      .openPopup();
    
      /*
    // Manejar clics en el mapa para agregar nuevos marcadores
    this.map.on('click', (e: any) => {
      const latLng = e.latlng;
      const newMarker = L.marker([latLng.lat, latLng.lng]).addTo(this.map)
        .bindPopup('Nuevo local de comida')
        .openPopup();
    });
    
    */
  }
}
