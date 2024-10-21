// src/core/services/local.service.ts
import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Local } from '../../shared/models/local.model';

@Injectable({
  providedIn: 'root',
})
export class LocalService {
  private apiUrl = '/api/locales';

  constructor(private http: HttpClient) {}

  obtenerLocales(): Observable<Local[]> {
    return this.http.get<Local[]>(this.apiUrl);
  }

  obtenerLocal(id: number): Observable<Local> {
    return this.http.get<Local>(`${this.apiUrl}/${id}`);
  }
}
