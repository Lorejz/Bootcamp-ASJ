import { HttpClient,HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Tareas } from '../interfaces/tareas';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ServicioTareasService {

  constructor( private http:HttpClient ) { }

  URL_API = 'http://localhost:8080/tareas';

  public getTareas() : Observable<any> {
    return this.http.get('http://localhost:8080/tareas')
  }

  public getTareaById(id:number) : Observable<any> {
    return this.http.get('http://localhost:8080/tareas/'+id,{ observe:'response', responseType:'text' })

  }

  public crearTarea(tarea:Tareas): Observable<any>{
    return this.http.post("http://localhost:8080/tareas", tarea, { observe:'response', responseType:'text' }) ;
  }

  public eliminarTarea( id: number) : Observable<any>{
    return this.http.delete("http://localhost:8080/tareas/"+id,{ observe:'response', responseType:'text' })
  }





  public terminarTarea(id : number, tarea : Tareas) : Observable<any> {
    return this.http.put('http://localhost:8080/tareas/'+id,tarea);
  }



}
