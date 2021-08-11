import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ConsultaLivrosComponent } from './consulta-livros.component';

describe('ConsultaLivrosComponent', () => {
  let component: ConsultaLivrosComponent;
  let fixture: ComponentFixture<ConsultaLivrosComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaLivrosComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaLivrosComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
