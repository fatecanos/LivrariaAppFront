import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivFaturamentoProdutosComponent } from './liv-faturamento-produtos.component';

describe('LivFaturamentoProdutosComponent', () => {
  let component: LivFaturamentoProdutosComponent;
  let fixture: ComponentFixture<LivFaturamentoProdutosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivFaturamentoProdutosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivFaturamentoProdutosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
