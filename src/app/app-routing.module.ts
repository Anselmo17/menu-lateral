import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { AppComponent } from './app.component';
import { AjudaComponent } from './component/ajuda/ajuda.component';
import { ContatosComponent } from './component/contatos/contatos.component';
import { QuemSomosComponent } from './component/quem-somos/quem-somos.component';
import { HomeComponent } from './home/home.component';

const routes: Routes = [
  { path: 'quem-somos', component: QuemSomosComponent },
  { path: 'contatos', component: ContatosComponent },
  { path: 'ajuda', component: AjudaComponent },
  { path: '**', component: HomeComponent },
];

@NgModule({
  exports: [RouterModule],
  imports: [RouterModule.forRoot(routes)]
})
export class AppRoutingModule { }
