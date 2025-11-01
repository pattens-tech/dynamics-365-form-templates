# Dynamics 365 Customer Insights - Form Templates

[![License](https://img.shields.io/github/license/pattens-tech/dynamics-365-forms)](LICENSE)
[![HTML Validation](https://img.shields.io/badge/HTML-Valid-brightgreen)](https://validator.w3.org/)
[![GitHub stars](https://img.shields.io/github/stars/pattens-tech/dynamics-365-forms?style=social)](https://github.com/pattens-tech/dynamics-365-forms/stargazers)
[![GitHub forks](https://img.shields.io/github/forks/pattens-tech/dynamics-365-forms?style=social)](https://github.com/pattens-tech/dynamics-365-forms/network/members)

Beautiful, modern, accessible, and customizable form templates for Dynamics 365 Customer Insights - available in both Tailwind CSS and pure CSS3 versions.

![image](https://repository-images.githubusercontent.com/1082111680/671a8db4-7243-45e4-9a30-f3332bd3a4d0)

## Overview

This repository provides custom HTML form templates for Dynamics 365 Customer Insights that break free from the standard default forms. These templates are rebuilt from the ground up with a modern look, advanced features, and full accessibility support.

This repo was inspired by the work of Megan V. Walker, who's content I've used over the years to super-charge my Dynamics knowledge. https://meganvwalker.com

### Form Types and Use Cases

Dynamics 365 has multiple form types: standard forms (such as contact forms), event forms, and preference centers. This repo currently focuses on **standard forms**, with event forms and preference centers coming soon.

### Standard Forms
  - **Purpose:** Capture new leads or contacts
  - **Target:** Lead or contact audience
  - **Usage:** Contact forms, newsletter subscriptions, general inquiries
  - **Features:** Standard form fields, validation, submission handling, consent management

### Form Template Versions

This repository includes **two versions** of the contact form template:

#### 1. **Tailwind CSS Version** (`contact-form.html`)
- Uses Tailwind CSS via CDN for rapid styling
- Minimal custom CSS required
- [View Live Demo](https://pattens-tech.github.io/Dynamics-365-Customer-Insights-Form-Templates/templates/contact-form.html)

#### 2. **Pure CSS3 Version** (`contact-form-css3.html`)
- Built with pure CSS3 and HTML5 standards
- No external CSS frameworks required
- Uses CSS custom properties (variables) for theming
- Modern CSS features: Grid, Flexbox, CSS Variables
- Fully self-contained styling (all CSS inline)

**📊 Need help choosing?** See the [Template Comparison Guide](./TEMPLATE_COMPARISON.md) for detailed differences and recommendations.

**Note:** Both versions use Google Fonts and an optional email validation API. The validation API fails gracefully if unavailable.

## 🎨 Easy Theme Customization

**One template, infinite possibilities!** Simply change a single color value to switch themes.

### Available Color Themes

| Theme | Color Code | Description | Use Case |
|-------|-----------|-------------|----------|
| **🔵 Blue** | `#0078d4` | Professional and trustworthy | Default, tech, corporate |
| **⚫ Corporate** | `#1e293b` | Sleek slate gray | B2B, enterprise, professional |
| **🟣 Vibrant** | `#9333ea` | Bold purple | Creative, events, youth brands |
| **⚪ Minimal** | `#000000` | Classic black and white | Luxury, design studios, modern |
| **🎨 Custom** | `#??????` | Your brand color | Anything you want! |

### How to Change Theme

**For Tailwind CSS Version:**
1. Open `templates/contact-form.html`
2. Find line 53 (the Tailwind configuration)
3. Replace `#0078d4` with your chosen color code
4. Save and you're done!

**For Pure CSS3 Version:**
1. Open `templates/contact-form-css3.html`
2. Find the `:root` CSS variables section (around line 44)
3. Replace `--brand-color: #0078d4;` with your chosen color code
4. Save and you're done!

**Example:**
```javascript
colors: {
    brand: {
        DEFAULT: /* @brand-color */ '#9333ea' /* @brand-color */
        // Changed to Vibrant theme!
    }
}
```

That's it! The entire form (buttons, focus rings, checkboxes) automatically updates to your chosen color.

---

## Prerequisites

Before using these templates, ensure you have:

- **Dynamics 365 Customer Insights** license with Marketing Forms access
- **Marketing Forms Editor** permissions in your D365 instance
- **Basic HTML/CSS knowledge** for customization (optional)
- Understanding of your CRM schema (field logical names)

---

## Quick Start

1. **Choose your template version**
   - **Tailwind CSS Version**: `templates/contact-form.html` (uses Tailwind CSS CDN)
   - **Pure CSS3 Version**: `templates/contact-form-css3.html` (no external frameworks)

2. **Copy the HTML template**
   - Navigate to your chosen template file in this repository
   - Copy the entire HTML content

3. **Access Dynamics 365 Marketing Forms**
   - Log into Dynamics 365 Customer Insights
   - Navigate to **Channels* > **Forms**
   - Click **New** to create a new form

4. **Switch to HTML Editor**
   - In the form editor, switch to **HTML/Code view**
   - Paste the template code

5. **Customize for your CRM**
   - Update `data-targetaudience` attributes (contact or lead)
   - Verify `data-targetproperty` values match your CRM field logical names
   - Modify styling and text content as needed

6. **Test and Publish**
   - Save the form
   - Test submission
   - Publish when ready

---

## Installation & Customization

For detailed technical documentation, see [documentation.md](./documentation.md).

### Basic Customization

**Change Colors:**

The template includes clear instructions at the top of the file. Just change one line:

```javascript
DEFAULT: /* @brand-color */ '#0078d4' /* @brand-color */
```

Replace `#0078d4` with any hex color to instantly theme the entire form!

**Customize Validation Messages:**

Find the `VALIDATION_CONFIG` object in the template and modify the messages:

```javascript
const VALIDATION_CONFIG = {
  messages: {
    required: 'Please fill out this field',
    email: 'Please enter a valid email address',
    emailPersonal: 'Work email is preferred. Personal email detected.',
    emailInvalid: 'This email address is not valid',
    emailValid: 'Email address accepted',
    validating: 'Validating email...'
  },
  // Add or remove personal email domains
  personalDomains: [
    'gmail.com', 'yahoo.com', 'outlook.com', 'hotmail.com', ...
  ]
};
```

**Add Custom Fields:**
```html
<div class="mb-4"
     data-editorblocktype="TextFormField"
     data-targetaudience="contact"
     data-targetproperty="your_field_logical_name"
     data-required="required">
  <label for="your_field" class="block text-gray-800 text-sm font-medium mb-2">
    Your Field Label
  </label>
  <input id="your_field"
         type="text"
         name="your_field_logical_name"
         placeholder="Enter value"
         required
         title="Your custom validation message"
         class="w-full p-3 border border-gray-300 rounded-lg">
  <span class="validation-message text-sm text-red-600 mt-1 hidden"></span>
</div>
```

---

## Tech Stack

### Tailwind CSS Version
- **Tailwind CSS** - via CDN (latest version)
- **Google Fonts** - Roboto font family
- **Vanilla JavaScript** - All inline, no external dependencies
- **HTML5 Form Validation** - Enhanced with custom JavaScript
- **Dynamics 365 Marketing** - Form processing and CRM integration

### Pure CSS3 Version
- **Pure CSS3** - Modern CSS features (Grid, Flexbox, Custom Properties)
- **CSS Variables** - For easy theme customization
- **Google Fonts** - Roboto font family
- **Vanilla JavaScript** - All inline, no external dependencies
- **HTML5 Form Validation** - Enhanced with custom JavaScript
- **Dynamics 365 Marketing** - Form processing and CRM integration

### Development
- **Node.js** - For automated testing (dev dependency only)

### Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

---

## Features

- **🎨 One-Line Theme Switching** - Change the entire color scheme by editing a single value
- **📦 Two Template Versions** - Choose between Tailwind CSS or Pure CSS3
- **✅ Advanced Form Validation** - Client-side HTML5 validation with customizable error messages
- **📧 Email Domain Validation** - Detects personal emails and validates MX records
- **🎯 Customizable Validation Messages** - Easily modify all validation text in the configuration
- **Modern Design** - Clean, professional styling (Tailwind CSS or Pure CSS3)
- **Fully Accessible** - WCAG 2.1 compliant with proper ARIA labels
- **Mobile Responsive** - Works seamlessly on all device sizes
- **Easy Customization** - Change colors, add fields, modify styling with ease
- **Fast Loading** - CDN-hosted or self-contained styling options
- **Thank You Modal** - Built-in success confirmation UI
- **Consent Management** - Newsletter opt-in with topic tracking
- **Single File** - One template to maintain, all JavaScript inline
- **🧪 Fully Tested** - Comprehensive automated test suite with 31+ tests

---

## Testing

This project includes a comprehensive test suite to ensure all functionality works as expected.

### Running Tests

```bash
# Install dependencies
npm install

# Run all tests (HTML validation + automated tests)
npm test

# Run only HTML validation
npm run test:html

# Run automated test suite
npm run test:serve

# Open browser-based interactive tests
npm run test:browser
```

### Test Coverage

The test suite includes 31+ automated tests covering:

- ✅ HTML5 structure and validity
- ✅ Dynamics 365 required attributes
- ✅ Form field configuration
- ✅ Validation functionality
- ✅ Accessibility standards
- ✅ JavaScript functions
- ✅ Code quality

For detailed testing documentation, see [tests/README.md](./tests/README.md).

---

## Troubleshooting

### Common Issues

**Form doesn't submit:**
- Verify `data-targetaudience` matches your target entity (contact or lead)
- Check that `data-targetproperty` values match exact CRM field logical names
- Ensure required Dynamics 365 meta tags are present in `<head>`
- Check browser console for validation errors

**Validation messages not showing:**
- Ensure the validation message containers (`<span class="validation-message">`) are present
- Check that the JavaScript `initFormValidation()` function is running
- Open browser console and look for any JavaScript errors

**Email validation not working:**
- Verify the email validation API endpoint is accessible
- Check network tab in browser dev tools for API call status
- The validation will "fail open" if API is unavailable (won't block submission)

**Styling doesn't appear:**
- Confirm Tailwind CDN script is loaded in the `<head>` section
- Check browser console for any script loading errors
- Verify you're viewing in the latest browser version

**Modal doesn't close:**
- Ensure the `closeThankYouModal()` JavaScript function is included
- Check browser console for JavaScript errors

**Fields not mapping to CRM:**
- Log into D365 and check the exact logical names of your fields
- Update `data-targetproperty` attributes to match exactly (case-sensitive)

**Tests failing:**
- Run `npm install` to ensure all dependencies are installed
- Verify you're running tests from the project root directory
- Check that `templates/contact-form.html` exists and is readable

For more detailed troubleshooting, see the [documentation](./documentation.md).

---

## Roadmap

- [ ] Event registration form templates
- [ ] Preference center templates
- [ ] Multi-step form workflows
- [ ] Dark mode support
- [ ] File upload field support
- [ ] Conditional field visibility
- [ ] Integration with reCAPTCHA
- [ ] Advanced theme customization (gradients, custom fonts)

---

## Contributing

Contributions are welcome! If you'd like to improve these templates:

1. Fork the repository
2. Create a feature branch (`git checkout -b feature/your-feature`)
3. Commit your changes (`git commit -m 'Add your feature'`)
4. Push to the branch (`git push origin feature/your-feature`)
5. Open a Pull Request

Please ensure your code:
- Maintains accessibility standards
- Works across supported browsers
- Includes documentation updates if adding new features
- Follows the existing code style

---

## License

This project is licensed under the MIT License - see the [LICENSE](LICENSE) file for details.

---

## Credits & Resources

- **Microsoft Documentation:** [Custom Template Attributes for Dynamics 365](https://learn.microsoft.com/en-gb/dynamics365/customer-insights/journeys/custom-template-attributes?WT.mc_id=DX-MVP-5003395)
- **Tailwind CSS:** [https://tailwindcss.com](https://tailwindcss.com)
- **Google Fonts:** [https://fonts.google.com](https://fonts.google.com)

---

## Support

For questions or issues:
- Open an issue in this repository
- Check the [documentation.md](./documentation.md) for technical details
- Review [Microsoft's Dynamics 365 Marketing documentation](https://learn.microsoft.com/en-us/dynamics365/customer-insights/)

---

**Made with ❤️ for the Dynamics 365 community**
