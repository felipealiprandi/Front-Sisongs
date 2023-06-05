import { Component, OnInit  } from '@angular/core';
import { Ong } from 'src/app/models/Ong';
import { Observable } from 'rxjs';
import { OngsService } from 'src/app/services/ongs.service';

@Component({
  selector: 'app-listar-ongs',
  templateUrl: './listar-ongs.component.html',
  styleUrls: ['./listar-ongs.component.css']
})
export class ListarOngsComponent implements OnInit {

  public ongs$!: Observable<Ong[]>;

  constructor(private ongsService: OngsService) { }

  ngOnInit() {
    this.ongs$ = this.ongsService.listar();
  }

}
