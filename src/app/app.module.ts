import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { HttpClientModule } from '@angular/common/http';

import { AppComponent } from './app.component';
import { HeaderComponent } from './layout/header/header.component';
import { HomeComponent } from './views/home/home.component';
import { AsideComponent } from './views/noticia/noticia-list/aside/aside.component';
import { NoticiaListComponent } from './views/noticia/noticia-list/noticia-list.component';
import { NoticiaFormComponent } from './views/noticia/noticia-form/noticia-form.component';
import { NoticiaDetailComponent } from './views/noticia/noticia-detail/noticia-detail.component';
import { AppRoutingModule } from './app-routing.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    HeaderComponent,
    HomeComponent,
    AsideComponent,
    NoticiaListComponent,
    NoticiaFormComponent,
    NoticiaDetailComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    FormsModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
