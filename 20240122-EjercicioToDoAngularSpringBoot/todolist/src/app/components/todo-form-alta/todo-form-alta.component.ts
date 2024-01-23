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

  id : number | null = null;

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      //this.id = params.get('id');
      this.id = parseInt(this.route.snapshot.paramMap.get('id')!);
    })
    if(this.id !== null){
      console.log("hay id: "+this.id)
      this.tareasServicio.getTareaById(this.id).subscribe( data =>{
        console.log("data: "+JSON.stringify(data));
        console.dir(data); //para ver el objeto
        this.tarea = data;
        console.log("tarea: "+this.tarea)
      })
      //console.log(this.tarea)
    }

  }

  crearTarea(){
    this.tareasServicio.crearTarea(this.tarea).subscribe( mensaje =>{
      console.log("mensaje: "+mensaje)
    })
  }
  modificarTarea(){
    if(this.id !==null){
      this.tareasServicio.modificarTarea(this.id,this.tarea).subscribe( mensaje =>{
        //console.log("mensaje: "+mensaje)
      } )
    }
  }

}
