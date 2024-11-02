import { Component } from '@angular/core';
import { VistaUserComponent } from '../vista-user/vista-user.component';
import { VistaAdminComponent } from '../vista-admin/vista-admin.component';
import { RouterOutlet, RouterLink, RouterLinkActive } from '@angular/router';

@Component({
  selector: 'vista-default',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, VistaUserComponent, VistaAdminComponent],
  templateUrl: './vista-default.component.html',
  styleUrl: './vista-default.component.css'
})
export class VistaDefaultComponent {

}
