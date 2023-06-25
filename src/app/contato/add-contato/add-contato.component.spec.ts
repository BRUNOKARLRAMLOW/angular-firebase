import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AddContatoComponent } from './add-contato.component';

describe('AddContatoComponent', () => {
  let component: AddContatoComponent;
  let fixture: ComponentFixture<AddContatoComponent>;

  beforeEach(() => {
    TestBed.configureTestingModule({
      declarations: [AddContatoComponent]
    });
    fixture = TestBed.createComponent(AddContatoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
