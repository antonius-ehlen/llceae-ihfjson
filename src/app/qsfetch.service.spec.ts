import { TestBed } from '@angular/core/testing';

import { QsfetchService } from './qsfetch.service';

describe('QsfetchService', () => {
  let service: QsfetchService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(QsfetchService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
