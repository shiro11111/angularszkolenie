import { TestBed, inject } from '@angular/core/testing';

import { GoscieService } from './goscie.service';

describe('GoscieService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [GoscieService]
    });
  });

  it('should be created', inject([GoscieService], (service: GoscieService) => {
    expect(service).toBeTruthy();
  }));
});
