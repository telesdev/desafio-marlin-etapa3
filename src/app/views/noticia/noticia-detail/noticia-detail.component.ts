import { Component, OnInit } from '@angular/core';
import { NoticiaService } from 'src/app/shared/service/noticia.service';
import { ActivatedRoute } from '@angular/router';

@Component({
  selector: 'app-noticia-detail',
  templateUrl: './noticia-detail.component.html',
  styleUrls: ['./noticia-detail.component.css']
})
export class NoticiaDetailComponent implements OnInit {

  id: any;

  noticia: any;

  constructor(
    public noticiaService: NoticiaService,
    public route: ActivatedRoute
  ) { }

  ngOnInit(): void {
    this.id = this.route.snapshot.params.id;
    this.getNoticiaById(this.id)
  }

  getNoticiaById(id) {
    this.noticiaService.getNoticiaById(id).subscribe(data => this.noticia = data)
  }

}