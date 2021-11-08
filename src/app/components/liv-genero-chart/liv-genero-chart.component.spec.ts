import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivGeneroChartComponent } from './liv-genero-chart.component';

describe('LivGeneroChartComponent', () => {
  let component: LivGeneroChartComponent;
  let fixture: ComponentFixture<LivGeneroChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivGeneroChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivGeneroChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
