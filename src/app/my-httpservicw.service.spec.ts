import { TestBed } from '@angular/core/testing';

import { MyHttpservicwService } from './my-httpservicw.service';

describe('MyHttpservicwService', () => {
  let service: MyHttpservicwService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(MyHttpservicwService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
