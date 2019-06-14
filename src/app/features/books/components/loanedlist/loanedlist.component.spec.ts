import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LoanedlistComponent } from './loanedlist.component';

describe('LoanedlistComponent', () => {
  let component: LoanedlistComponent;
  let fixture: ComponentFixture<LoanedlistComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LoanedlistComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LoanedlistComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
