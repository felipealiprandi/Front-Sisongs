import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ong } from '../models/Ong';
import { environment } from '../environments/environment';

@Injectable({
  providedIn: 'root'
})
export class OngsService {

  constructor(private http: HttpClient) {
   }

  public salvarAPI(ong: Ong) {

    console.log('mandando pra API');
    this.http.post(environment.API + '/api/ongs', ong)
      .subscribe(
      () => {
        alert('Ong salva com sucesso!');
      },
      err => console.error('Erro ao salvar Ong', err)
    );
  }


  listar() {
    return this.http.get<Ong[]>(environment.API + '/api/ongs');
  }
}
