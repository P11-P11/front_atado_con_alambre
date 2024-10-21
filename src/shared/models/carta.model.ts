import { Producto } from './producto.model';

export interface Carta {
  id: number;
  nombre: string;
  productos: Producto[];
  // Otros campos
}


