import { SearchComponent } from './components/search/search.component';
import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { EmpresaComponent } from './components/empresa/empresa.component';
import { ServiciosComponent } from './components/servicios/servicios.component';
import { BlogComponent } from './components/blog/blog.component';
import { CompetenciaslaboralesComponent } from './components/competenciaslaborales/competenciaslaborales.component';
import { PagesnofoundComponent } from './components/pagesnofound/pagesnofound.component';
import { HomeComponent } from './components/home/home.component';
import { BlogPageComponent } from './components/blog/blog-page/blog-page.component';
import { Contacto2Component } from './components/contacto2/contacto2.component';

const routes: Routes = [
  { path: '', redirectTo: '/home', pathMatch: 'full' },
  { path: 'home', component: HomeComponent },
  { path: 'empresa', component: EmpresaComponent },
  { path: 'servicios', component: ServiciosComponent },
  { path: 'blog', component: BlogComponent },
  { path: 'blog/:blog', component: BlogPageComponent },
  { path: 'contacto2', component: Contacto2Component },
  { path: 'competenciaslaborales', component: CompetenciaslaboralesComponent },
  { path: 'search', component: SearchComponent},
  { path: '**', component: PagesnofoundComponent },

];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
