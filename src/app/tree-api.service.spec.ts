import { TestBed } from '@angular/core/testing';

import { TreeApiService } from './tree-api.service';

describe('TreeApiService', () => {
  let service: TreeApiService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(TreeApiService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
