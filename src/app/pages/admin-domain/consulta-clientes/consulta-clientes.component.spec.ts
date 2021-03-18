import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ClienteService } from 'src/app/services/client-service/client-service.service';

import { ConsultaClientesComponent } from './consulta-clientes.component';

describe('ConsultaClientesComponent', () => {
  let component: ConsultaClientesComponent;
  let fixture: ComponentFixture<ConsultaClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ConsultaClientesComponent ],
      providers: [
        ClienteService
      ],
      imports: [
        MatSnackBarModule,
        MatDialogModule,
        HttpClientTestingModule
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ConsultaClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
