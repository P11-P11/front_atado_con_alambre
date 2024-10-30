import { Component } from '@angular/core';
import { Router, RouterOutlet, RouterLink, RouterLinkActive, NavigationEnd } from '@angular/router';
import { VistaUserComponent } from './vista-user/vista-user.component';
import { VistaAdminComponent } from "./vista-admin/vista-admin.component";
import { filter } from 'rxjs/operators';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet, RouterLink, RouterLinkActive, VistaUserComponent, VistaAdminComponent],
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'frontAlambre';
  showNav = true;

  constructor(private router: Router) {
    // Detectar cambios de ruta
    this.router.events
      .pipe(filter(event => event instanceof NavigationEnd))
      .subscribe((event: NavigationEnd) => {
        this.showNav = !(event.url === '/user' || event.url === '/admin');
      });
  }
}
