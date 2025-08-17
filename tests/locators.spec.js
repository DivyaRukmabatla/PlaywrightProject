// Include playwright module
const {test, expect} = require('@playwright/test');

// Write a test
test('Locators Test', async({page}) =>{

    // by role
    // Go to URL
    await page.goto('https://www.google.com/search?q=cypress+  ');
    await page.getByRole('link',{name:'Images'}).click();

    // by label
    await page.goto('https://www.google.com/');
    await page.getByLabel('Search',{exact:true}).fill('api testing   ');
    await page.getByLabel('Search',{exact:true}).press('Enter');

    // by alt text
    await page.goto('https://github.com/Divya R');
    await page.getByAltText("View Divya R's full-sized avatar").click();

    // by test id
    await page.goto('https://github.com/login');
    await page.getByTestId('username').fill('testers');

    // by text
    await page.goto('https://www.youtube.com/');
    await page.getByText('Cypress   ').click();

    // by title
    await page.goto('https://www.youtube.com/');
    await page.getByTitle('Cypress   ').click();

    // // by xpath
    await page.goto('https://www.youtube.com/');
    await page.locator("//*[@name='search_query']").click();
    await page.locator("//*[@name='search_query']").fill('javascript   ');
    await page.locator("//*[@name='search_query']").press('Enter');

    // // by css selector
    await page.goto('https://www.youtube.com/');
    await page.locator("css=[name='search_query']").click();
    await page.locator("css=[name='search_query']").fill('javascript   ');
    await page.locator("css=[name='search_query']").press('Enter');

    await page.waitForTimeout(3000);

    
})

    