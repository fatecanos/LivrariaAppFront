import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NovoEnderecoFormComponent } from './novo-endereco-form.component';

describe('NovoEnderecoFormComponent', () => {
  let component: NovoEnderecoFormComponent;
  let fixture: ComponentFixture<NovoEnderecoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoEnderecoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoEnderecoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
