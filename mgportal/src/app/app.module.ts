import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule, ReactiveFormsModule} from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { HomeComponent } from './components/home/home.component';
import { NavbarComponent } from './components/shared/navbar/navbar.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { BlogComponent } from './components/blog/blog.component';

import { FooterComponent } from './components/shared/footer/footer.component';
import { PagesnofoundComponent } from './components/pagesnofound/pagesnofound.component';
import { CompetenciaslaboralesComponent } from './components/competenciaslaborales/competenciaslaborales.component';
import { HttpClientModule } from '@angular/common/http';
import { BlogPageComponent } from './components/blog/blog-page/blog-page.component';
import { SpinnerComponent } from './components/shared/spinner/spinner.component';
import { Contacto2Component } from './components/contacto2/contacto2.component';
import { SearchComponent } from './components/search/search.component';


@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    NavbarComponent,
    ServiciosComponent,
    EmpresaComponent,
    BlogComponent,
    FooterComponent,
    PagesnofoundComponent,
    CompetenciaslaboralesComponent,
    BlogPageComponent,
    SpinnerComponent,
    Contacto2Component,
    SearchComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    HttpClientModule,
    ReactiveFormsModule,
    FormsModule,
  
    
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
