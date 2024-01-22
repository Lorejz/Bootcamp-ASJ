import { Component } from '@angular/core';

@Component({
  selector: 'app-main-section',
  templateUrl: './main-section.component.html',
  styleUrl: './main-section.component.css'
})
export class MainSectionComponent {

  tituloInput = '';
  descripcionInput = '';
  tareas: Tarea[] = [];

  filtro!: string;

  agregarTarea(){
/*     let tarea : Tarea = new Tarea(this.tituloInput,this.descripcionInput);
    this.tareas.push(tarea); */
    this.tareas.unshift(new Tarea(this.tituloInput,this.descripcionInput));
    this.tituloInput = '';
    this.descripcionInput = '';

    console.log(this.tituloInput);
  }
  
  eliminarTarea(index:number){
    this.tareas[index].eliminado=true;
  }
  terminarTarea(index:number){
    this.tareas[index].terminado=true;
  }

  cambiarFiltro() {
    switch(this.filtro){
      case 'eliminados':
        const eliminados = this.tareas.filter( (tarea) => tarea.eliminado );
        return eliminados;
      case 'terminados':
        const terminados = this.tareas.filter( (tarea) => tarea.terminado );
        return terminados;
      default:
        return this.tareas;
    }
  }

  setearFiltro(filtro:string){
    this.filtro = filtro;
  }



}


class Tarea {

  titulo: string;
  descripcion: string;
  terminado: boolean;
  eliminado:  boolean;

  constructor(titulo: string , descripcion: string){
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.terminado = false;
    this.eliminado = false;
  };

}