import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {

  productos: any = [];

  constructor (private productService : ProductosService){}

  ngOnInit(): void {
    this.productService.getUsers().subscribe( (prod) => {
      console.log(prod)
      this.productos = prod;
    })
  }

  cambiarImagen(event: Event) {
    (event.target as HTMLImageElement).src = 'https://www.race.es/revista-autoclub/wp-content/uploads/sites/4/2019/10/los-simpson-30-anos-de-humor-amarillo-2.jpg';
  }

}



/* subscribe( (data) =>{
  console.log(data);
} ); */