import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { ReactiveFormsModule } from '@angular/forms';
import { MatDialogModule } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { ClienteService } from 'src/app/services/client-service/client-service.service';

import { AtualizarClientesComponent } from './atualizar-clientes.component';

describe('AtualizarClientesComponent', () => {
  let component: AtualizarClientesComponent;
  let fixture: ComponentFixture<AtualizarClientesComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtualizarClientesComponent ],
      imports: [
        MatDialogModule,
        MatSnackBarModule,
        ReactiveFormsModule,
        HttpClientTestingModule
      ],
      providers: [
        ClienteService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtualizarClientesComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
