import { Component, inject } from '@angular/core';
import { PedidoService } from '../services/pedido.service';
import { Pedido } from '../models/pedido';

@Component({
  selector: 'app-kitchen',
  standalone: true,
  imports: [],
  templateUrl: './kitchen.component.html',
  styleUrl: './kitchen.component.css'
})
export class KitchenComponent {

  private pedidoService = inject(PedidoService);

  pedidosIngresados:Pedido[]=this.pedidoService.pedidosIngresados;
  pedidoCoccion: Pedido | null = null;

  enviarACoccion(pedido: Pedido) {
  if (!this.pedidoCoccion) {
      this.pedidoCoccion = pedido;
    }
  }
  quitarDePendientes(pedido: Pedido) {
    if(this.pedidoCoccion){
      this.pedidoService.obtenerPedidoListo(pedido);
      this.pedidoCoccion=null;
    }
  }
}
