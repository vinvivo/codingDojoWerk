import { RetroBarcodeGenPage } from './app.po';

describe('retro-barcode-gen App', () => {
  let page: RetroBarcodeGenPage;

  beforeEach(() => {
    page = new RetroBarcodeGenPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
