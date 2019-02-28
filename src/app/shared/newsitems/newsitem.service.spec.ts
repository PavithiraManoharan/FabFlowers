import { TestBed } from '@angular/core/testing';

import { NewsitemService } from './newsitem.service';

describe('NewsitemService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: NewsitemService = TestBed.get(NewsitemService);
    expect(service).toBeTruthy();
  });
});
