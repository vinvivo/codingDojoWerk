import { TeamManagerPage } from './app.po';

describe('team-manager App', () => {
  let page: TeamManagerPage;

  beforeEach(() => {
    page = new TeamManagerPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
