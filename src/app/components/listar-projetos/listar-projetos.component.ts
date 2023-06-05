import { Component, OnInit  } from '@angular/core';
import { Projeto } from 'src/app/models/Projeto';
import { Observable } from 'rxjs';
import { ProjetosService } from 'src/app/services/projetos.service';

@Component({
  selector: 'app-listar-projetos',
  templateUrl: './listar-projetos.component.html',
  styleUrls: ['./listar-projetos.component.css']
})
export class ListarProjetosComponent implements OnInit {

  public projetos$!: Observable<Projeto[]>;

  constructor(private projetosService: ProjetosService) { }

  ngOnInit() {
    this.projetos$ = this.projetosService.listar();
  }
}
