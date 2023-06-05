import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListarOngsComponent } from './listar-ongs.component';

describe('ListarOngsComponent', () => {
  let component: ListarOngsComponent;
  let fixture: ComponentFixture<ListarOngsComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListarOngsComponent]
    });
    fixture = TestBed.createComponent(ListarOngsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
