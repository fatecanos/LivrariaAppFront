import { ComponentFixture, TestBed } from '@angular/core/testing';
import { RouterTestingModule } from '@angular/router/testing';
import { CarrinhoService } from 'src/app/services/carrinho-service/carrinho-service.service';

import { LivHeaderComponent } from './liv-header.component';

describe('LivHeaderComponent', () => {
  let component: LivHeaderComponent;
  let fixture: ComponentFixture<LivHeaderComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivHeaderComponent ],
      imports: [
        RouterTestingModule
      ]
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
