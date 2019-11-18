import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { ConceptTypeListComponent } from './concept-type-list.component';

describe('ConceptTypeListComponent', () => {
  let component: ConceptTypeListComponent;
  let fixture: ComponentFixture<ConceptTypeListComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ ConceptTypeListComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(ConceptTypeListComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
