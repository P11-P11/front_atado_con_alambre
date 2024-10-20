// src/core/services/carta.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Carta } from '../../shared/models/carta.model';

@Injectable({
  providedIn: 'root',
})
export class CartaService {
  private apiUrl = '/api/cartas';

  constructor(private http: HttpClient) {}

  obtenerCartaPorLocal(localId: number): Observable<Carta> {
    return this.http.get<Carta>(`${this.apiUrl}/local/${localId}`);
  }
}
