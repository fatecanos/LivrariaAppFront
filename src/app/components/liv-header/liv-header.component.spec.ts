import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivHeaderComponent } from './liv-header.component';

describe('LivHeaderComponent', () => {
  let component: LivHeaderComponent;
  let fixture: ComponentFixture<LivHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivHeaderComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivHeaderComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
