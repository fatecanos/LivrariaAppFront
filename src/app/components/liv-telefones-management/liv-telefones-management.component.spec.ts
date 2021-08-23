import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivTelefonesManagementComponent } from './liv-telefones-management.component';

describe('LivTelefonesManagementComponent', () => {
  let component: LivTelefonesManagementComponent;
  let fixture: ComponentFixture<LivTelefonesManagementComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivTelefonesManagementComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivTelefonesManagementComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
