import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { HomeComponent } from './views/home/home.component';
import { NoticiaDetailComponent } from './views/noticia/noticia-detail/noticia-detail.component';
import { NoticiaFormComponent } from './views/noticia/noticia-form/noticia-form.component';
import { NoticiaListComponent } from './views/noticia/noticia-list/noticia-list.component';

const routes: Routes = [
  { path: '', component: HomeComponent },
  { path: 'list', component: NoticiaListComponent }, 
  { path: 'form', component: NoticiaFormComponent },
  { path: 'detail/:id', component: NoticiaDetailComponent }
]

@NgModule({
  declarations: [],
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
