import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LivSidenavClienteComponent } from './liv-sidenav-cliente.component';

describe('LivSidenavClienteComponent', () => {
  let component: LivSidenavClienteComponent;
  let fixture: ComponentFixture<LivSidenavClienteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivSidenavClienteComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(LivSidenavClienteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
