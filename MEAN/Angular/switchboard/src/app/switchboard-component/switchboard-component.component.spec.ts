import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SwitchboardComponentComponent } from './switchboard-component.component';

describe('SwitchboardComponentComponent', () => {
  let component: SwitchboardComponentComponent;
  let fixture: ComponentFixture<SwitchboardComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SwitchboardComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SwitchboardComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
