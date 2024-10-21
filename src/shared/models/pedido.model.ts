import { DetallePedido } from './detalle-pedido.model';

export interface Pedido {
  id: number;
  estado: EstadoPedido;
  fechaCreacion: string; // O utiliza Date
  identificadorMesa: string;
  localId: number;
  detalles: DetallePedido[];
}

export interface DetallePedido {
  productoId: number;
  cantidad: number;
  producto?: Producto; // Opcional, si necesitas detalles del producto
}

