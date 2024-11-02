import { Component } from '@angular/core';
import { RestauranteFormComponent } from '../restaurante-form/restaurante-form.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'vista-admin',
  standalone: true,
  imports: [RouterLink, RestauranteFormComponent],
  templateUrl: './vista-admin.component.html',
  styleUrl: './vista-admin.component.css'
})
export class VistaAdminComponent {

}
