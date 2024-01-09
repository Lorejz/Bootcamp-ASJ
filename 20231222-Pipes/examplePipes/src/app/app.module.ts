import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { EjercicioComponent } from './components/ejercicio/ejercicio.component';

import { PrimoPipe } from './pipes/primos.pipe';

@NgModule({
  declarations: [
    AppComponent,
    EjercicioComponent,
    PrimoPipe
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
