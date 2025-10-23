# Dynamics 365 Form Templates

Modern, accessible, and customizable form templates for Dynamics 365 Customer Insights - built with Tailwind CSS.

![image](https://repository-images.githubusercontent.com/1082111680/018e4781-7244-4382-8694-e9b2b21f0b6f)


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

### Form Template Preview
[View Live Demo](https://pattens-tech.github.io/dynamics-365-forms/contact-form.html)

---

## Prerequisites

Before using these templates, ensure you have:

- **Dynamics 365 Customer Insights** license with Marketing Forms access
- **Marketing Forms Editor** permissions in your D365 instance
- **Basic HTML/CSS knowledge** for customization (optional)
- Understanding of your CRM schema (field logical names)

---

## Quick Start

1. **Copy the HTML template**
   - Navigate to `contact-form.html` in this repository
   - Copy the entire HTML content

2. **Access Dynamics 365 Marketing Forms**
   - Log into Dynamics 365 Customer Insights
   - Navigate to **Marketing** > **Marketing Forms**
   - Click **New** to create a new form

3. **Switch to HTML Editor**
   - In the form editor, switch to **HTML/Code view**
   - Paste the template code

4. **Customize for your CRM**
   - Update `data-targetaudience` attributes (contact or lead)
   - Verify `data-targetproperty` values match your CRM field logical names
   - Modify styling and text content as needed

5. **Test and Publish**
   - Save the form
   - Test submission
   - Publish when ready

---

## Installation & Customization

For detailed technical documentation, see [documentation.md](./documentation.md).

### Basic Customization

**Change Brand Colors:**
```html
<script>
tailwind.config = {
    theme: {
        extend: {
            colors: {
                brand: {
                    DEFAULT: '#YOUR-COLOR-HERE'
                }
            }
        }
    }
}
</script>
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
         class="w-full p-3 border border-gray-300 rounded-lg">
</div>
```

---

## Tech Stack

- **Tailwind CSS** - via CDN (latest version)
- **Google Fonts** - Roboto font family
- **Vanilla JavaScript** - Modal functionality
- **Dynamics 365 Marketing** - Form processing and CRM integration

### Browser Support

- Chrome 90+
- Firefox 88+
- Safari 14+
- Edge 90+
- Mobile browsers (iOS Safari 14+, Chrome Mobile)

---

## Features

- **Modern Design** - Clean, professional styling with Tailwind CSS
- **Fully Accessible** - WCAG 2.1 compliant with proper ARIA labels
- **Mobile Responsive** - Works seamlessly on all device sizes
- **Easy Customization** - Utility-first CSS for quick modifications
- **Fast Loading** - CDN-hosted assets for optimal performance
- **Thank You Modal** - Built-in success confirmation UI
- **Consent Management** - Newsletter opt-in with topic tracking

---

## Troubleshooting

### Common Issues

**Form doesn't submit:**
- Verify `data-targetaudience` matches your target entity (contact or lead)
- Check that `data-targetproperty` values match exact CRM field logical names
- Ensure required Dynamics 365 meta tags are present in `<head>`

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

For more detailed troubleshooting, see the [documentation](./documentation.md).

---

## Roadmap

- [ ] Event registration form templates
- [ ] Preference center templates
- [ ] Multi-step form workflows
- [ ] Additional styling themes (dark mode, corporate, minimalist)
- [ ] File upload field support
- [ ] Conditional field visibility
- [ ] Integration with reCAPTCHA

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
