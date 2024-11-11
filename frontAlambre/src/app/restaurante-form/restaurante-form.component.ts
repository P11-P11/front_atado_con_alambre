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
      logoUrl: [''],
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
      formValue.logoUrl,
      formValue.images.split(','), // Convierte la cadena en un array
      this.parseMenu(formValue.menu),
      formValue.numberOfTables
    );
    console.log("NUEVO", newRestaurante); // Luego, manda este objeto a la API
    console.log(this.parseMenu(formValue.menu));
    this.enviarRestaurante(newRestaurante);
    setTimeout(() => {
      this.router.navigate(['/admin']);
    }, 500);
    
  }

  enviarRestaurante(restaurante: RestauranteInput) {
    
    this.http.post<{id: number}>(Environment.apiUrl + '/restaurants', restaurante).subscribe(res => 
      alert("El id del restaurante es: " + res.id)
    );
    
  }

  parseLocation(locationString: string): Coordinate {
    const [latitude, longitude] = locationString.split(',');
    return new Coordinate(Number(latitude), Number(longitude));
  }

  parseMenu(menuString: string): MenuItem[] {
    // Primero, eliminar los corchetes al principio y al final
    menuString = menuString.replace(/^\{|\}$/g, '');
  
    // Luego, dividir la cadena por las comas que separan los items
    return menuString.split('}, {').map(item => {
      const [name, price] = item.split(',');  // Separar el nombre del precio
      return new MenuItem(name.trim(), parseFloat(price.trim()));  // Crear los objetos MenuItem
    });
  }
}
