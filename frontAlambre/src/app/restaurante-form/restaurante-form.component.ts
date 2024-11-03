import { Component, Injectable } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Restaurante, RestauranteInput, MenuItem, Coordinate } from '../models/models';
import { Router } from '@angular/router';
import { HttpClient } from '@angular/common/http';
import { Environment } from '../env/environment';

@Component({
  selector: 'restaurante-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './restaurante-form.component.html',
  styleUrl: './restaurante-form.component.css'
})
@Injectable({providedIn: 'root'})
export class RestauranteFormComponent {
  restauranteForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router, private http: HttpClient) {
    this.restauranteForm = this.fb.group({
      name: [''],
      location: [''],
      number: [''],
      images: [''],
      menu: [''],
      numberOfTables: ['']
    });
  }

  submitForm() {
    const formValue = this.restauranteForm.value;
    const newRestaurante = new RestauranteInput(
      formValue.name,
      formValue.number,
      this.parseLocation(formValue.location),
      formValue.images.split(','), // Convierte la cadena en un array
      this.parseMenu(formValue.menu),
      formValue.numberOfTables
    );
    // console.log(newRestaurante); // Luego, manda este objeto a la API
    this.enviarRestaurante(newRestaurante);
    setTimeout(() => {
      this.router.navigate(['/admin']);
    }, 500);
    
  }

  enviarRestaurante(restaurante: RestauranteInput) {
    if(Environment.conectadoApi) {
      this.http.post<RestauranteInput>(Environment.apiUrl + '/restaurants', restaurante).subscribe(config => 
        console.log(config)
      );
    }
  }

  parseLocation(locationString: string): Coordinate {
    const [latitude, longitude] = locationString.split(',');
    return new Coordinate(Number(latitude), Number(longitude));
  }

  parseMenu(menuString: string): MenuItem[] {
    return menuString.split('},{').map(item => {
      const [name, price] = item.replace(/[{}]/g, '').split(',');
      return new MenuItem(name.trim(), parseFloat(price.trim()));
    });
  }
}
