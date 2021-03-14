import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CarrinhoFinalizacaoComponent } from './carrinho-finalizacao.component';

describe('CarrinhoFinalizacaoComponent', () => {
  let component: CarrinhoFinalizacaoComponent;
  let fixture: ComponentFixture<CarrinhoFinalizacaoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CarrinhoFinalizacaoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CarrinhoFinalizacaoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
