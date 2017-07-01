import { Angular2BabylonjsPage } from './app.po';

describe('angular2-babylonjs App', () => {
  let page: Angular2BabylonjsPage;

  beforeEach(() => {
    page = new Angular2BabylonjsPage();
  });

  it('should display welcome message', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('Welcome to app!!');
  });
});
