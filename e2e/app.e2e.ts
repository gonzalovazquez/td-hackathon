import { ChorusPage } from './app.po';

describe('chorus App', function() {
  let page: ChorusPage;

  beforeEach(() => {
    page = new ChorusPage();
  });

  it('should display message saying app works', () => {
    page.navigateTo();
    expect(page.getParagraphText()).toEqual('chorus works!');
  });
});
