import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarProjetosComponent } from './cadastrar-projetos.component';

describe('CadastrarProjetosComponent', () => {
  let component: CadastrarProjetosComponent;
  let fixture: ComponentFixture<CadastrarProjetosComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarProjetosComponent]
    });
    fixture = TestBed.createComponent(CadastrarProjetosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
