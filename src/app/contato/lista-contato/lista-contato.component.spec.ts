import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ListaContatoComponent } from './lista-contato.component';

describe('ListaContatoComponent', () => {
  let component: ListaContatoComponent;
  let fixture: ComponentFixture<ListaContatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [ListaContatoComponent]
    });
    fixture = TestBed.createComponent(ListaContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
