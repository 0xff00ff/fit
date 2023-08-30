import { TestBed } from '@angular/core/testing';

import { BottomTabsService } from './bottom-tabs.service';

describe('BottomTabsService', () => {
  let service: BottomTabsService;

  beforeEach(() => {
    TestBed.configureTestingModule({});
    service = TestBed.inject(BottomTabsService);
  });

  it('should be created', () => {
    expect(service).toBeTruthy();
  });
});
