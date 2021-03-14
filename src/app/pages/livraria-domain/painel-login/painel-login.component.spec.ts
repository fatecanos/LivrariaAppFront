import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PainelLoginComponent } from './painel-login.component';

describe('PainelLoginComponent', () => {
  let component: PainelLoginComponent;
  let fixture: ComponentFixture<PainelLoginComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ PainelLoginComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(PainelLoginComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
