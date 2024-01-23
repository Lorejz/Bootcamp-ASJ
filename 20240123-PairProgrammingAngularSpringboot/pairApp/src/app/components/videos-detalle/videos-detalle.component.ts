import { Component, OnInit } from '@angular/core';
import { ActivatedRoute, Router } from '@angular/router';
import { VideosService } from '../../services/videos.service';
import { Videos } from '../../interfaces/videos';
import { DomSanitizer, SafeResourceUrl } from '@angular/platform-browser';

@Component({
  selector: 'app-videos-detalle',
  templateUrl: './videos-detalle.component.html',
  styleUrl: './videos-detalle.component.css'
})

export class VideosDetalleComponent implements OnInit{

  safeUrl!: SafeResourceUrl;

  videoId :any = '';

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

  constructor (
    private videoServicio : VideosService,
    public route : ActivatedRoute,
    private sanitizer: DomSanitizer
  ){
  }

  ngOnInit(): void {
    this.route.paramMap.subscribe(params => {
      this.videoId = params.get('id');
      console.log(this.videoId);
      parseInt(this.videoId);
    })
    if (this.videoId !== null) {

      this.videoServicio.getVideoById(this.videoId).subscribe( data => {
        this.video = data;
        this.video.cant_vistas = this.video.cant_vistas + 1;
        this.videoServicio.modificarVideo(this.videoId,this.video).subscribe({})
        this.safeUrl = this.sanitizer.bypassSecurityTrustResourceUrl(this.video.url_video);
        console.log(this.video.url_video)
      })
    }
  }

  incrementarMeGusta(id : number)  {
    this.video.cant_megusta = this.video.cant_megusta + 1;
    this.videoServicio.modificarVideo(id,this.video).subscribe( mensaje => {
      //console.log(mensaje);
    }) 
  }

  incrementarNoMeGusta(id: number){
    this.video.cant_nomegusta = this.video.cant_nomegusta + 1;
    this.videoServicio.modificarVideo(id,this.video).subscribe( mensaje => {
      console.log(mensaje);
    }) 
  }


}
