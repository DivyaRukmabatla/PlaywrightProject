// Include playwright module
const { test, expect } = require('@playwright/test');

/**
 * Divya R
 */
test("API Requests Mocking Using Playwright", async ({ page }) => {

    // Mock the api call before navigating
    await page.route('*/**/api/v1/fruits', async route => {
        const json = [
            { name: 'playwright', id: 21 },
            { name: 'cypress', id: 71 },
            { name: 'api testing', id: 72 },
            { name: 'postman', id: 73 },
            { name: 'rest assured', id: 74 },
        ];
        await route.fulfill({ json });
    });

    // Go to the page
    await page.goto('https://demo.playwright.dev/api-mocking');

    // Assert that the mocked values
    await expect(page.getByText('playwright')).toBeVisible();
    await expect(page.getByText('cypress')).toBeVisible();
    await expect(page.getByText('api testing')).toBeVisible();
    await expect(page.getByText('postman')).toBeVisible();
    await expect(page.getByText('rest assured')).toBeVisible();
});

/**
 * Divya R
 */
test('Gets the json from api and adds a new string value', async ({ page }) => {

    // Get the response and add to it
    await page.route('*/**/api/v1/fruits', async route => {
        const response = await route.fetch();
        const json = await response.json();
        json.push({ name: 'playwright', id: 100 });
        json.push({ name: 'cypress', id: 101 });
        json.push({ name: 'api testing', id: 102 });
        json.push({ name: 'postman', id: 103 });
        json.push({ name: 'rest assured', id: 104 });

        // Fulfill using the original response, while patching the response body
        // with the given JSON object.
        await route.fulfill({ response, json });
    });

    // Go to the page
    await page.goto('https://demo.playwright.dev/api-mocking');

    // Assert that the new fruit is visible
    await expect(page.getByText('playwright')).toBeVisible();
    await expect(page.getByText('cypress')).toBeVisible();
    await expect(page.getByText('api testing')).toBeVisible();
    await expect(page.getByText('postman')).toBeVisible();
    await expect(page.getByText('rest assured')).toBeVisible();
});

/**
 * Divya R
 */
test('Record or Modify the HAR file', async ({ page }) => {

    // Get the response from the HAR file
    await page.routeFromHAR('./hars/fruit.har', {
        url: '*/**/api/v1/fruits',
        update: false,
    });

    // Go to the page
    await page.goto('https://demo.playwright.dev/api-mocking');

    // Assert that the fruit is visible
    await expect(page.getByText('playwright')).toBeVisible();
    await expect(page.getByText('cypress')).toBeVisible();
    await expect(page.getByText('api testing')).toBeVisible();
    await expect(page.getByText('postman')).toBeVisible();
    await expect(page.getByText('rest assured')).toBeVisible();
});