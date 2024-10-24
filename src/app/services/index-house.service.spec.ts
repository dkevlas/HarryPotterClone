import { TestBed } from '@angular/core/testing';

import { IndexHouseService } from './index-house.service';

describe('IndexHouseService', () => {
  let service: IndexHouseService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(IndexHouseService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
