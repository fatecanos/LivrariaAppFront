import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { VendasService } from './vendas.service';

describe('VendasServiceService', () => {
  let service: VendasService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(VendasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
