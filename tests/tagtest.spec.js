// Include playwright module
const {test, expect} = require('@playwright/test');

// Write a test
test('Test1 @Tag1', async({page}) =>{
    // Go to URL
    await page.goto('https://www.youtube.com/')

    // Search with keywords
    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('Search').fill('cypress ');

    await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
    await page.getByRole('button', { name: 'Search', exact: true }).click();

    await page.waitForTimeout(2000);

    // Click on playlist
    await page.getByRole('link', { name: 'Cypress by    · Playlist' }).click();

    // Validate title
    await expect(page).toHaveTitle('Cypress Tutorial ');

})


// Write a test
test('Test2 @Tag2', async({page}) =>{
    // Go to URL
    await page.goto('https://www.youtube.com/')

    // Search with keywords
    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('Search').fill('cypress ');

    await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
    await page.getByRole('button', { name: 'Search', exact: true }).click();

    await page.waitForTimeout(2000);

    // Click on playlist
    await page.getByRole('link', { name: 'Cypress by    · Playlist' }).click();

    // Validate title
    await expect(page).toHaveTitle('Cypress Tutorial ');

})


// Write a test
test('Test3 @Tag1', async({page}) =>{
    // Go to URL
    await page.goto('https://www.youtube.com/')

    // Search with keywords
    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('Search').fill('cypress ');

    await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
    await page.getByRole('button', { name: 'Search', exact: true }).click();

    await page.waitForTimeout(2000);

    // Click on playlist
    await page.getByRole('link', { name: 'Cypress by    · Playlist' }).click();

    // Validate title
    await expect(page).toHaveTitle('Cypress Tutorial');

})
    