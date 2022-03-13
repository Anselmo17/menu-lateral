import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppComponent } from './app.component';
import { SideBarComponent } from './component/side-bar/side-bar.component';
import { QuemSomosComponent } from './component/quem-somos/quem-somos.component';
import { ContatosComponent } from './component/contatos/contatos.component';
import { AppRoutingModule } from './app-routing.module';
import { AjudaComponent } from './component/ajuda/ajuda.component';
import { HomeComponent } from './home/home.component';

@NgModule({
  declarations: [
    AppComponent,
    SideBarComponent,
    QuemSomosComponent,
    ContatosComponent,
    AjudaComponent,
    HomeComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
