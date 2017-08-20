import { CodepostnetPage } from './app.po';

describe('codepostnet App', () => {
  let page: CodepostnetPage;

  beforeEach(() => {
    page = new CodepostnetPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
