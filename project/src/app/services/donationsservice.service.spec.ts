import { TestBed } from '@angular/core/testing';

import { DonationsserviceService } from './donationsservice.service';

describe('DonationsserviceService', () => {
  let service: DonationsserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DonationsserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
