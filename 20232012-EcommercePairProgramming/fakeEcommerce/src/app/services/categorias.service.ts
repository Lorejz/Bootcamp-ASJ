import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class CategoriasService {

  constructor(private http: HttpClient) { }

  URL_API='https://api.escuelajs.co/api/v1/categories';

  // GET Categorias
  public getCategorias():Observable<any> {
    return this.http.get(this.URL_API);
  }
  
  URL_API_FILTER = 'https://api.escuelajs.co/api/v1/products/?categoryId='

  public getProductsByCategory(id:any):Observable<any>   {
    return this.http.get(this.URL_API_FILTER+id);
  }

}
