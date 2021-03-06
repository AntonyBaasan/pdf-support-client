import { browser, by, element } from 'protractor';

xdescribe('Home', () => {

  beforeEach(async () => {
    return await browser.get('/');
  });

  xit('should have an input', async () => {
    const present = await element(by.css('sd-home form input')).isPresent();
    expect(present).toEqual(true);
  });

  xit('should have a list of computer scientists', async () => {
    const text = await element(by.css('sd-home ul')).getText();
    expect(text)
      .toEqual('Edsger Dijkstra\nDonald Knuth\nAlan Turing\nGrace Hopper');
  });

  xit('should add a name to the list using the form', async () => {
    element(by.css('sd-home form input')).sendKeys('Tim Berners-Lee');
    element(by.css('sd-home form button')).click();

    const text = await element(by.css('sd-home ul')).getText();
    expect(text)
      .toEqual('Edsger Dijkstra\nDonald Knuth\nAlan Turing\nGrace Hopper\nTim Berners-Lee');
  });

});
