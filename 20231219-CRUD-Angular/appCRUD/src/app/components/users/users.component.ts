import { Component, OnInit } from '@angular/core';
import { UsersService } from '../../services/users.service';
import { NgForm } from '@angular/forms';

@Component({
  selector: 'app-users',
  templateUrl: './users.component.html',
  styleUrl: './users.component.css'
})
export class UsersComponent implements OnInit {

  usuarios: any = [];

  constructor(public usersService: UsersService) { }

  // Listado de usuarios
  ngOnInit(): void {
    this.list();
  }

   list(){
    console.log("HTTP GET")
    this.usersService.getUsers().subscribe((res) => {
      console.log('respuesta del GET', res);
      this.usuarios = res.data;
    });
   }

   resetForm(form : NgForm){
    this.usersService.datosUsuario={
      id: -1,
    }

   }

  // Nuevo usuario
  create(form: NgForm) {
    if (!form.valid) {
      alert("formulario invalido!");
      return;
    } else {
      console.log("HTTP POST")
      this.usersService.createUser(form.value).subscribe(
        (res) => {console.log(res)
          this.resetForm(form);
          this.list();
        }
      
      )
    }

  }
  // Eliminar usuario
  delete(id:any){
    let confirmacion = confirm("¿Desea eliminar el usuario? #"+id);
    if(confirmacion){
      this.usersService.deleteUser(id).subscribe(
        (res) => {
          console.log("Respusta de eliminar", res);
          this.list();
        }
      )
    }
  }

  // Modificar usuario
  update(usuario:any){
    console.log(usuario);
    this.usersService.datosUsuario = {
      id: usuario.id,
      name: usuario.first_name,
      job: 'Astrofisico',
    };
  }

}
