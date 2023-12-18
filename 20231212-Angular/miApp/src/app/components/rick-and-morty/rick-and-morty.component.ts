import { Component, OnInit } from '@angular/core';
import { ServrickandmortyService } from '../../services/rickandmorty/servrickandmorty.service';

@Component({
  selector: 'app-rick-and-morty',
  templateUrl: './rick-and-morty.component.html',
  styleUrl: './rick-and-morty.component.css',
})
export class RickAndMortyComponent implements OnInit {

  personajes: any = [];

  constructor(public rickandmortyService: ServrickandmortyService) {}

  ngOnInit(): void {

    this.rickandmortyService.getDataAPI().subscribe(data=>{ 
      console.log(data);
      this.personajes = data;
     });

  }

}

