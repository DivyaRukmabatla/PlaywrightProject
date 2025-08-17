// Include playwright module
const {test, expect} = require('@playwright/test');

// Write a test
test('Mouse actions in playwright', async({page}) =>{
    // Go to URL
    await page.goto('https://www.google.com/search?q=testing');

    // click
    //await page.getByRole('link',{name:'Testers '}).first().click();

    // double click 
    //await page.getByRole('link',{name:'Testers '}).first().dblclick();

    // mouse right click
    // await page.getByRole('link',{name:'Testers '}).first().click({button:'right'})

    // mouse middle click
    //await page.getByRole('link',{name:'Testers '}).first().click({button:'middle'})

    // mouse left click
    //await page.getByRole('link',{name:'Testers '}).first().click({button:'left'})

    // mouse hover
    await page.locator("[aria-label='Search by voice']").hover();

    await page.waitForTimeout(5000);

})

    