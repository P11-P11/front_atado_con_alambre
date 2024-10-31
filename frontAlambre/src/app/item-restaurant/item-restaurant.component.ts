import { Component, Input } from '@angular/core';

@Component({
  selector: 'item-restaurant',
  standalone: true,
  imports: [],
  templateUrl: './item-restaurant.component.html',
  styleUrl: './item-restaurant.component.css'
})
export class ItemRestaurantComponent {
  @Input() nombre = "";
  @Input() numero = "";
}
