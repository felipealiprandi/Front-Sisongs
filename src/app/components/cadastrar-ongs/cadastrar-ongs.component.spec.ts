import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CadastrarOngsComponent } from './cadastrar-ongs.component';

describe('CadastrarOngsComponent', () => {
  let component: CadastrarOngsComponent;
  let fixture: ComponentFixture<CadastrarOngsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [CadastrarOngsComponent]
    });
    fixture = TestBed.createComponent(CadastrarOngsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
