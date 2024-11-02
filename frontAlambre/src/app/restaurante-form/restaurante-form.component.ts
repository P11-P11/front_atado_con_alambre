import { Component } from '@angular/core';
import { FormBuilder, FormGroup, ReactiveFormsModule } from '@angular/forms';
import { Restaurante } from '../models/restaurante';
import { Router } from '@angular/router';

@Component({
  selector: 'restaurante-form',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './restaurante-form.component.html',
  styleUrl: './restaurante-form.component.css'
})
export class RestauranteFormComponent {
  restauranteForm: FormGroup;

  constructor(private fb: FormBuilder, private router: Router) {
    this.restauranteForm = this.fb.group({
      name: [''],
      number: [''],
      images: ['']
    });
  }

  submitForm() {
    const formValue = this.restauranteForm.value;
    const newRestaurante = new Restaurante(
      formValue.name,
      formValue.number,
      formValue.images.split(',') // Convierte la cadena en un array
    );
    console.log(newRestaurante); // Luego, manda este objeto a la API
    this.enviarRestaurante(newRestaurante);
    setTimeout(() => {
      this.router.navigate(['/admin']);
    }, 500);
    
  }

  enviarRestaurante(restaurante: Restaurante) {
    // Aquí va la lógica para enviar `restaurante` a la API
  }
}
