import { ComponentFixture, TestBed } from '@angular/core/testing';

import { GestaoEstoqueComponent } from './gestao-estoque.component';

describe('GestaoEstoqueComponent', () => {
  let component: GestaoEstoqueComponent;
  let fixture: ComponentFixture<GestaoEstoqueComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ GestaoEstoqueComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(GestaoEstoqueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
