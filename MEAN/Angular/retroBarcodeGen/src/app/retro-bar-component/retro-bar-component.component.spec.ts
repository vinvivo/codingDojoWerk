import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { RetroBarComponentComponent } from './retro-bar-component.component';

describe('RetroBarComponentComponent', () => {
  let component: RetroBarComponentComponent;
  let fixture: ComponentFixture<RetroBarComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ RetroBarComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(RetroBarComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
