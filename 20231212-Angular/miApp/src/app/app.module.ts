import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { CommonModule } from '@angular/common';
import { HttpClientModule } from '@angular/common/http';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HeaderComponent } from './components/shared/header/header.component';
import { MainComponent } from './components/main/main.component';
import { MainSidebarComponent } from './components/shared/main-sidebar/main-sidebar.component';
import { MainSectionComponent } from './components/todoList/main-section/main-section.component';
import { MainSectionSimpsonsComponent } from './components/simpsons/main-section-simpsons/main-section-simpsons.component';
import { RickAndMortyComponent } from './components/rick-and-morty/rick-and-morty.component';
import { PipesComponent } from './components/pipes/pipes.component';
import { PipesExampleComponent } from './components/pipes-example/pipes-example.component';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    MainComponent,
    MainSidebarComponent,
    MainSectionComponent,
    MainSectionSimpsonsComponent,
    RickAndMortyComponent,
    PipesComponent,
    PipesExampleComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
