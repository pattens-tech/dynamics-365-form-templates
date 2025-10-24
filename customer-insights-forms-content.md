# How to Create and Manage Forms in D365 Customer Insights

Learn how to effectively create, customize, and deploy forms in **D365 Customer Insights** to capture customer data and manage preferences across your marketing campaigns.

## Understanding Form Types in D365 Customer Insights

Before creating your first form, it's important to understand which form type best suits your needs:

**Marketing Forms** - Use these to capture new leads or update contact information. These forms can target both leads and contacts in your database.

**Event Registration Forms** - Specifically designed for event signups. These only target contacts and include dynamic components for sessions and speakers.

**Preference Centers** - Allow customers to manage their communication preferences and consent settings.

## How to Create Your First Form

### Step 1: Access the Form Editor

Navigate to **Real-time marketing** > **Forms** in your **D365 Customer Insights** environment. Click **New** to start creating a form.

### Step 2: Choose Your Starting Point

You have two options:
- Select a template from the template gallery
- Start from scratch with a blank form

For your first form, using a template saves time and ensures best practices are followed.

### Step 3: Configure Basic Settings

Set these essential configurations:
- **Form name**: Use a clear, descriptive name
- **Form type**: Select Marketing form, Event registration, or Preference center
- **Audience configuration**: Choose between Contact or Lead (for marketing forms only)

## Building Your Form Layout

### Adding Form Fields

The form editor in **D365 Customer Insights** uses a drag-and-drop interface. Here's how to add fields:

1. From the toolbox panel, drag field elements onto your canvas
2. Click each field to configure:
   - **Field mapping**: Link to the correct entity attribute
   - **Display name**: Set user-friendly labels
   - **Validation rules**: Make fields required or set specific formats
   - **Default values**: Pre-populate where appropriate

### Essential Fields to Include

For marketing forms, typically include:
- First Name and Last Name
- Email Address (always required)
- Company Name
- Phone Number
- Marketing preferences checkboxes

## Configuring Form Security

### Enable CAPTCHA Protection

1. In the form editor, navigate to **Settings** > **Security**
2. Toggle on **Enable CAPTCHA**
3. Choose between:
   - Built-in CAPTCHA (ready to use)
   - Custom CAPTCHA service (requires additional configuration)

### Set Domain Authentication

**D365 Customer Insights** only accepts submissions from authenticated domains:

1. Go to **Settings** > **Domain Authentication**
2. Add your website domains to the allowed list
3. Complete the domain verification process
4. Save your changes

## How to Style Your Forms

### Using the Style Editor

Customize your form appearance to match your brand:

1. Click the **Styles** tab in the form editor
2. Adjust:
   - Font family and sizes
   - Color schemes for fields, buttons, and text
   - Spacing and padding
   - Border styles and radius

### Creating Custom CSS

For advanced styling in **D365 Customer Insights** forms:

```css
/* Add custom CSS in the Style Editor */
.form-container {
    max-width: 600px;
    margin: 0 auto;
}

.submit-button {
    background-color: #0078d4;
    color: white;
    padding: 12px 24px;
}
```

## Publishing and Embedding Your Form

### Step 1: Preview Your Form

Always preview before publishing:
- Click **Preview** in the top toolbar
- Test on different device sizes
- Verify all validations work correctly

### Step 2: Publish the Form

1. Click **Publish** in the form editor
2. Choose your publishing method:
   - **Standalone page**: Hosted on D365's domain
   - **Embed on website**: Get the embed code
   - **Reference by ID**: For custom implementations

### Step 3: Implement the Embed Code

For website embedding:

```html
<!-- Copy this code to your website -->
<div data-form-id="YOUR-FORM-ID" 
     data-form-api-url="YOUR-API-URL">
</div>
<script src="YOUR-SCRIPT-URL"></script>
```

## Managing Form Submissions

### Viewing Submissions

1. Navigate to **Forms** in **D365 Customer Insights**
2. Select your form
3. Click the **Submissions** tab
4. View individual submissions or export data

### Setting Up Submission Actions

Configure what happens after form submission:

1. In the form editor, go to **Settings** > **Post-submission**
2. Configure:
   - Thank you message
   - Redirect URL
   - Trigger journeys
   - Update lead/contact records

## How to Create Custom Form Templates

Save time by creating reusable templates:

1. Navigate to **Templates** in the left navigation
2. Click **New template** > **Form**
3. Design your template with:
   - Standard fields and layout
   - Pre-configured styling
   - Default audience settings
   - Consent configurations

4. Save and name your template
5. Access it when creating new forms

## Troubleshooting Common Issues

### Form Not Accepting Submissions

Check these settings in **D365 Customer Insights**:
- Verify domain is authenticated
- Confirm form is published
- Check the 2,000 requests/minute limit hasn't been exceeded
- Ensure required fields are properly mapped

### CAPTCHA Not Working

1. Verify CAPTCHA is enabled in form settings
2. Check that scripts are loading correctly
3. Test in different browsers
4. Consider implementing a third-party CAPTCHA service

### Data Not Syncing to CRM

Ensure:
- Field mappings are correct
- Entity permissions are properly configured
- No duplicate detection rules are blocking submissions
- Check data type compatibility

## Best Practices for D365 Customer Insights Forms

### Performance Optimization

- Keep forms short (5-7 fields maximum)
- Use conditional logic to show/hide fields
- Enable progressive profiling
- Minimize required fields

### Data Quality

- Use dropdown lists for standardized data
- Implement proper validation patterns
- Set clear error messages
- Use placeholder text for guidance

### Compliance Considerations

- Include clear consent checkboxes
- Link to privacy policies
- Use preference centers for opt-out management
- Maintain audit trails of consent

## Advanced Configurations

### Using Lookup Fields

Configure lookup fields to reference existing records:

1. Add a lookup field element
2. Configure the entity and view
3. Set search parameters
4. Enable auto-complete if needed

### Implementing Conditional Logic

Create dynamic forms that adapt based on user input:

1. Select a field that triggers conditions
2. Click **Add condition**
3. Set your if/then rules
4. Configure show/hide actions for other fields

## Monitoring Form Performance

Track your form effectiveness in **D365 Customer Insights**:

1. Go to **Analytics** > **Forms**
2. Review metrics:
   - Submission rate
   - Abandonment rate
   - Field completion times
   - Error frequency

3. Use insights to optimize form design

---

*Keywords: D365 Customer Insights, form creation, form configuration, Customer Insights forms, marketing forms, form embedding, CAPTCHA setup, form templates, form submissions*