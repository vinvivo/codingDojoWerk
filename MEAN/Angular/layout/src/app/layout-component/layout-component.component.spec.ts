import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { LayoutComponentComponent } from './layout-component.component';

describe('LayoutComponentComponent', () => {
  let component: LayoutComponentComponent;
  let fixture: ComponentFixture<LayoutComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ LayoutComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(LayoutComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
