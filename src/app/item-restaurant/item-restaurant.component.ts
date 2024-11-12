import { Component, Input } from '@angular/core';
import { Restaurante } from '../models/models';

@Component({
  selector: 'item-restaurant',
  standalone: true,
  imports: [],
  templateUrl: './item-restaurant.component.html',
  styleUrl: './item-restaurant.component.css'
})
export class ItemRestaurantComponent {
  @Input() datos!: Restaurante;
}
