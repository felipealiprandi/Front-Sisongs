import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { ListarOngsComponent } from './components/listar-ongs/listar-ongs.component';
import { CadastrarOngsComponent } from './components/cadastrar-ongs/cadastrar-ongs.component';
import { ListarProjetosComponent } from './components/listar-projetos/listar-projetos.component';

const routes: Routes = [
  {path: '', pathMatch:'full', redirectTo: 'listar-ongs'},
  {path:'cadastrar-ongs', component:CadastrarOngsComponent},
  {path:'listar-ongs', component:ListarOngsComponent},
  {path:'listar-projetos', component:ListarProjetosComponent},
];

@NgModule({
  imports: [RouterModule.forRoot(routes)],
  exports: [RouterModule]
})
export class AppRoutingModule { }
