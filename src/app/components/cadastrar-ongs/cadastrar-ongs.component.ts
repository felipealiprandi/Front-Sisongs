import { Component} from '@angular/core';
import { Ong } from 'src/app/models/Ong';
import { OngsService } from 'src/app/services/ongs.service';

@Component({
  selector: 'app-cadastrar-ongs',
  templateUrl: './cadastrar-ongs.component.html',
  styleUrls: ['./cadastrar-ongs.component.css']
})
export class CadastrarOngsComponent{
public ong = new Ong();

constructor(
  private ongsService: OngsService
){}

adicionar() {
  this.ongsService.salvar(this.ong);
}

}

