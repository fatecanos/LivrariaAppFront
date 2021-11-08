import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivRankChartComponent } from './liv-rank-chart.component';

describe('LivRankChartComponent', () => {
  let component: LivRankChartComponent;
  let fixture: ComponentFixture<LivRankChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivRankChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivRankChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
