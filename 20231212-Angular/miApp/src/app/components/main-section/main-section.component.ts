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

  filtro: 'todos' | 'finalizados' | 'eliminados' = 'todos';

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
  finalizarTarea(index:number){
    this.tareas[index].finalizado=true;
  }

  cambiarFiltro(filtro: 'todos' | 'finalizados' | 'eliminados') {
    
  }



}


class Tarea {

  titulo: string;
  descripcion: string;
  finalizado: boolean;
  eliminado:  boolean;

  constructor(titulo: string,descripcion: string){
    this.titulo = titulo;
    this.descripcion = descripcion;
    this.finalizado = false;
    this.eliminado = false;
  };

}