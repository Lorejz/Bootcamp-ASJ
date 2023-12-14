import { Component } from '@angular/core';

@Component({
  selector: 'app-main-section-simpsons',
  templateUrl: './main-section-simpsons.component.html',
  styleUrl: './main-section-simpsons.component.css'
})
export class MainSectionSimpsonsComponent {

  simpsons: Simpsons[] = [];

  inputImagen = '';
  inputNombre = '';
  inputRol = '';

  cargarSimpson() {
    this.simpsons.push(new Simpsons(this.inputImagen, this.inputNombre, this.inputRol));
    this.inputImagen = '';
    this.inputNombre = '';
    this.inputRol = '';
  }

}


class Simpsons {
  imagen: string;
  nombre: string;
  rol: string;

  constructor(imagen: string, nombre: string, rol: string) {
    this.imagen = imagen;
    this.nombre = nombre;
    this.rol = rol;

  };

}