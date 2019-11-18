import { TestBed } from '@angular/core/testing';

import { AppFrameworkService } from './app-framework.service';

describe('AppFrameworkService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: AppFrameworkService = TestBed.get(AppFrameworkService);
    expect(service).toBeTruthy();
  });
});
