import { Component, OnInit } from '@angular/core';
import { Tareas } from '../../interfaces/tareas';
import { ServicioTareasService } from '../../services/servicio-tareas.service';
import { Router } from '@angular/router';

@Component({
  selector: 'app-todo',
  templateUrl: './todo.component.html',
  styleUrl: './todo.component.css'
})
export class TodoComponent implements OnInit {
  
  tituloInput = '';
  descripcionInput = '';
  tareas: any = [];

  tarea: Tareas = {
    id: 0,
    nombre: '',
    descripcion : '',
    estado: true,
  };

  filtro!: string;

  constructor( private tareasServicio : ServicioTareasService, public router: Router ){}

  ngOnInit(): void {
    this.tareasServicio.getTareas().subscribe( data =>{
      this.tareas = data;
    })
  }

  eliminarTarea( id :number ){
    let confirmacion = confirm("Quiere borrar la tarea #: "+id)
    if(confirmacion){
      this.tareasServicio.eliminarTarea(id).subscribe( res =>{
        console.log(res)
      })
      this.ngOnInit();
    }
  } 

  modificarTarea(id : number){
    this.router.navigate(['modificar-tarea/',id])
  }



}