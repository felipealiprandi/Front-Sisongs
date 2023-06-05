import { NgModule, isDevMode } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { ServiceWorkerModule } from '@angular/service-worker';
import { ListarOngsComponent } from './components/listar-ongs/listar-ongs.component';
import { CadastrarOngsComponent } from './components/cadastrar-ongs/cadastrar-ongs.component';
import { CadastrarProjetosComponent } from './components/cadastrar-projetos/cadastrar-projetos.component';
import { ListarProjetosComponent } from './components/listar-projetos/listar-projetos.component';
import { FormsModule } from '@angular/forms';
import { HttpClientJsonpModule, HttpClientModule } from '@angular/common/http';
import { MenuComponent } from './components/menu/menu.component';

@NgModule({
  declarations: [
    AppComponent,
    ListarOngsComponent,
    CadastrarOngsComponent,
    CadastrarProjetosComponent,
    ListarProjetosComponent,
    MenuComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    FormsModule,
    HttpClientModule,
    HttpClientJsonpModule,
    ServiceWorkerModule.register('ngsw-worker.js', {
      enabled: !isDevMode(),
      registrationStrategy: 'registerWhenStable:30000'
    })
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
