import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-productos',
  templateUrl: './productos.component.html',
  styleUrl: './productos.component.css'
})
export class ProductosComponent implements OnInit {

  productos: any = [];

  objetoTitulo: any = {};

  titulo: any;

  precioMin: any;
  precioMax: any;

  constructor(private productService: ProductosService, private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {

    this.productService.getUsers().subscribe((prod) => {
      this.productos = prod;
      this.titulo = this.activatedRoute.snapshot.paramMap.get('titulo');
      this.precioMin = this.activatedRoute.snapshot.paramMap.get('precio-min');
      this.precioMax = this.activatedRoute.snapshot.paramMap.get('precio-max');


      if (this.titulo !== null) {

        if (this.titulo !== "0" && (this.precioMin == null || this.precioMin == "undefined") && (this.precioMax == null) || this.precioMax == "undefined") {
          console.log("Soy el titulo  ..   " + this.titulo)
          this.productService.getProdByTitle(this.titulo).subscribe((res) => {
            this.productos = res;
          })
        }


        if (this.precioMin !== "0" && this.precioMax !== "0" && this.titulo == "0") {
          console.log("Soy el precio  ..   " + this.precioMin)
          this.productService.getProdByPrice(this.precioMin, this.precioMax).subscribe((res) => {
            this.productos = res;
          })
        }


        if (this.titulo !== "0" && this.precioMin !== "undefined" && this.precioMax !== "undefined") {
          console.log("Soy el join")
          this.productService.getProdByPriceByTitle(this.titulo, this.precioMin, this.precioMax).subscribe((res) => {
            this.productos = res;
          })
        }


      }
    })
  }








  cambiarImagen(event: Event) {
    (event.target as HTMLImageElement).src = 'https://www.race.es/revista-autoclub/wp-content/uploads/sites/4/2019/10/los-simpson-30-anos-de-humor-amarillo-2.jpg';
  }


}
