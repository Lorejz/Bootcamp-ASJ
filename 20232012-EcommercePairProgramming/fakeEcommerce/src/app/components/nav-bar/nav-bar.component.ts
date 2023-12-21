import { Component, OnInit, booleanAttribute } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

  categorias: any = [];
  titulo: any = "";
  precioMin: any;
  precioMax: any;
  url: any = ""

  tituloInput: string = ''; //input del search
  tituloObjeto: object = {};

  constructor(private categService: CategoriasService, private routerActivated: Router,
    private activatedRoute: ActivatedRoute) { }

  ngOnInit(): void {
    this.categService.getCategorias().subscribe((categ) => {
      console.log(categ);
      this.categorias = categ;
    })
    this.precioMin = this.activatedRoute.snapshot.paramMap.get('precio-min');
    this.precioMax = this.activatedRoute.snapshot.paramMap.get('precio-max');

  }


  buscar() {
   /* this.precioMin = this.activatedRoute.snapshot.paramMap.get('precio-min');
    this.precioMax = this.activatedRoute.snapshot.paramMap.get('precio-max');

    if (this.tituloInput  && !(this.precioMin && this.precioMax)) {
      this.url = `all-products/${this.tituloInput}`;
      console.log(this.url + "url: spolo titulo")
    }

    if (this.tituloInput && this.precioMin && this.precioMax) {
      this.url = `all-products/${this.tituloInput}/${this.precioMin}/${this.precioMax}`;
      console.log(this.url + "url: titulo y porecio")
    }*/


  }
}
