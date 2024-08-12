import { Component,EventEmitter,Output } from '@angular/core';

@Component({
  selector: 'app-point-of-sell',
  templateUrl: './point-of-sell.component.html',
  styleUrls: ['./point-of-sell.component.css']
})
export class PointOfSellComponent {
  numero:number=0;
  nombre:string="";
  descripcion:string="";

  @Output() enviarLista: EventEmitter<any> = new EventEmitter();
  
  onNombre(event:any){
    this.nombre = event.target.value;
  }
  onDescripcion(event:any){
    this.descripcion = event.target.value;
  }
  enviar() {
    this.numero = Math.floor(Math.random() * 1000);
    const pedido = {
      nombre: this.nombre,
      descripcion: this.descripcion,
      numero: this.numero.toString()
    };
    this.enviarLista.emit(pedido);
    
    this.nombre = "";
    this.descripcion = "";
  }
  

}
