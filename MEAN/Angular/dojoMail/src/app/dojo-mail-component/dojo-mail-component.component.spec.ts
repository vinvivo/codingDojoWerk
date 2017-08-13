import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { DojoMailComponentComponent } from './dojo-mail-component.component';

describe('DojoMailComponentComponent', () => {
  let component: DojoMailComponentComponent;
  let fixture: ComponentFixture<DojoMailComponentComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ DojoMailComponentComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(DojoMailComponentComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
