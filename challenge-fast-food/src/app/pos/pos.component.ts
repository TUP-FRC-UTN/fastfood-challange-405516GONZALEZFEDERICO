import { Component,inject} from '@angular/core';
import { PedidoService } from '../services/pedido.service';
import { Pedido } from '../models/pedido';
import { FormsModule } from '@angular/forms';


@Component({
  selector: 'app-pos',
  standalone: true,
  imports: [FormsModule],
  templateUrl: './pos.component.html',
  styleUrl: './pos.component.css'
})
export class PosComponent {
  private pedidoService = inject(PedidoService);
  pedido :Pedido={
    id: 0, 
    name: "",  
    description: "",  
    date: new Date() 
}
  onSubmit() {
    this.pedido.id=Math.floor(Math.random()*1000) +1
    this.pedido.date=new Date()
    this.pedidoService.agregarPedido(this.pedido)
    this.pedido={
      id: 0, 
      name: "",  
      description: "",  
      date: new Date() 
  }
  }
}
