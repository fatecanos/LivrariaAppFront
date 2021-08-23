import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InativarTelefoneDialogComponent } from './inativar-telefone-dialog.component';

describe('InativarTelefoneDialogComponent', () => {
  let component: InativarTelefoneDialogComponent;
  let fixture: ComponentFixture<InativarTelefoneDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InativarTelefoneDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InativarTelefoneDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
