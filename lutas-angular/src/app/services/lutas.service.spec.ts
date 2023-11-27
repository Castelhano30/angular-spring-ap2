import { TestBed } from '@angular/core/testing';

import { LutasService } from './lutas.service';

describe('LutasService', () => {
  let service: LutasService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(LutasService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
