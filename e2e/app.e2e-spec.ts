import { FfAppPage } from './app.po';

describe('ff-app App', () => {
  let page: FfAppPage;

  beforeEach(() => {
    page = new FfAppPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!');
  });
});
