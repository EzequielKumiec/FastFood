import { Component, EventEmitter, Input, Output } from '@angular/core';

@Component({
  selector: 'app-cocina',
  templateUrl: './cocina.component.html',
  styleUrls: ['./cocina.component.css']
})
export class CocinaComponent {
  @Input() listas:any=[];
  
  listaPedidoCocinando:any =[];

  @Output() enviarPedidoTerminado: EventEmitter<any> = new EventEmitter();

  cocinarPedido(event:any){
    const index = this.listas.indexOf(event);
    this.listaPedidoCocinando.push(event)
    this.listas.splice(index, 1);
  }

  onEnviarPedidoTerminado(){
    const listaParaEnviar = [...this.listaPedidoCocinando]; //los ... le saca la otra lista
    
    this.enviarPedidoTerminado.emit(listaParaEnviar);

    this.listaPedidoCocinando = [];
  }
}
