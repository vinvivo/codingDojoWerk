import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { TimeZoneComponentComponent } from './time-zone-component.component';

describe('TimeZoneComponentComponent', () => {
  let component: TimeZoneComponentComponent;
  let fixture: ComponentFixture<TimeZoneComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ TimeZoneComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(TimeZoneComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
