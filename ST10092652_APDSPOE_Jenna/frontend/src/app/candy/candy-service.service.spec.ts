import { TestBed } from '@angular/core/testing';

import { CandyServiceService } from './candy-service.service';

describe('CandyServiceService', () => {
  let service: CandyServiceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(CandyServiceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
