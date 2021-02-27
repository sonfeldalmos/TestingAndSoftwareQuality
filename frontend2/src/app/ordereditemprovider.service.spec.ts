import { TestBed } from '@angular/core/testing';

import { OrdereditemproviderService } from './ordereditemprovider.service';

describe('OrdereditemproviderService', () => {
  let service: OrdereditemproviderService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(OrdereditemproviderService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
