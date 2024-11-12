import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { MenuItem, OrderItem, OrderInput, Order } from '../models/models';
import { Environment } from '../env/environment';
import { HttpClient, HttpHeaders } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'pedido-form',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pedido-form.component.html',
  styleUrls: ['./pedido-form.component.css']
})
export class PedidoFormComponent implements OnInit {
  
  idRestaurante: string | null = null;
  idMesa: string | null = null;

  menu: MenuItem[] = [new MenuItem("a", 1)]; 

  orderItems: OrderItem[] = [];

  orderIdToCheck: string = '';
  orderStatus: string | null = null;

  constructor(private route: ActivatedRoute, private http: HttpClient) {}

  ngOnInit(): void {
    this.idRestaurante = this.route.snapshot.paramMap.get('idRestaurante');
    this.idMesa = this.route.snapshot.queryParamMap.get('table');

    this.getMenu();
  }
  
  getMenu() {
    
    const url = `${Environment.apiUrl}/restaurants/${this.idRestaurante}/menu`;
    this.http.get<MenuItem[]>(url).subscribe(data => {
      this.menu = data;
      this.orderItems = this.menu.map(item => new OrderItem(item, 0));
    });
    
  }


  increment(index: number): void {
    this.orderItems[index].quantity++;
  }

  decrement(index: number): void {
    if (this.orderItems[index].quantity > 0) {
      this.orderItems[index].quantity--;
    }
  }

  sendOrder(): void {
    const itemsWithQuantity = this.orderItems.filter(item => item.quantity > 0);
    console.log("Orden enviada:", itemsWithQuantity);

    navigator.geolocation.getCurrentPosition(position => {
      const lat = position.coords.latitude;
      const lon = position.coords.longitude;
      
      const orderInput: OrderInput = {
        tableNumber: Number(this.idMesa), 
        userLocation: {latitude: lat, longitude: lon}, 
        items: this.orderItems
      };
      
      const url = `${Environment.apiUrl}/restaurants/${this.idRestaurante}/orders`;

      const headers = new HttpHeaders({ 'Content-Type': 'application/json' });
      
      this.http.post<{id: number}>(url, orderInput, {headers}).subscribe(
        (response) => {
          alert('Orden agregada exitosamente con ID: ' + response.id);
        },
        (error) => {
          console.log(error);
        }
      );
      
    }, () => {
      alert('No se pudo obtener la ubicación.');
    });

  }
  checkOrderStatus(): void {
    if (!this.orderIdToCheck) {
      alert('Por favor ingrese un ID de pedido');
      return;
    }
    
    const url = `${Environment.apiUrl}/restaurants/${this.idRestaurante}/orders/${this.orderIdToCheck}`;
    
    this.http.get<Order>(url).subscribe(
      (response) => {
        this.orderStatus = response.status;
      },
      (error) => {
        this.orderStatus = null;
        alert('No se pudo obtener el estado del pedido. Intente nuevamente.');
      }
    );
  }
}
