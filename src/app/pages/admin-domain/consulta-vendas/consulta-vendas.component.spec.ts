import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ClienteService } from 'src/app/services/client-service/client-service.service';

import { ConsultaVendasComponent } from './consulta-vendas.component';

describe('ConsultaVendasComponent', () => {
  let component: ConsultaVendasComponent;
  let fixture: ComponentFixture<ConsultaVendasComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaVendasComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        ClienteService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaVendasComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
