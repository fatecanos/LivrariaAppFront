import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivFaturamentoChartComponent } from './liv-faturamento-chart.component';

describe('LivFaturamentoChartComponent', () => {
  let component: LivFaturamentoChartComponent;
  let fixture: ComponentFixture<LivFaturamentoChartComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivFaturamentoChartComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivFaturamentoChartComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
