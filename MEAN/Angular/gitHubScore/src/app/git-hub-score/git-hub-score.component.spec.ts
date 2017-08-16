import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { GitHubScoreComponent } from './git-hub-score.component';

describe('GitHubScoreComponent', () => {
  let component: GitHubScoreComponent;
  let fixture: ComponentFixture<GitHubScoreComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ GitHubScoreComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(GitHubScoreComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
