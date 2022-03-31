import { TestBed } from '@angular/core/testing';

import { GwuserviceService } from './gwuservice.service';

describe('GwuserviceService', () => {
  let service: GwuserviceService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(GwuserviceService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
