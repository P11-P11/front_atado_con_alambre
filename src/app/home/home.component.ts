import { Component } from '@angular/core';

@Component({
  selector: 'app-home',
  template: `
    <h2>Home Component</h2>
    <input [(ngModel)]="message" placeholder="Type something">
    <p>You typed: {{ message }}</p>
  `,
  styles: []
})
export class HomeComponent {
  message: string = '';
}
