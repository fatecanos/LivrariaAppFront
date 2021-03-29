import { ComponentFixture, TestBed } from '@angular/core/testing';
import { UtilsLivroFormService } from 'src/app/services/utils-livro-service/utils-livro-form.service';

import { NovoLivroComponent } from './novo-livro.component';

describe('NovoLivroComponent', () => {
  let component: NovoLivroComponent;
  let fixture: ComponentFixture<NovoLivroComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NovoLivroComponent ],
      providers: [
        UtilsLivroFormService
      ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NovoLivroComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
