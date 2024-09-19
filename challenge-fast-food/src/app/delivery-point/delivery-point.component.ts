import { Component, inject } from '@angular/core';
import { PedidoService } from '../services/pedido.service';
import { Pedido } from '../models/pedido';
import { CommonModule } from '@angular/common';

@Component({
  selector: 'app-delivery-point',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './delivery-point.component.html',
  styleUrl: './delivery-point.component.css'
})
export class DeliveryPointComponent {

  private pedidoService = inject(PedidoService);
  pedidosListosParaEnviar:Pedido[]=this.pedidoService.pedidosListosParaLlevar;
  
  entregarPedido() {
    this.pedidoService.quitarPedido();
    this.pedidoService.quitarPedidoListo();
    }
}
