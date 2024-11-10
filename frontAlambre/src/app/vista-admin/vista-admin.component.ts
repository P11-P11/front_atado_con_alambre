import { Component } from '@angular/core';
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

  submitForm() {
    
    this.restauranteID = this.restauranteIDForm.value.idRestaurante;
    this.getOrdersInfo();
    
  }
  updateOrderStatus(restaurantID: number, orderID: number, newStatus: OrderStatus) {

    if(Environment.conectadoApi) {
      const url = `${Environment.apiUrl}/restaurants/${restaurantID}/orders/${orderID}`;
      this.http.patch(url, newStatus).subscribe(
        () => {
          console.log(`Status del pedido ${orderID} actualizado a ${newStatus}`);
          this.getOrdersInfo(); // Opcional: recarga los pedidos después de la actualización
        });
    } else {

      console.log("Aca le pegaría a la api para actualizar el estado y volver a recargar la lista");
    }
  
  }
  getOrdersInfo() {
    if(Environment.conectadoApi) {
      const url = `${Environment.apiUrl}/restaurants/${this.restauranteID}/orders`;
      this.http.get<Order[]>(url).subscribe(data => {
          this.orders = data;
          console.log('Orders fetched:', this.orders);
        }
      );
    } else {
      
      console.log("Acá cargo la lista");
      this.orders = [{
        "id": 3,
        "items": [
          {
          "menuItem": {
            "item": "pisa",
            "price": 4
          },
          "quantity": 2,
        }
        ],
        "status": OrderStatus.ACCEPTED,
        "tableNumber": 8, 
      }, 
      {
        "id": 4,
        "items": [
        {
          "menuItem": {
            "item": "galletitas",
            "price": 1
          },
          "quantity": 6,
        }
        ],
        "status": OrderStatus.READY_TO_BE_SERVED,
        "tableNumber": 0, 
      },
      {
        "id": 5,
        "items": [
        {
          "menuItem": {
            "item": "galletitas",
            "price": 1
          },
          "quantity": 6,
        }
        ],
        "status": OrderStatus.READY_TO_BE_SERVED,
        "tableNumber": 6, 
      },
      {
        "id": 6,
        "items": [
        {
          "menuItem": {
            "item": "galletitas",
            "price": 1
          },
          "quantity": 6,
        }
        ],
        "status": OrderStatus.READY_TO_BE_SERVED,
        "tableNumber": 0, 
      },
      {
        "id": 7,
        "items": [
        {
          "menuItem": {
            "item": "galletitas",
            "price": 1
          },
          "quantity": 6,
        }
        ],
        "status": OrderStatus.READY_TO_BE_SERVED,
        "tableNumber": 6, 
      },
      {
        "id": 8,
        "items": [
        {
          "menuItem": {
            "item": "fideos",
            "price": 2
          },
          "quantity": 2,
        },
        {
          "menuItem": {
            "item": "coca",
            "price": 3
          },
          "quantity": 4,
        }
        ],
        "status": OrderStatus.IN_PREPARATION,
        "tableNumber": 0, 
      }
    ]

    }
    this.sortOrders();
  }

  sortOrders() {
    this.onlineOrders = this.orders.filter(order => order.tableNumber == 0);
    this.tableOrders = this.orders.filter(order => order.tableNumber != 0);
  }

  
}
