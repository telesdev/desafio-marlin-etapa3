import { HttpClient, HttpHeaders } from '@angular/common/http';
import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class NoticiaService {

  apiUrl = 'https://jsonplaceholder.typicode.com/posts'

  httpOptions = {
    headers: new HttpHeaders({
      'content-type' : 'application/json'
    }),
    observer: 'response'
  }

  constructor(
    private httpClient: HttpClient
  ) { }

  public getNoticias() {
    return this.httpClient.get(this.apiUrl)
  }

  public getNoticiaById(id) {
    return this.httpClient.get(`${this.apiUrl}/${id}`)
  }

  public postNoticia(noticia) {
    return this.httpClient.post(this.apiUrl, noticia, this.httpOptions)
  }
}
