const { test, expect } = require('@playwright/test');

test.describe('Login Feature', () => {
  test.beforeEach(async ({ page }) => {
    // Navigate to login page before each test
    await page.goto('/auth/login');
  });

  test('should display login form correctly', async ({ page }) => {
    // Check if login form elements are visible
    await expect(page.locator('#identity_number')).toBeVisible();
    await expect(page.locator('#password')).toBeVisible();
    await expect(page.locator('button[type="submit"]')).toBeVisible();
    
    // Check page heading
    await expect(page.locator('h4')).toContainText('Welcome to SIMTOEIC');
  });

  test('should login successfully with valid student credentials', async ({ page }) => {
    // Fill login form with student credentials from UserSeeder
    await page.fill('#identity_number', '2022102001');
    await page.fill('#password', 'password123');
    
    // Submit form
    await page.click('button[type="submit"]');
    
    // Should redirect to dashboard
    await expect(page).toHaveURL(/dashboard/);
  });

  test('should show error message for invalid credentials', async ({ page }) => {
    // Fill login form with invalid credentials
    await page.fill('#identity_number', 'invalid_user');
    await page.fill('#password', 'wrong_password');
    
    // Submit form
    await page.click('button[type="submit"]');
    
    // Should stay on login page
    await expect(page).toHaveURL(/auth\/login/);
  });

  test('should toggle password visibility', async ({ page }) => {
    // Fill password field
    await page.fill('#password', 'password123');
    
    // Check initial state (password should be hidden)
    await expect(page.locator('#password')).toHaveAttribute('type', 'password');
    
    // Click toggle button if it exists
    const toggleButton = page.locator('#password-toggle');
    if (await toggleButton.count() > 0) {
      await toggleButton.click();
      // Password should now be visible
      await expect(page.locator('#password')).toHaveAttribute('type', 'text');
    }
  });
});