import { TestBed } from '@angular/core/testing';

import { LutasOfService } from './lutas-of.service';

describe('LutasOfService', () => {
  let service: LutasOfService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LutasOfService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
