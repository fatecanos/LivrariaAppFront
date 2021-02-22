import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InativarDialogComponent } from './inativar-dialog.component';

describe('InativarDialogComponent', () => {
  let component: InativarDialogComponent;
  let fixture: ComponentFixture<InativarDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InativarDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InativarDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
