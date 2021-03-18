import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { PedidosService } from 'src/app/services/pedidos-service/pedidos.service';

import { PedidosClienteComponent } from './pedidos-cliente.component';

describe('PedidosClienteComponent', () => {
  let component: PedidosClienteComponent;
  let fixture: ComponentFixture<PedidosClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PedidosClienteComponent ],
      imports: [
        HttpClientTestingModule
      ],
      providers: [
        PedidosService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PedidosClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
