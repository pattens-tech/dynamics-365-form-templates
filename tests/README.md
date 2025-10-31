# Testing Documentation

This directory contains automated tests for the contact form template to ensure all functionality works as expected.

## Running Tests

### Quick Start

```bash
# Run all tests (HTML validation + automated tests)
npm test

# Run only HTML validation
npm run test:html

# Run automated test suite
npm run test:serve

# Open browser-based tests
npm run test:browser
```

### Prerequisites

Before running tests, ensure you have Node.js installed and run:

```bash
npm install
```

This will install the required testing dependencies, including `html-validate`.

## Test Files

### 1. `run-tests.js` - Automated Test Suite

A Node.js script that performs comprehensive automated testing of the contact form template.

**What it tests:**
- ✅ HTML5 structure and validity
- ✅ Dynamics 365 required meta tags and attributes
- ✅ Form field presence and configuration
- ✅ Required field attributes
- ✅ Email validation setup
- ✅ Custom validation messages
- ✅ JavaScript validation functions
- ✅ Accessibility (labels, ARIA attributes)
- ✅ Styling and UI components
- ✅ Code quality (inline scripts, comments)

**Usage:**
```bash
node tests/run-tests.js
```

**Expected Output:**
```
╔════════════════════════════════════════════════════════════╗
║     Contact Form Template - Automated Test Suite          ║
╚════════════════════════════════════════════════════════════╝

✓ HTML file exists and is readable
✓ HTML5 doctype is present
✓ UTF-8 charset is declared
...
All tests passed!
```

### 2. `test-contact-form.html` - Browser-Based Tests

An interactive HTML test page that runs tests in a real browser environment.

**Features:**
- 🎯 Interactive test execution
- 📊 Visual test results
- 🖼️ Live form preview in iframe
- ✅ Real browser environment testing

**What it tests:**
- HTML structure validation
- Form field presence and attributes
- JavaScript functionality in browser
- Validation message display
- Modal functionality
- Accessibility features

**Usage:**

Open `tests/test-contact-form.html` in your web browser, or use:

```bash
npm run test:browser
```

The tests will run automatically on page load, or you can click "Run All Tests" to re-run them.

## Test Categories

### HTML Validation Tests

These tests verify the HTML structure is valid and well-formed:

- Doctype declaration
- Character encoding
- Viewport meta tag
- Required meta tags for Dynamics 365
- Proper HTML5 structure

### Form Field Tests

These tests ensure all required form fields are present and properly configured:

- First name field (required)
- Last name field (required)
- Email field (required, type=email)
- Description field (required)
- Newsletter checkbox
- Submit button

### Validation Tests

These tests verify the form validation is working correctly:

- Custom validation message configuration
- Validation message containers
- Email validation function
- Form initialization
- HTML5 novalidate attribute (custom validation enabled)
- Title attributes for custom messages

### Accessibility Tests

These tests ensure the form meets accessibility standards:

- All inputs have associated labels
- Label-input associations (for attributes)
- ARIA attributes where appropriate
- Semantic HTML structure
- Proper form block attributes

### Code Quality Tests

These tests verify code quality and best practices:

- No external JavaScript files (all inline)
- Proper code comments
- Customizable configuration
- Clean code structure

## Continuous Integration

The tests are automatically run via GitHub Actions on every push and pull request. The workflow file is located at `.github/workflows/validate-html.yml`.

## Test Coverage

| Category | Tests | Status |
|----------|-------|--------|
| HTML Structure | 5 | ✅ |
| Dynamics 365 | 2 | ✅ |
| Form Fields | 9 | ✅ |
| Validation | 6 | ✅ |
| Styling & UI | 4 | ✅ |
| Accessibility | 2 | ✅ |
| Code Quality | 3 | ✅ |
| **Total** | **31** | **✅** |

## Writing New Tests

### Adding Tests to `run-tests.js`

```javascript
runner.test('Test description', () => {
  runner.assert(condition, 'Error message if test fails');
});
```

### Adding Tests to `test-contact-form.html`

```javascript
// In the appropriate test function
const element = iframeDoc.querySelector('#element-id');
addResult('Test Name', !!element, 'Optional error message');
```

## Troubleshooting

### Tests fail with "Cannot read contact-form.html"

**Solution:** Ensure you're running tests from the project root directory.

```bash
cd /path/to/Dynamics-365-Customer-Insights-Form-Templates
npm test
```

### Browser tests don't load the form

**Solution:** Make sure you're opening `test-contact-form.html` from a web server or using the file:// protocol with proper CORS settings. The relative path `../templates/contact-form.html` must be accessible.

### npm test command not found

**Solution:** Install Node.js and run `npm install` first.

## Future Test Enhancements

Planned improvements for the test suite:

- [ ] Visual regression testing
- [ ] E2E testing with Playwright
- [ ] Performance testing
- [ ] Cross-browser compatibility tests
- [ ] Mobile responsiveness tests
- [ ] Form submission simulation tests
- [ ] API validation endpoint tests

## Contributing

When adding new features to the contact form:

1. Write tests first (TDD approach)
2. Ensure all existing tests pass
3. Add new tests for your feature
4. Update this README with new test information
5. Run the full test suite before committing

---

**Last Updated:** October 31, 2025  
**Test Suite Version:** 1.0.0
