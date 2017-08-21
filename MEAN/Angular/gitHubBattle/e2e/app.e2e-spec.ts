import { GitHubBattlePage } from './app.po';

describe('git-hub-battle App', () => {
  let page: GitHubBattlePage;

  beforeEach(() => {
    page = new GitHubBattlePage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
