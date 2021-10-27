import { HttpClientTestingModule } from '@angular/common/http/testing';
import { ComponentFixture, TestBed } from '@angular/core/testing';
import { MatSnackBarModule } from '@angular/material/snack-bar';
import { CartoesService } from 'src/app/services/cartoes-service/cartoes.service';

import { LivCartoesFormComponent } from './liv-cartoes-form.component';

describe('LivCartoesFormComponent', () => {
  let component: LivCartoesFormComponent;
  let fixture: ComponentFixture<LivCartoesFormComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ LivCartoesFormComponent ],
      imports: [
        MatSnackBarModule,
        HttpClientTestingModule
      ],
      providers: [
        CartoesService
      ]
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
