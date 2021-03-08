import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivSidenavAdminComponent } from './liv-sidenav-admin.component';

describe('LivSidenavAdminComponent', () => {
  let component: LivSidenavAdminComponent;
  let fixture: ComponentFixture<LivSidenavAdminComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivSidenavAdminComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivSidenavAdminComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
