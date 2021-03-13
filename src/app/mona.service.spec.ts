import { TestBed } from '@angular/core/testing';

import { MonaService } from './mona.service';

describe('MonaService', () => {
  let service: MonaService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MonaService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
