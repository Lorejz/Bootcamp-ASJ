import { HttpClient } from '@angular/common/http';
import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class ProductosService {

  constructor(private http: HttpClient) { }

  URL_API = 'https://api.escuelajs.co/api/v1/products';

  banderaRenderizado: any = '1';

  // GET productos
  public getUsers(): Observable<any> {
    return this.http.get(this.URL_API);
  }

  //GET producto por ID
  public getUserByID(id: any): Observable<any> {
    return this.http.get(this.URL_API + "/" + id)
  }

  //GET productos by TITLE
  public getProdByTitle(title: string): Observable<any> {
    return this.http.get(this.URL_API + "/?title=" + title)
  }

  //GET productos by PRICE [GET] https://api.escuelajs.co/api/v1/products/price=100
  public getProdByPrice(priceMin: number, priceMax: number) {
    return this.http.get(this.URL_API + "/?price_min=" + priceMin + "&price_max=" + priceMax)
  }


  //GET productos by price range [GET]  https://api.escuelajs.co/api/v1/products/?title=Generic&price_min=900&price_max=1000&categoryId=1
  public getProdByPriceByTitle(titulo: any, priceMin: number, priceMax: number) {
    return this.http.get(this.URL_API + "/?title=" + titulo + "&price_min=" + priceMin + "&price_max=" + priceMax + "&categoryId=1")
  }
}
