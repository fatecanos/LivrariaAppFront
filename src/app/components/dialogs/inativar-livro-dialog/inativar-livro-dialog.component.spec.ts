import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InativarLivroDialogComponent } from './inativar-livro-dialog.component';

describe('InativarLivroDialogComponent', () => {
  let component: InativarLivroDialogComponent;
  let fixture: ComponentFixture<InativarLivroDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InativarLivroDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InativarLivroDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
