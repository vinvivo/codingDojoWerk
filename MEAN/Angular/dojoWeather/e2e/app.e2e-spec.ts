import { DojoWeatherPage } from './app.po';

describe('dojo-weather App', () => {
  let page: DojoWeatherPage;

  beforeEach(() => {
    page = new DojoWeatherPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
