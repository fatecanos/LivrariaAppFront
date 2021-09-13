import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoCuponsComponent } from './gestao-cupons.component';

describe('GestaoCuponsComponent', () => {
  let component: GestaoCuponsComponent;
  let fixture: ComponentFixture<GestaoCuponsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoCuponsComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoCuponsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
