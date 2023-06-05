import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarProjetosComponent } from './listar-projetos.component';

describe('ListarProjetosComponent', () => {
  let component: ListarProjetosComponent;
  let fixture: ComponentFixture<ListarProjetosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarProjetosComponent]
    });
    fixture = TestBed.createComponent(ListarProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
