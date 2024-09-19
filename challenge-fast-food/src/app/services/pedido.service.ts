import { Injectable } from '@angular/core';
import { Pedido } from '../models/pedido';

@Injectable({
  providedIn: 'root'
})
export class PedidoService {
  constructor() { 
  }
  pedidosIngresados:Pedido[]=[];
  pedidosListosParaLlevar:Pedido[]=[];
  
  agregarPedido=(pedido:Pedido)=>{
  this.pedidosIngresados.push(pedido);
  }
  quitarPedido = () => {
    return this.pedidosIngresados.pop();
  }
  quitarPedidoListo = () => {
    return this.pedidosListosParaLlevar.pop();
  }
  obtenerPedidoListo = (pedido:Pedido) => {
    return this.pedidosListosParaLlevar.push(pedido);
  }
}
