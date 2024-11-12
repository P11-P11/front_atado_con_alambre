import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class SimpleService {
  getInfo() {
    return 'This info comes from a service using dependency injection.';
  }
}
