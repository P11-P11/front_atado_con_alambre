import { Component, Input, Output, EventEmitter } from '@angular/core';
import { Order, OrderStatus } from '../models/models';
import { FormsModule } from '@angular/forms';
import { Environment } from '../env/environment';
import { HttpClient } from '@angular/common/http';

@Component({
  selector: 'item-order',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './item-order.component.html',
  styleUrl: './item-order.component.css'
})
export class ItemOrderComponent {
  @Input() datos!: Order;
  @Output() statusUpdated = new EventEmitter<{orderId: number, newStatus: OrderStatus}>();

  statusOptions = Object.values(OrderStatus);
  selectedStatus: OrderStatus;

  constructor(private http: HttpClient) {
    this.selectedStatus = this.datos?.status;
  }

  updateStatus() {
    
       
    this.statusUpdated.emit({"orderId": this.datos.id, "newStatus": this.selectedStatus});
  }
}
