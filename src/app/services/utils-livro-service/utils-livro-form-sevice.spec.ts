import { HttpClientTestingModule } from '@angular/common/http/testing';
import { TestBed } from '@angular/core/testing';

import { UtilsLivroFormService } from './utils-livro-form.service';

describe('UtilsLivroFormService', () => {
  let service: UtilsLivroFormService;

  beforeEach(() => {
    TestBed.configureTestingModule({
      imports: [
        HttpClientTestingModule
      ]
    });
    service = TestBed.inject(UtilsLivroFormService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
