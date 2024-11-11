import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, } from '@angular/forms';
import { Environment } from '../env/environment';
import { Order, OrderStatus } from '../models/models';
import { ItemOrderComponent } from '../item-order/item-order.component';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'vista-admin',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule, ItemOrderComponent],
  templateUrl: './vista-admin.component.html',
  styleUrl: './vista-admin.component.css'
})
export class VistaAdminComponent {
  restauranteIDForm: FormGroup;
  orders: Order[] = [];
  tableOrders: Order[] = [];
  onlineOrders: Order[] = [];
  restauranteID: number = 0;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.restauranteIDForm = this.fb.group({
      idRestaurante: ['']
    })
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['orders']) {
      
      this.sortOrders();
    }
  }

  submitForm() {
    
    this.restauranteID = this.restauranteIDForm.value.idRestaurante;
    this.getOrdersInfo();
    
  }
  updateOrderStatus(restaurantID: number, orderID: number, newStatus: OrderStatus) {

    const url = `${Environment.apiUrl}/restaurants/${restaurantID}/orders/${orderID}`;
    const body = newStatus;
    const headers = { 'Content-Type': 'application/json' };
    
    this.http.patch(url, body, { headers }).subscribe(
      () => {
        console.log(`Status del pedido ${orderID} actualizado a ${newStatus}`);
        this.getOrdersInfo(); 
      },
      error => {
        console.error('Error actualizando el estado del pedido', error);
      }
    );
  
  }
  getOrdersInfo() {
    
    const url = `${Environment.apiUrl}/restaurants/${this.restauranteID}/orders`;
    this.http.get<Order[]>(url).subscribe(data => {
        this.orders = data;
        console.log('Orders fetched:', this.orders);
        this.sortOrders();
      }
    );
    
  }

  sortOrders() {
    this.onlineOrders = this.orders.filter(order => order.tableNumber == 0);
    this.tableOrders = this.orders.filter(order => order.tableNumber != 0);

    console.log(this.onlineOrders);
    console.log(this.tableOrders);
  }

  
}
