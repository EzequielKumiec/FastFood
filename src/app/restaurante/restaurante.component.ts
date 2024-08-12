import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-restaurante',
  templateUrl: './restaurante.component.html',
  styleUrls: ['./restaurante.component.css']
})
export class RestauranteComponent {
   lista:any =[];
  onVerLista(event:any){
    this.lista.push(event)
  }
  listaDePedidosTerminados:any=[];
  onListaTerminado(event:any){
    this.listaDePedidosTerminados.push(event)
  }
}
