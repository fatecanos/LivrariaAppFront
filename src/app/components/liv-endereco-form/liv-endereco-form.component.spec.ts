import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivEnderecoFormComponent } from './liv-endereco-form.component';

describe('LivEnderecoFormComponent', () => {
  let component: LivEnderecoFormComponent;
  let fixture: ComponentFixture<LivEnderecoFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivEnderecoFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivEnderecoFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
