import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InativarCartaoDialogComponent } from './inativar-cartao-dialog.component';

describe('InativarCartaoDialogComponent', () => {
  let component: InativarCartaoDialogComponent;
  let fixture: ComponentFixture<InativarCartaoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InativarCartaoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InativarCartaoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
