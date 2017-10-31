import { TestBed, inject } from '@angular/core/testing';

import { BubbaService } from './bubba.service';

describe('BubbaService', () => {
  beforeEach(() => {
    TestBed.configureTestingModule({
      providers: [BubbaService]
    });
  });

  it('should be created', inject([BubbaService], (service: BubbaService) => {
    expect(service).toBeTruthy();
  }));
});
