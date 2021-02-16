import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivFooterComponent } from './liv-footer.component';

describe('LivFooterComponent', () => {
  let component: LivFooterComponent;
  let fixture: ComponentFixture<LivFooterComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivFooterComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivFooterComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
