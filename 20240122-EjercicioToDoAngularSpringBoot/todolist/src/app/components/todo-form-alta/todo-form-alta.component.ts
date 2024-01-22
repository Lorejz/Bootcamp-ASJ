import { Component, OnInit } from '@angular/core';
import { ServicioTareasService } from '../../services/servicio-tareas.service';
import { Tareas } from '../../interfaces/tareas';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-todo-form-alta',
  templateUrl: './todo-form-alta.component.html',
  styleUrl: './todo-form-alta.component.css'
})
export class TodoFormAltaComponent implements OnInit {

  constructor( private tareasServicio : ServicioTareasService,public route: ActivatedRoute, public router: Router ){}

  tarea: Tareas = {
    id: 0,
    nombre: "",
    descripcion: "",
    estado: true
  }

  id:any = '';

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.id = params.get('id');
    })
    if(this.id !== null){
      console.log("hay id")
      this.tareasServicio.getTareaById(this.id).subscribe( data =>{
        console.log(data);
        this.tarea = data.body;
      })
      console.log(this.tarea)
    }

  }

  crearTarea(){
    this.tareasServicio.crearTarea(this.tarea).subscribe( mensaje =>{
      console.log("mensaje: "+mensaje)
    })
  }


}
