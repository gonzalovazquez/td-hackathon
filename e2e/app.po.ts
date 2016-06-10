export class ChorusPage {
  navigateTo() {
    return browser.get('/');
  }

  getParagraphText() {
    return element(by.css('chorus-app h1')).getText();
  }
}
