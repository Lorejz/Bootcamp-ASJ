import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { NgbModule } from '@ng-bootstrap/ng-bootstrap';
import { NavnarComponent } from './components/navnar/navnar.component';
import { VideosListadoComponent } from './components/videos-listado/videos-listado.component';
import { VideosDetalleComponent } from './components/videos-detalle/videos-detalle.component';
import { VideosFormComponent } from './components/videos-form/videos-form.component';
import { FormsModule } from '@angular/forms';
import { HttpClientModule } from '@angular/common/http';
import { FooterComponent } from './components/footer/footer.component';

@NgModule({
  declarations: [
    AppComponent,
    NavnarComponent,
    VideosListadoComponent,
    VideosDetalleComponent,
    VideosFormComponent,
    FooterComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    NgbModule,
    FormsModule,
    HttpClientModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
