import { TestBed } from '@angular/core/testing';

import { WindowCreatorService } from './window-creator.service';

describe('WindowCreatorService', () => {
  let service: WindowCreatorService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(WindowCreatorService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
