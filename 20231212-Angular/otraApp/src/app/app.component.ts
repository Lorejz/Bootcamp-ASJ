import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrl: './app.component.css'
})
export class AppComponent {
  title = 'otraApp';

  msjContenido: string ='';

  recibirMsj(msj: string) {
    this.msjContenido = msj;
  }

  contenidoInput = '';
  mostrar(txt : string ) {
    this.contenidoInput = txt;
  }

}
