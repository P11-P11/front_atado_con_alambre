import { Component, OnChanges, SimpleChanges } from '@angular/core';
import { RouterLink } from '@angular/router';
import { FormBuilder, FormGroup, ReactiveFormsModule, FormControl } from '@angular/forms';
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

  mesaControl: FormControl = new FormControl('');
  codigos: String[] = [];
  codigoQRSeleccionado: String | null = null;

  constructor(private fb: FormBuilder, private http: HttpClient) {
    this.restauranteIDForm = this.fb.group({
      idRestaurante: ['']
    });
  }

  ngOnInit(): void {
    // Escucha cambios en mesaControl
    this.mesaControl.valueChanges.subscribe((mesaNumber) => {
      console.log("cambio nro de mesa");
      this.updateCodigoQRSeleccionado(mesaNumber);
    });
  }

  ngOnChanges(changes: SimpleChanges): void {
    if (changes['orders']) {
      this.sortOrders();
    }
  }

  updateCodigoQRSeleccionado(mesaNumber: number) {
    if (mesaNumber >= 0) {
      const url = `${Environment.apiUrl}/restaurants/${this.restauranteID}/qrs/${mesaNumber}`;
      this.http.get(url, { responseType: 'blob' }).subscribe(
        (data) => {
          this.codigoQRSeleccionado = URL.createObjectURL(data);
          console.log(this.codigoQRSeleccionado);
        },
        (error) => {
          console.error('Error al obtener el código QR:', error);
          this.codigoQRSeleccionado = null;
        }
      );
    } else {
      this.codigoQRSeleccionado = null;
    }
  }

  selectCodigoQR() {
    const mesaNumber = this.mesaControl.value;
    this.updateCodigoQRSeleccionado(mesaNumber);
    /*
    if (mesaNumber >= 0 && mesaNumber < this.codigos.length) {
      this.codigoQRSeleccionado = Environment.apiUrl + this.codigos[mesaNumber - 1];
    } else {
      this.codigoQRSeleccionado = null;
    }
      */
  }

  submitForm() {
    
    this.restauranteID = this.restauranteIDForm.value.idRestaurante;
    this.getOrdersInfo();
    /* const url = `${Environment.apiUrl}/restaurants/${this.restauranteID}/qrs/`;
      this.http.get<String[]>(url).subscribe(data => {
        this.codigos = data;
      });
    */
  }
  updateOrderStatus(restaurantID: number, orderID: number, newStatus: OrderStatus) {

    const url = `${Environment.apiUrl}/restaurants/${restaurantID}/orders/${orderID}`;
    const body = newStatus;
    const headers = { 'Content-Type': 'application/json' };
    
    this.http.patch(url, body, { headers }).subscribe(
      () => {
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
        this.sortOrders();
      }
    );
    
  }

  sortOrders() {
    this.onlineOrders = this.orders.filter(order => order.tableNumber == 0);
    this.tableOrders = this.orders.filter(order => order.tableNumber != 0);
  }

  
}
