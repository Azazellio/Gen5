const playwright = require('playwright');

(async () => {
  for (const browserType of [playwright.chromium]) {
    const browser = await browserType.launch();
    const context = await browser.newContext();
    const page = await context.newPage();

    await page.goto('https://www.demoblaze.com/index.html');

    await page.click('id=login2');
    await page.fill('#loginusername', 'oniquejuster');
    await page.fill('#loginpassword', '1234Qwerty');

    await page.keyboard.press("Tab");
    await page.keyboard.press("Tab");
    await page.keyboard.press("Enter");

    const delay = ms => new Promise(resolve => setTimeout(resolve, ms));
    await delay(5000);

    await page.goto('https://www.demoblaze.com/prod.html?idp_=9');

    await delay(4000);
    
    for (var i = 0; i < 10; i++) 
    {
      await page.keyboard.press("Tab"); 
    }
    
    await page.keyboard.press("Enter"); 
    await page.goto('https://www.demoblaze.com/cart.html#');
    await delay(4000);
    const screenshot =  `LaptopInCart.${browserType.name()}.png`;
    await page.screenshot({ path: "./src/" + screenshot }); 

    for (var i = 0; i < 8; i++) 
    {
      await page.keyboard.press("Tab"); 
    }
    await page.keyboard.press("Enter"); 
    await delay(5000);
    const screenshot2 =  `LaptopInCartEmpty.${browserType.name()}.png`;
    await page.screenshot({ path: "./src/" + screenshot2 }); 
    await browser.close();

  }
})();