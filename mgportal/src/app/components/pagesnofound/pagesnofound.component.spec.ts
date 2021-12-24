import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PagesnofoundComponent } from './pagesnofound.component';

describe('PagesnofoundComponent', () => {
  let component: PagesnofoundComponent;
  let fixture: ComponentFixture<PagesnofoundComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PagesnofoundComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PagesnofoundComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
