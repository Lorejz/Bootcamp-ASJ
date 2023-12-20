import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  URL_API = 'https://api.escuelajs.co/api/v1/products';

  // GET productos
  public getUsers():Observable<any> {
    return this.http.get(this.URL_API);
  }

  //GET producto por ID
  public getUserByID(id:any):Observable<any> {
    return this.http.get(this.URL_API+"/"+id)
  }

}
