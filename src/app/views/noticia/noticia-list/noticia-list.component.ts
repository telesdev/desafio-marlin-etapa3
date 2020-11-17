import { Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/app/shared/service/noticia.service';

@Component({
  selector: 'app-noticia-list',
  templateUrl: './noticia-list.component.html',
  styleUrls: ['./noticia-list.component.css']
})
export class NoticiaListComponent implements OnInit {

  noticias: any;

  constructor(
    public noticiaService: NoticiaService,
  ) { }

  ngOnInit(): void {
    this.getNoticias()
  }

  getNoticias() {
    this.noticiaService.getNoticias().subscribe(data => this.noticias = data)
  }
}
