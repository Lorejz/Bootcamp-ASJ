import { Component, OnInit } from '@angular/core';
import { ProductosService } from '../../services/productos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-producto-detalle',
  templateUrl: './producto-detalle.component.html',
  styleUrl: './producto-detalle.component.css'
})
export class ProductoDetalleComponent implements OnInit{

  constructor( private producService: ProductosService, private route:Router, private activatedRoute: ActivatedRoute){}

  producto : any = {};

  idNuevo = this.activatedRoute.snapshot.paramMap.get('id');


  ngOnInit(): void {
    this.producService.getUserByID(this.idNuevo).subscribe( (res)=>{
      console.log(res);
      this.producto = res;
    })
  }

  //LocalStoragre.setItem(“dato”, “1234”)
  //LocalStorage.getItem(“dato”)

  addToCart(){
    console.log(this.producto);
    //primero traerme un arreglo de productos
    let listaProducto:any = [];
    const productos = localStorage.getItem("productos");
    if (productos) { //pregunta si el array productos tiene cosas
      listaProducto = JSON.parse(productos);
    }
    listaProducto.push(this.producto)
    localStorage.setItem("productos", JSON.stringify(listaProducto));
    console.log(listaProducto);
  }

  cambiarImagen(event: Event) {
    (event.target as HTMLImageElement).src = 'https://www.race.es/revista-autoclub/wp-content/uploads/sites/4/2019/10/los-simpson-30-anos-de-humor-amarillo-2.jpg';
  }
}
