// Include  module
const { test, expect } = require('@playwright/test');

// Write a test
test('Assertions in ', async({page}) =>{

    console.log('Assertions in  test is running...!')

    // Go to URL
    await page.goto('https://www.google.com/search?q=+')

    // assert url
    await expect(page).toHaveURL('https://www.google.com/search?q=+')

    // assert title
    await expect(page).toHaveTitle(' - Google Search')

    // assert text
    await expect(page.locator("[aria-label='Search']").first()).toHaveText('')

    //assert editable enabled visible
    await expect(page.locator("[aria-label='Search']").first()).toBeEditable();
    await expect(page.locator("[aria-label='Search']").first()).toBeVisible();
    await expect(page.locator("[aria-label='Search']").first()).toBeEnabled();

    //assert disabled empty count
    //await expect(page.locator("[aria-label='Search']").first()).toBeDisabled();

    await expect(page.locator("[aria-label='Search']").first()).not.toBeEmpty();

    await expect(page.locator("[aria-label='Search']")).toHaveCount(2)

    await page.waitForTimeout(5000);
})

    