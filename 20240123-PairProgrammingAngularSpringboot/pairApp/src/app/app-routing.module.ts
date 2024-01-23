import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { VideosListadoComponent } from './components/videos-listado/videos-listado.component';
import { VideosFormComponent } from './components/videos-form/videos-form.component';
import { VideosDetalleComponent } from './components/videos-detalle/videos-detalle.component';


const routes: Routes = [
  { path: '',
  children: [
    { path: '', component: VideosListadoComponent },
    { path: 'home', component: VideosListadoComponent } 
  ]
  },

  { path: 'alta-video',
  children: [
    { path: '', component: VideosFormComponent },  
  ]
  },

  { path: 'videos-detalle',
  children: [
    { path: '', component: VideosDetalleComponent },
    { path: ':id', component: VideosDetalleComponent },
  ]
  },

  

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule {}
