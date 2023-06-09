import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Ong } from '../models/Ong';
import { environment } from '../environments/environment';
import { OnlineOfflineService } from './online-offline.service';
import Dexie from 'dexie';


@Injectable({
  providedIn: 'root'
})
export class OngsService {

  private db: any;
  constructor(
    private http: HttpClient,
    private readonly onlineOfflineService: OnlineOfflineService)
    {
      this.registrarEventos(onlineOfflineService);
      this.criarDatabase();
    }

    private criarDatabase() {
      this.db = new Dexie('database');
      this.db.version(1).stores({
        ongs: 'nome'
      });
    }

   private registrarEventos(onlineOfflineService: OnlineOfflineService) {

    onlineOfflineService.trocaConexao.subscribe(online => {
      if (online) {
        console.log('Enviando os itens do cache para a API');
        this.enviarItensdoIndexedDb();
      } else {
        console.log('Offline. Salvando em cache.');
      }
    });
  }

  private salvarIndexedDb(ong: Ong) {
    this.db.ongs
      .add(ong)
      .then(async () => {
        const todasOngs: Ong[] = await this.db.ongs.toArray();
        console.log('Item salvo no cache.', todasOngs);
      })
      .catch((err: any) => console.log('erro ao incluir item no IndexedDb', err));
  }

  private async enviarItensdoIndexedDb() {
    const todasOngs: Ong[] = await this.db.ongs.toArray();
    console.log(todasOngs);
    todasOngs.forEach(async (item: Ong) => {

      await this.salvarAPI(item);

      this.db.ong.delete(item.nome).then(() => {
        console.log(`A Ong ${item.nome} foi deletada do IndexedDb`);
      });
    });
  }

  salvar(ong: Ong) {
    if (this.onlineOfflineService.isOnline) {
      this.salvarAPI(ong);
    } else {
      this.salvarIndexedDb(ong);
    }
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
