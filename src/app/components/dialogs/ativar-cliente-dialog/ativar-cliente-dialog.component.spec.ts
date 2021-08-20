import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AtivarClienteDialogComponent } from './ativar-cliente-dialog.component';

describe('AtivarClienteDialogComponent', () => {
  let component: AtivarClienteDialogComponent;
  let fixture: ComponentFixture<AtivarClienteDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AtivarClienteDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AtivarClienteDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
