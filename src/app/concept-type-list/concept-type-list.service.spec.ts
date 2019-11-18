import { TestBed } from '@angular/core/testing';

import { ConceptTypeListService } from './concept-type-list.service';

describe('ConceptTypeListService', () => {
  beforeEach(() => TestBed.configureTestingModule({}));

  it('should be created', () => {
    const service: ConceptTypeListService = TestBed.get(ConceptTypeListService);
    expect(service).toBeTruthy();
  });
});
