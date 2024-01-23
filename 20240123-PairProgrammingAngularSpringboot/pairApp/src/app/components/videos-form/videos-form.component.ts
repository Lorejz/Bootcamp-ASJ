import { Component } from '@angular/core';
import { Videos } from '../../interfaces/videos';
import { VideosService } from '../../services/videos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-videos-form',
  templateUrl: './videos-form.component.html',
  styleUrl: './videos-form.component.css'
})
export class VideosFormComponent {

constructor(
  private videosServicio : VideosService,
  public route: ActivatedRoute,
  public router: Router
  ){}

video : Videos = {
  id: 0,
  url_video: "",
  nombre_categoria: "",
  titulo: "",
  descripcion: "",
  cant_vistas: 0,
  cant_megusta: 0,
  cant_nomegusta: 0,
  baja: false
}


altaVideo(){

  this.videosServicio.crearVideo(this.video).subscribe( mensaje =>{
    console.log("el mensaje es: "+mensaje)
  })
  this.router.navigate([""])
}

}
