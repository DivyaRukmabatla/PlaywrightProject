// Include playwright module
const {test, expect} = require('@playwright/test');

test.beforeEach('Run before each test', async({page}) =>{
    console.log('Running before each test...!')

    // Go to URL
    await page.goto('https://www.youtube.com/')
})

test.beforeAll('Run before all test', async() =>{
    console.log('Running before all test...!')
})

test.afterEach('Run after each test', async({page}) =>{
    console.log('Running after each test...!')
})

test.afterAll('Run after all test', async() =>{
    console.log('Running after all test...!')
})

// Write a testa
test('Hooks in playwright', async({page}) =>{
    
    // Search with keywords
    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('Search').fill('cypress ');

    await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
    await page.getByRole('button', { name: 'Search', exact: true }).click();

    await page.waitForTimeout(5000);

    // Click on playlist
    await page.getByRole('link', { name: 'Cypress Playlist' }).click();

    // Validate title
    await expect(page).toHaveTitle('Cypress Tutorial');

})

// Write a testa
test('Hooks in playwright2', async({page}) =>{
    
    // Search with keywords
    await page.getByPlaceholder('Search').click();
    await page.getByPlaceholder('Search').fill('api testing ');

    await expect(page.getByRole('button', { name: 'Search', exact: true })).toBeEnabled();
    await page.getByRole('button', { name: 'Search', exact: true }).click();

    await page.waitForTimeout(5000);
})

    