import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatDialogModule, MatDialogRef, MAT_DIALOG_DATA } from '@angular/material/dialog';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { RouterTestingModule } from '@angular/router/testing';
import { ClienteService } from 'src/app/services/client-service/client-service.service';

import { InativarClienteDialogComponent } from './inativar-cliente-dialog.component';

describe('InativarDialogComponent', () => {
  let component: InativarClienteDialogComponent;
  let fixture: ComponentFixture<InativarClienteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InativarClienteDialogComponent ],
      imports: [
        HttpClientTestingModule,
        RouterTestingModule,
        MatSnackBarModule,
        MatDialogModule
      ],
      providers: [
        ClienteService,
        { provide: MatDialogRef, useValue: {} },
        { provide: MAT_DIALOG_DATA,  useValue: {} }
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InativarClienteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
