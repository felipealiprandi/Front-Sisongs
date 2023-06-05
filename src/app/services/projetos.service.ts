import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Projeto } from '../models/Projeto';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class ProjetosService {

  constructor(private http: HttpClient) { }

  public salvarAPI(projeto: Projeto) {

    console.log('mandando pra API');
    this.http.post(environment.API + '/api/projetos', projeto)
      .subscribe(
      () => {
        alert('Projeto salvo com sucesso!');
      },
      err => console.error('Erro ao salvar projeto', err)
    );
  }


  listar() {
    return this.http.get<Projeto[]>(environment.API + '/api/projetos');
  }
}
