import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';

import { HttpClientModule } from '@angular/common/http';
import { ServrickandmortyService } from './services/rickandmorty/servrickandmorty.service';


import { MainSectionSimpsonsComponent } from './components/simpsons/main-section-simpsons/main-section-simpsons.component';
import { MainSectionComponent } from './components/todoList/main-section/main-section.component';
import { RickAndMortyComponent } from './components/rick-and-morty/rick-and-morty.component';

const routes: Routes = [
   { path: "simpsons", component : MainSectionSimpsonsComponent },
   { path: "todo", component : MainSectionComponent },
   { path: "rickandmorty", component : RickAndMortyComponent },
];



@NgModule({
  imports: [AppComponent ,RouterModule.forRoot(routes), HttpClientModule],
  exports: [RouterModule],
  providers: [ServrickandmortyService]
})
export class AppRoutingModule { }
