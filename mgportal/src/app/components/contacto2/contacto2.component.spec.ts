import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Contacto2Component } from './contacto2.component';

describe('Contacto2Component', () => {
  let component: Contacto2Component;
  let fixture: ComponentFixture<Contacto2Component>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ Contacto2Component ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(Contacto2Component);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
