import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnderecoSubmitterComponent } from './endereco-submitter.component';

describe('EnderecoSubmitterComponent', () => {
  let component: EnderecoSubmitterComponent;
  let fixture: ComponentFixture<EnderecoSubmitterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnderecoSubmitterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(EnderecoSubmitterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
