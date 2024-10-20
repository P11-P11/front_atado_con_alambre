// src/core/services/pedido.service.ts
import { Injectable } from '@angular/core';
import { BehaviorSubject, Observable } from 'rxjs';
import { Pedido } from '../../shared/models/pedido.model';
import { HttpClient } from '@angular/common/http';

@Injectable({
  providedIn: 'root',
})
export class PedidoService {
  private apiUrl = '/api/pedidos';
  private pedidoActual = new BehaviorSubject<Pedido | null>(null);
  pedidoActual$ = this.pedidoActual.asObservable();

  constructor(private http: HttpClient) {}

  agregarProducto(productoId: number, cantidad: number) {
    // Implement logic to add product to the current order
  }

  confirmarPedido(pedido: Pedido): Observable<Pedido> {
    return this.http.post<Pedido>(this.apiUrl, pedido);
  }
}
