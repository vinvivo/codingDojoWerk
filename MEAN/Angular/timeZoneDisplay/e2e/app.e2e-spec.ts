import { TimeZoneDisplayPage } from './app.po';

describe('time-zone-display App', () => {
  let page: TimeZoneDisplayPage;

  beforeEach(() => {
    page = new TimeZoneDisplayPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
