import { Component, OnInit } from '@angular/core';
import { FormBuilder } from '@angular/forms';
import { NoticiaService } from '../../../shared/service/noticia.service'

@Component({
  selector: 'app-noticia-form',
  templateUrl: './noticia-form.component.html',
  styleUrls: ['./noticia-form.component.css']
})
export class NoticiaFormComponent implements OnInit {

  checkoutForm;

  buttonIsPressed = false;

  constructor(
    public noticiaService: NoticiaService,
    public formBuilder: FormBuilder,
  ) {
    this.checkoutForm = this.formBuilder.group({
      title: '',
      body: '',
      userId: ''
    });
   }

  ngOnInit(): void {
  }

  onSubmit() {
    this.buttonIsPressed = true;
    const novaNoticia = this.checkoutForm.value
    this.addNoticia(novaNoticia)
  }

  public addNoticia(novaNoticia) {
    this.noticiaService.postNoticia(novaNoticia).subscribe(noticia => (console.log(noticia),novaNoticia = noticia,
      alert(`Você adicionou a seguinte notícia:
      Título: ${novaNoticia.title},
      Corpo: ${novaNoticia.body},
      ID de Usuário: ${novaNoticia.userId}.`)))

  }
}
