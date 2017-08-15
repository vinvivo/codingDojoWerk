import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { QuoteRanksComponentComponent } from './quote-ranks-component.component';

describe('QuoteRanksComponentComponent', () => {
  let component: QuoteRanksComponentComponent;
  let fixture: ComponentFixture<QuoteRanksComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ QuoteRanksComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(QuoteRanksComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
