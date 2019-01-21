import { TestBed, inject } from '@angular/core/testing';

import { FakeAuthService } from './fake-auth.service';

describe('FakeAuthService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [FakeAuthService]
    });
  });

  it('should be created', inject([FakeAuthService], (service: FakeAuthService) => {
    expect(service).toBeTruthy();
  }));
});
