import { TestBed } from '@angular/core/testing';

import { MyportfolioService } from './myportfolio.service';

describe('MyportfolioService', () => {
  let service: MyportfolioService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyportfolioService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
