import { HttpClient, HttpClientModule } from '@angular/common/http';
import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { CartoesService } from './cartoes-service.service';

describe('CartoesService', () => {
  let service: CartoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(CartoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
