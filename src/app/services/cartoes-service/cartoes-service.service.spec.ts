import { TestBed } from '@angular/core/testing';

import { CartoesService } from './cartoes-service.service';

describe('CartoesServiceService', () => {
  let service: CartoesService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CartoesService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
