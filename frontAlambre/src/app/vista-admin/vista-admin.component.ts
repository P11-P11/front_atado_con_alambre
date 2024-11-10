import { Component } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Environment } from '../env/environment';
import { Order, OrderStatus } from '../models/models';

@Component({
  selector: 'vista-admin',
  standalone: true,
  imports: [RouterLink, ReactiveFormsModule],
  templateUrl: './vista-admin.component.html',
  styleUrl: './vista-admin.component.css'
})
export class VistaAdminComponent {
  restauranteIDForm: FormGroup;
  orders: Order[] = [];

  constructor(private fb: FormBuilder) {
    this.restauranteIDForm = this.fb.group({
      idRestaurante: ['']
    })
  }

  submitForm() {
    if(Environment.conectadoApi) {
      const baseUrl = Environment.apiUrl;
      
    } else {
      
      
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
        "tableNumber": 6, 
      },
      {
        "id": 5,
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
        "tableNumber": 3, 
      }
    ]

    }

  }

  // LISTAR POR 2 COLUMNAS, PEDIDOS POR DELIVERY Y PEDIDOS POR MESA
}
