import { ComponentFixture, TestBed } from '@angular/core/testing';

import { InativarEnderecoDialogComponent } from './inativar-endereco-dialog.component';

describe('InativarEnderecoDialogComponent', () => {
  let component: InativarEnderecoDialogComponent;
  let fixture: ComponentFixture<InativarEnderecoDialogComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ InativarEnderecoDialogComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(InativarEnderecoDialogComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
