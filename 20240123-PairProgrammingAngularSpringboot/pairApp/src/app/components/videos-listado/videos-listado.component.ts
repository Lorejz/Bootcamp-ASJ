import { Component, OnInit } from '@angular/core';
import { Videos } from '../../interfaces/videos';
import { VideosService } from '../../services/videos.service';
import { ActivatedRoute, Router } from '@angular/router';

@Component({
  selector: 'app-videos-listado',
  templateUrl: './videos-listado.component.html',
  styleUrl: './videos-listado.component.css'
})
export class VideosListadoComponent implements OnInit{

  constructor ( 
    private videosServicio : VideosService,
    public route: ActivatedRoute,
    public router: Router ) {}

  videos : Videos[] = [];

  busqueda : string = "";
  categoriaBusqueda : String = "";

  ngOnInit(): void {
    this.videosServicio.getVideos().subscribe( data => {
      console.log("mensaje: "+data);
      this.videos=data;
    })
  }

  obtenerCodigoDeEmbed(url: string): string{
    const regex = /\/embed\/([^"\/?]+)/;
    const match = url.match(regex);
    if (match != null){
      const dir_imagen = "http://img.youtube.com/vi/" + match[1] + "/mqdefault.jpg";
      return dir_imagen;
    }
    return "error";
  }

  irHaciaDetalle(id : number){
    this.router.navigate(['/videos-detalle/',id]);
  }

  eliminarVideo(id : number, video : Videos){
    let confirmacion = confirm("Seguro desea eliminar el video: "+video.titulo);
    if(confirmacion){
      this.videosServicio.bajaVideo(id).subscribe( mensaje =>{
        console.log(mensaje);
      })
      location.reload();    
    }
  }



  filtrarVideos(): Videos[] {
    if (!this.busqueda && !this.categoriaBusqueda) {
      return this.videos.filter(video => !video.baja);
    } else {
      const busquedaMinuscula = this.busqueda.toLowerCase();
      const categoriaBusquedaMinuscula = this.categoriaBusqueda.toLowerCase();
  
      return this.videos.filter(video =>
        (video.titulo.toLowerCase().includes(busquedaMinuscula) || !this.busqueda) &&
        (video.nombre_categoria.toLowerCase().includes(categoriaBusquedaMinuscula) || !this.categoriaBusqueda) &&
        !video.baja
      );
    }
  }


}
