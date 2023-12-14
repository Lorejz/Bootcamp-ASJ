import { Component,Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-hijo',
  templateUrl: './hijo.component.html',
  styleUrl: './hijo.component.css'
})
export class HijoComponent {
  //declarar una variable que recibe el padre
  @Input() datoEnviado: any = {};
  @Input() otro : string = '';


  //crear una variable que vamos a enviarle al padre
  @Output() mensaje: EventEmitter <string>;


  constructor(){
    this.mensaje = new EventEmitter();
  }

  enviarMsj(){
    this.mensaje.emit("hola viejo te estoy llamando! atendeme")
  }


}
