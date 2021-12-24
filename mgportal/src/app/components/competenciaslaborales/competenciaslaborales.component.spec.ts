import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CompetenciaslaboralesComponent } from './competenciaslaborales.component';

describe('CompetenciaslaboralesComponent', () => {
  let component: CompetenciaslaboralesComponent;
  let fixture: ComponentFixture<CompetenciaslaboralesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CompetenciaslaboralesComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CompetenciaslaboralesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
