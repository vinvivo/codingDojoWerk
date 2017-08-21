import { BicycleMarketPage } from './app.po';

describe('bicycle-market App', () => {
  let page: BicycleMarketPage;

  beforeEach(() => {
    page = new BicycleMarketPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
