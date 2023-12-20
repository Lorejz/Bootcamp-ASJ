import { Component, OnInit } from '@angular/core';
import { CategoriasService } from '../../services/categorias.service';

@Component({
  selector: 'app-nav-bar',
  templateUrl: './nav-bar.component.html',
  styleUrl: './nav-bar.component.css'
})
export class NavBarComponent implements OnInit {

  categorias: any = [];

  constructor(private categService : CategoriasService) {}

  ngOnInit(): void {
    this.categService.getCategorias().subscribe( (categ) => {
      console.log(categ);

      this.categorias = categ;

    })
  }



}
