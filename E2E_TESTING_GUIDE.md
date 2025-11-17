# E2E Testing Documentation for SIMTOEIC - Login Feature

## Overview
This document contains End-to-End (E2E) testing setup and instructions for the **Login Feature** of SIMTOEIC application using Playwright.

## Test Files Created
1. `e2e/login.spec.js` - Tests for login functionality

## Prerequisites

### 1. Install Dependencies
Make sure Playwright is installed:
```bash
npm install
npx playwright install
```

### 2. Setup Laravel Application
Ensure your Laravel application is running:
```bash
# Start Laravel development server
php artisan serve
```

The application should be accessible at `http://localhost:8000`

### 3. Database Setup
Ensure the database is properly set up with test data:
```bash
# Run migrations
php artisan migrate

# Seed the database with test users
php artisan db:seed --class=UserSeeder
```

## Test User Credentials
The following test user is used (from UserSeeder):

| Role | Identity Number | Password | Description |
|------|----------------|----------|-------------|
| Student | 2022102001 | password123 | Student with success status |

## Running Tests

### Run All E2E Tests
```bash
npx playwright test
```

### Run Login Test Only
```bash
npx playwright test e2e/login.spec.js
```

### Run Tests with UI Mode (Interactive)
```bash
npx playwright test --ui
```

### Run Tests in Headed Mode (See Browser)
```bash
npx playwright test --headed
```

### Debug Mode
```bash
npx playwright test --debug
```

## Test Reports

### View HTML Report
```bash
npx playwright show-report
```

## Test Coverage

### Login Tests (`e2e/login.spec.js`)
- ✅ Display login form correctly
- ✅ Login with valid student credentials
- ✅ Show error for invalid credentials
- ✅ Password visibility toggle

## Configuration

### Playwright Configuration (`playwright.config.js`)
- **Base URL**: `http://localhost:8000` (Laravel development server)
- **Test Directory**: `./e2e`
- **Browser**: Chrome (primary)

## Quick Start

1. **Start Laravel server:**
   ```bash
   php artisan serve
   ```

2. **Run the test:**
   ```bash
   npx playwright test
   ```

3. **View results:**
   ```bash
   npx playwright show-report
   ```

## Troubleshooting

### Common Issues

1. **Tests fail with connection errors**
   - Ensure Laravel server is running on `http://localhost:8000`
   - Check database connection and ensure it's properly seeded

2. **Authentication tests fail**
   - Verify UserSeeder has been run
   - Check if user credentials match those in the test files

### Debug Tips

1. **Use headed mode to see what's happening:**
   ```bash
   npx playwright test --headed
   ```

2. **Use debug mode for step-by-step execution:**
   ```bash
   npx playwright test --debug
   ```