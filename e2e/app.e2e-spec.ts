import { DDDShopPage } from './app.po';

describe('ddd-shop App', () => {
  let page: DDDShopPage;

  beforeEach(() => {
    page = new DDDShopPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
