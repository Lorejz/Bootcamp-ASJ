import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class UsersService {

  constructor(private http: HttpClient) { }

  URL_API = 'https://reqres.in/api/users';

  datosUsuario: any = {
    id: -1,
    name: '',
    job: '',
  };

  //GET Usuarios
  public getUsers() : Observable<any> {

    return this.http.get(this.URL_API);

  }

  //POST usuario
  public createUser(usuario : any){

    return this.http.post(this.URL_API, usuario)

  }

  // ELIMINAR usuario
  public deleteUser(id : any){
    return this.http.delete(this.URL_API + "/" + id);
  }

  // PUT usuario
  public updateUser(usuario : any){
    return this.http.put(this.URL_API + "/" + this.datosUsuario.id, usuario);
  }
  
}
