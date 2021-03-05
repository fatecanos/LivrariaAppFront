import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivCartoesFormComponent } from './liv-cartoes-form.component';

describe('LivCartoesFormComponent', () => {
  let component: LivCartoesFormComponent;
  let fixture: ComponentFixture<LivCartoesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivCartoesFormComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivCartoesFormComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
