import { TestBed } from '@angular/core/testing';

import { DataclothService } from './datacloth.service';

describe('DataclothService', () => {
  let service: DataclothService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(DataclothService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
