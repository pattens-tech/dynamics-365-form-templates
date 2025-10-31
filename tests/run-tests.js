#!/usr/bin/env node

/**
 * Test Runner for Contact Form Template
 * This script runs automated tests to verify form functionality
 */

const fs = require('fs');
const path = require('path');

// ANSI color codes for terminal output
const colors = {
  reset: '\x1b[0m',
  bright: '\x1b[1m',
  red: '\x1b[31m',
  green: '\x1b[32m',
  yellow: '\x1b[33m',
  blue: '\x1b[34m',
  cyan: '\x1b[36m'
};

class TestRunner {
  constructor() {
    this.tests = [];
    this.passed = 0;
    this.failed = 0;
  }

  /**
   * Add a test
   */
  test(name, fn) {
    this.tests.push({ name, fn });
  }

  /**
   * Assert a condition
   */
  assert(condition, message) {
    if (!condition) {
      throw new Error(message || 'Assertion failed');
    }
  }

  /**
   * Assert equality
   */
  assertEqual(actual, expected, message) {
    if (actual !== expected) {
      throw new Error(message || `Expected ${expected} but got ${actual}`);
    }
  }

  /**
   * Assert that value includes substring
   */
  assertIncludes(haystack, needle, message) {
    if (!haystack.includes(needle)) {
      throw new Error(message || `Expected to find "${needle}" in content`);
    }
  }

  /**
   * Run all tests
   */
  async run() {
    console.log(`${colors.bright}${colors.cyan}`);
    console.log('╔════════════════════════════════════════════════════════════╗');
    console.log('║     Contact Form Template - Automated Test Suite          ║');
    console.log('╚════════════════════════════════════════════════════════════╝');
    console.log(colors.reset);

    for (const test of this.tests) {
      try {
        await test.fn();
        this.passed++;
        console.log(`${colors.green}✓${colors.reset} ${test.name}`);
      } catch (error) {
        this.failed++;
        console.log(`${colors.red}✗${colors.reset} ${test.name}`);
        console.log(`  ${colors.red}${error.message}${colors.reset}`);
      }
    }

    // Print summary
    console.log('\n' + colors.bright + '─'.repeat(60) + colors.reset);
    console.log(`${colors.bright}Test Summary:${colors.reset}`);
    console.log(`  Total:  ${this.tests.length}`);
    console.log(`  ${colors.green}Passed: ${this.passed}${colors.reset}`);
    if (this.failed > 0) {
      console.log(`  ${colors.red}Failed: ${this.failed}${colors.reset}`);
    }
    console.log(colors.bright + '─'.repeat(60) + colors.reset + '\n');

    // Exit with appropriate code
    if (this.failed > 0) {
      console.log(`${colors.red}${colors.bright}Tests failed!${colors.reset}\n`);
      process.exit(1);
    } else {
      console.log(`${colors.green}${colors.bright}All tests passed!${colors.reset}\n`);
      process.exit(0);
    }
  }
}

// Create test runner instance
const runner = new TestRunner();

// Load the contact form HTML
const formPath = path.join(__dirname, '../templates/contact-form.html');
let formHTML = '';

try {
  formHTML = fs.readFileSync(formPath, 'utf8');
} catch (error) {
  console.error(`${colors.red}Error: Could not read contact-form.html${colors.reset}`);
  process.exit(1);
}

// ============================================================
// HTML STRUCTURE TESTS
// ============================================================

runner.test('HTML file exists and is readable', () => {
  runner.assert(formHTML.length > 0, 'HTML file is empty');
});

runner.test('HTML5 doctype is present', () => {
  runner.assert(
    formHTML.trim().startsWith('<!DOCTYPE html>'),
    'HTML5 doctype not found'
  );
});

runner.test('UTF-8 charset is declared', () => {
  runner.assertIncludes(formHTML, 'charset="UTF-8"', 'UTF-8 charset not declared');
});

runner.test('Viewport meta tag is present', () => {
  runner.assertIncludes(formHTML, 'name="viewport"', 'Viewport meta tag not found');
});

runner.test('Page title is present', () => {
  runner.assertIncludes(formHTML, '<title>', 'Title tag not found');
});

// ============================================================
// DYNAMICS 365 REQUIREMENTS
// ============================================================

runner.test('Dynamics 365 meta tags are present', () => {
  runner.assertIncludes(
    formHTML,
    'marketing-designer-content-editor-document',
    'Dynamics 365 content editor meta tag not found'
  );
});

runner.test('Marketing form class is present', () => {
  runner.assertIncludes(
    formHTML,
    'class="marketingForm"',
    'Marketing form class not found'
  );
});

// ============================================================
// FORM FIELDS TESTS
// ============================================================

runner.test('First name field exists', () => {
  runner.assertIncludes(formHTML, 'id="firstname"', 'First name field not found');
});

runner.test('First name field is required', () => {
  const firstnameSection = formHTML.match(/id="firstname"[^>]*>/);
  runner.assert(
    firstnameSection && firstnameSection[0].includes('required'),
    'First name field is not marked as required'
  );
});

runner.test('Last name field exists', () => {
  runner.assertIncludes(formHTML, 'id="lastname"', 'Last name field not found');
});

runner.test('Last name field is required', () => {
  const lastnameSection = formHTML.match(/id="lastname"[^>]*>/);
  runner.assert(
    lastnameSection && lastnameSection[0].includes('required'),
    'Last name field is not marked as required'
  );
});

runner.test('Email field exists', () => {
  runner.assertIncludes(formHTML, 'id="emailaddress1"', 'Email field not found');
});

runner.test('Email field is required', () => {
  const emailSection = formHTML.match(/id="emailaddress1"[^>]*>/);
  runner.assert(
    emailSection && emailSection[0].includes('required'),
    'Email field is not marked as required'
  );
});

runner.test('Email field has type="email"', () => {
  const emailSection = formHTML.match(/id="emailaddress1"[^>]*>/);
  runner.assert(
    emailSection && emailSection[0].includes('type="email"'),
    'Email field does not have type="email"'
  );
});

runner.test('Description field exists', () => {
  runner.assertIncludes(formHTML, 'id="description"', 'Description field not found');
});

runner.test('Description field is required', () => {
  const descSection = formHTML.match(/id="description"[^>]*>/);
  runner.assert(
    descSection && descSection[0].includes('required'),
    'Description field is not marked as required'
  );
});

// ============================================================
// VALIDATION TESTS
// ============================================================

runner.test('Validation message containers exist', () => {
  runner.assertIncludes(
    formHTML,
    'validation-message',
    'Validation message containers not found'
  );
});

runner.test('Custom validation messages are configured', () => {
  runner.assertIncludes(
    formHTML,
    'VALIDATION_CONFIG',
    'Validation configuration not found'
  );
});

runner.test('Email validation function exists', () => {
  runner.assertIncludes(
    formHTML,
    'validateEmailField',
    'Email validation function not found'
  );
});

runner.test('Form initialization function exists', () => {
  runner.assertIncludes(
    formHTML,
    'initFormValidation',
    'Form initialization function not found'
  );
});

runner.test('HTML5 default validation is disabled (novalidate)', () => {
  runner.assertIncludes(
    formHTML,
    "form.setAttribute('novalidate'",
    'Form does not disable HTML5 validation'
  );
});

runner.test('Custom title attributes for validation messages', () => {
  runner.assertIncludes(
    formHTML,
    'title=',
    'Custom title attributes for validation not found'
  );
});

// ============================================================
// STYLING AND UI TESTS
// ============================================================

runner.test('Tailwind CSS CDN is included', () => {
  runner.assertIncludes(
    formHTML,
    'tailwindcss.com',
    'Tailwind CSS CDN not found'
  );
});

runner.test('Thank you modal exists', () => {
  runner.assertIncludes(
    formHTML,
    'id="thankYouModal"',
    'Thank you modal not found'
  );
});

runner.test('Close modal function exists', () => {
  runner.assertIncludes(
    formHTML,
    'closeThankYouModal',
    'Close modal function not found'
  );
});

runner.test('Form styling classes are present', () => {
  runner.assertIncludes(
    formHTML,
    'rounded-lg',
    'Tailwind styling classes not found'
  );
});

// ============================================================
// ACCESSIBILITY TESTS
// ============================================================

runner.test('All form inputs have labels', () => {
  const firstnameLabel = formHTML.includes('for="firstname"');
  const lastnameLabel = formHTML.includes('for="lastname"');
  const emailLabel = formHTML.includes('for="emailaddress1"');
  const descLabel = formHTML.includes('for="description"');
  
  runner.assert(
    firstnameLabel && lastnameLabel && emailLabel && descLabel,
    'Not all inputs have associated labels'
  );
});

runner.test('Form blocks have Dynamics 365 attributes', () => {
  runner.assertIncludes(
    formHTML,
    'data-editorblocktype',
    'Dynamics 365 form block attributes not found'
  );
});

// ============================================================
// CODE QUALITY TESTS
// ============================================================

runner.test('No external JavaScript files (all inline)', () => {
  const hasExternalJS = formHTML.match(/<script[^>]*src=[^>]*\.js/);
  runner.assert(
    !hasExternalJS,
    'External JavaScript file reference found (should be inline)'
  );
});

runner.test('JavaScript is properly commented', () => {
  runner.assertIncludes(
    formHTML,
    'CONFIGURATION',
    'JavaScript configuration section not found or not commented'
  );
});

runner.test('Validation configuration is customizable', () => {
  runner.assertIncludes(
    formHTML,
    'messages:',
    'Customizable validation messages not found'
  );
});

// ============================================================
// RUN ALL TESTS
// ============================================================

runner.run();
