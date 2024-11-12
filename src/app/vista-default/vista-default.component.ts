import { Component } from '@angular/core';
import { VistaUserComponent } from '../vista-user/vista-user.component';
import { VistaAdminComponent } from '../vista-admin/vista-admin.component';
import { RouterLink } from '@angular/router';

@Component({
  selector: 'vista-default',
  standalone: true,
  imports: [RouterLink],
  templateUrl: './vista-default.component.html',
  styleUrl: './vista-default.component.css'
})
export class VistaDefaultComponent {

}
