import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ClienteService } from 'src/app/services/client-service/client-service.service';
import { PedidosService } from 'src/app/services/pedidos-service/pedidos.service';

import { DetalhesPedidoComponent } from './detalhes-pedido.component';
import {PedidosModalInterface} from 'src/app/models/interfaces/pedido.interface';

describe('DetalhesPedidoComponent', () => {
  let component: DetalhesPedidoComponent;
  let fixture: ComponentFixture<DetalhesPedidoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ DetalhesPedidoComponent ],
      imports: [
        HttpClientTestingModule,
        MatSnackBarModule,
        MatDialogModule
      ],
      providers: [
        {
          provide: MatDialogRef,
          useValue: {
            idPedido: 1,
            idCliente: 1
          }
        },
        { 
          provide: MAT_DIALOG_DATA, 
          useValue: { 
            data: {
              idPedido: 1,
              idCliente: 1
            } 
          }
        },
        PedidosService,
        ClienteService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(DetalhesPedidoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
