import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-categorias',
  templateUrl: './categorias.component.html',
  styleUrl: './categorias.component.css'
})
export class CategoriasComponent implements OnInit {

  constructor( private categoService: CategoriasService, private route:Router, private activatedRoute: ActivatedRoute){}

  productosToCategory: any = [];
  idNuevo!:any;

  ngOnInit(): void {
    this.activatedRoute.paramMap.subscribe( (param:any) => {
      this.idNuevo = param.get('id');
      this.categoService.getProductsByCategory(this.idNuevo).subscribe( (res) => {
        this.productosToCategory = res;
      })
    })

  }

  cambiarImagen(event: Event) {
    (event.target as HTMLImageElement).src = 'https://www.race.es/revista-autoclub/wp-content/uploads/sites/4/2019/10/los-simpson-30-anos-de-humor-amarillo-2.jpg';
  }

}
