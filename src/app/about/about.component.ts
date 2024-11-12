import { Component } from '@angular/core';
import { SimpleService } from '../simple.service';

@Component({
  selector: 'app-about',
  template: `
    <h2>About Component</h2>
    <p>{{ info }}</p>
  `,
  styles: []
})
export class AboutComponent {
  info: string;

  constructor(private simpleService: SimpleService) {
    this.info = this.simpleService.getInfo();
  }
}
