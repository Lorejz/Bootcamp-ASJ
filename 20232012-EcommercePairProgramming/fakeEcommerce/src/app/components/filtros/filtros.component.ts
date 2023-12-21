import { Component } from '@angular/core';

@Component({
  selector: 'app-filtros',
  templateUrl: './filtros.component.html',
  styleUrl: './filtros.component.css'
})
export class FiltrosComponent {
  tituloInput: string = '0';
  url: any;
  inputPrecioMin: any;
  inputPrecioMax: any;

  buscar() {
    this.url = `all-products/${this.tituloInput}/${this.inputPrecioMin}/${this.inputPrecioMax}`;
  }

}
