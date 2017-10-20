import { browser, by, element } from 'protractor';

xdescribe('App', () => {

  beforeEach(async () => {
    return await browser.get('/');
  });

  xit('should have a title', async () => {
    const title = await browser.getTitle();
    expect(title).toEqual('Welcome to angular-seed!');
  });

  xit('should have <nav>', async () => {
    const present = await element(by.css('sd-app sd-navbar nav')).isPresent();
    expect(present).toEqual(true);
  });

  xit('should have correct nav text for Home', async () => {
    const text = await element(by.css('sd-app sd-navbar nav a:first-child')).getText();
    expect(text).toEqual('HOME');
  });

  xit('should have correct nav text for About', async () => {
    const text = await element(by.css('sd-app sd-navbar nav a:nth-child(2)')).getText();
    expect(text).toEqual('ABOUT');
  });

});
