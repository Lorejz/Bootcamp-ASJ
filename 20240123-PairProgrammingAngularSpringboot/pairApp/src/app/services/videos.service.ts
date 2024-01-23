import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { Videos } from '../interfaces/videos';

@Injectable({
  providedIn: 'root'
})
export class VideosService {

  constructor( private http : HttpClient ) { }

  URL_API = "http://localhost:8080/videos"

  //GET ALL VIDEOS
  public getVideos() : Observable<any> {
    return this.http.get(this.URL_API)
  }

  //GET VIDEO
  public getVideoById(id : number) : Observable<any> {
    return this.http.get(this.URL_API+"/"+id)
  }

  //POST
  public crearVideo(video : Videos) : Observable<any> {
    return this.http.post(this.URL_API, video, { observe:'response', responseType:'text' }) ;
  }

  //PUT
  public modificarVideo(id: number, video: Videos) : Observable<any> {
    return this.http.put(this.URL_API+"/"+id,video,{ responseType: 'text' })
  }

  //DELETE LOGICO
  public bajaVideo (id : number) : Observable<any> {
    return this.http.delete( this.URL_API+"/"+id )
  }



}
