import { ProjectProductMgmtPage } from './app.po';

describe('project-product-mgmt App', () => {
  let page: ProjectProductMgmtPage;

  beforeEach(() => {
    page = new ProjectProductMgmtPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
