import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-carrito',
  templateUrl: './carrito.component.html',
  styleUrl: './carrito.component.css'
})
export class CarritoComponent implements OnInit {

  arrayProductos: any = [];

  arrayAux: any = [];

  ngOnInit(): void {
    const productos = localStorage.getItem('productos');
    if (productos) {
      this.arrayProductos = JSON.parse(productos);
    } else {
      alert("Tu carrito esta vacio! Compra no seas rata")
    }
  }

  delete(id: any) {
    this.arrayAux = this.arrayProductos.filter((prod: any) => {
      return prod.id != id
    })
    localStorage.setItem('productos', JSON.stringify(this.arrayAux));

    this.arrayProductos = this.arrayAux;
  }
}

