import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { HttpClientModule } from '@angular/common/http';
import { FormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavBarComponent } from './components/nav-bar/nav-bar.component';
import { ProductosComponent } from './components/productos/productos.component';
import { CategoriasComponent } from './components/categorias/categorias.component';
import { ProductoDetalleComponent } from './components/producto-detalle/producto-detalle.component';

import { ProductosService } from './services/productos.service';
import { CarritoComponent } from './components/carrito/carrito.component';
import { FiltrosComponent } from './components/filtros/filtros.component';


@NgModule({
  declarations: [
    AppComponent,
    NavBarComponent,
    ProductosComponent,
    CategoriasComponent,
    ProductoDetalleComponent,
    CarritoComponent,
    FiltrosComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    HttpClientModule,
    FormsModule
  ],
  providers: [ProductosService],
  bootstrap: [AppComponent]
})
export class AppModule { }
