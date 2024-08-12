import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-punto-de-entrega',
  templateUrl: './punto-de-entrega.component.html',
  styleUrls: ['./punto-de-entrega.component.css']
})
export class PuntoDeEntregaComponent {
  @Input() listaDePedidosTerminados:any=[];
  
  terminarPedido(event:any){
    const index = this.listaDePedidosTerminados.indexOf(event);
    this.listaDePedidosTerminados.splice(index, 1);
  }
}
 