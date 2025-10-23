## Technical Requirements

This in-depth documentation aims to provide the technical background to how the forms work and what are the basic requirements for creating and using forms used in Dynamics 365.

### Complete Form Example

[View](https://pattens-tech.github.io/dynamics-365-forms/contact-form.html)


### Form element types

Complete list of available form elements:

| Element | `data-editorblocktype` | Purpose |
|---------|----------------------|---------|
| Email field | `Field-email` | Email input |
| Text fields | `Field-firstname`, `Field-lastname` | Text inputs |
| Checkbox | `Field-checkbox` | Checkbox field |
| Submit button | `SubmitButtonBlock` | Form submission (required) |

Optional form elements:

| Custom field | `Field-{name}` | Any CRM field (use logical name) |
| Subscription list | `SubscriptionListBlock` | Subscription options |
| Captcha | `CaptchaBlock` | Captcha verification |
| Reset button | `ResetButtonBlock` | Form reset |
| Forward to friend | `ForwardToFriendBlock` | Forward functionality |

### Default form fields for Contacts & Leads
These may different depending on if you have customized your Dynamics 365 instance.

| Field | Logical name |
|-------|--------------|
| Contact / First Name | firstname |
| Contact / Last Name | lastname |
| Contact / Email | emailaddress1 |
| Lead / First Name | firstname |
| Lead / Last Name | lastname |
| Lead / Email | emailaddress1 |
| Lead / Mobile phone | mobilephone |
| Lead / Company name | companyname |

### Field Properties
Each form field supports the following properties:

| Property | Description | Example |
|----------|-------------|---------|
| Placeholder | Text shown when field is empty | "Enter your email" |
| Default Value | Pre-filled value | "newsletter@example.com" |
| Required | Makes field mandatory | true/false |
| Validation | Input validation rule | Custom RegExp |
| Hidden | Hide field from view | true/false |

## Requirements

Both the header structure and body structure are required in each form in order to function. 

```
├─→ Entire file
│   ├─→ Header (Dynamics 365 tags)
│   ├─→ Header (Style, Fonts)
│   ├─→ Body (Form)
│   └─→ Body (Thank you moddal)
```

### Header

```html
<!DOCTYPE html>
<html lang="en">
<head>
         <!-- Required: Dynamics 365 -->
         <meta type="xrm/designer/setting" name="type" value="marketing-designer-content-editor-document">
         <meta type="xrm/designer/setting" name="layout-editable" value="marketing-designer-layout-editable">
         <meta type="xrm/designer/setting" name="additional-fonts" datatype="font" value="<Inter>">

         <!-- Required: HTML document setup -->
         <meta charset="UTF-8">
         <meta name="viewport" content="width=device-width, initial-scale=1.0">
       
        <!-- Required: Tailwind CSS -->
        <script src="https://cdn.tailwindcss.com"></script>

        <!-- Google Fonts: Roboto -->
        <link rel="preconnect" href="https://fonts.googleapis.com">
        <link rel="preconnect" href="https://fonts.gstatic.com" crossorigin>
        <link href="https://fonts.googleapis.com/css2?family=Roboto:wght@400;500;700&display=swap" rel="stylesheet">
        
        <!-- Required: Tailwind Configuration -->
        <script>
        tailwind.config = {
            theme: {
                extend: {
                    colors: {
                        brand: {
                            DEFAULT: /* @brand-color */ '#0078d4' /* @brand-color */
                        }
                    },
                    fontFamily: {
                        roboto: ['Roboto', 'sans-serif']
                    }
                }
            }
        }
 </script>
</head>
```



### Body (Form)

```html
<body>
  <form class="marketingForm">
    <div data-layout="true" data-layout-version="v2" class="max-w-lg mx-auto p-6 bg-white shadow-lg rounded-2xl">
  

      <!-- Form intro -->

      <div data-editorblocktype="Text" class="mb-2">
        <h1 class="text-3xl font-bold text-center text-sky-900 mb-2">Contact us</h1>
      </div>
      <div data-editorblocktype="Text" class="mb-6">
        <p class="text-center text-gray-600 mb-6">We'd love to hear from you</p>
      </div>

      <!-- Form fields-->
      <div class="mb-4" data-editorblocktype="TextFormField" data-targetaudience="contact" data-targetproperty="firstname" data-prefill="false" data-required="required">
        <label for="firstname" class="block text-gray-800 text-sm font-medium mb-2">First Name</label>
        <input id="firstname" type="text" name="firstname" placeholder="First Name" maxlength="50" required class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400">
      </div>
      <div class="mb-4" data-editorblocktype="TextFormField" data-targetaudience="contact" data-targetproperty="lastname" data-required="required" data-prefill="false">
        <label for="lastname" class="block text-gray-800 text-sm font-medium mb-2">Last Name</label>
        <input id="lastname" type="text" name="lastname" placeholder="Last Name" maxlength="50" required class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400">
      </div>
      <div class="mb-4" data-editorblocktype="TextFormField" data-targetaudience="contact" data-targetproperty="emailaddress1" data-prefill="false" data-required="required">
        <label for="emailaddress1" class="block text-gray-800 text-sm font-medium mb-2">Email</label>
        <input id="emailaddress1" type="email" name="emailaddress1" placeholder="Email" required class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400">
      </div>
      <div class="mb-4" data-editorblocktype="TextAreaFormField" data-targetaudience="contact" data-targetproperty="description" data-prefill="false" data-required="required">
        <label for="description" class="block text-gray-800 text-sm font-medium mb-2">Description</label>
        <textarea id="description" name="description" placeholder="Description" maxlength="2000" required class="w-full p-3 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-sky-400 h-32"></textarea>
      </div>
      <hr class="my-6 border-gray-200">

      <div data-editorblocktype="Text" class="mb-2">
        <h2 class="text-xl font-semibold text-gray-800 mb-2 text-left">Newsletter</h2>
      </div>
      <div data-editorblocktype="Text" class="mb-2">
        <p class="text-gray-600 text-left mb-2">We will send you news, webinars, marketing emails. You can opt out at any time.</p>
      </div>
      <div class="flex items-start mb-4" data-editorblocktype="Topic" data-required="false">
        <input type="checkbox" id="consentTopicCheckbox" name="msdynmkt_topicid;channels;optinwhenchecked" value="b5cfd151-c1ac-f011-bbd3-7c1e522e1eab;Email;true" class="h-4 w-4 text-sky-600 border-gray-300 rounded focus:ring-sky-500">
        <label for="consentTopicCheckbox" class="ml-2 text-sm text-gray-700">Send me the newsletter</label>
      </div>

      <div class="text-center mt-6" data-editorblocktype="SubmitButton">
        <button type="submit" class="bg-sky-700 hover:bg-sky-800 text-white font-semibold py-3 px-6 rounded-lg shadow-md transition-all">Send message</button>
      </div>

      <div data-editorblocktype="Text">
        <p class="text-xs text-gray-400 mt-4 text-center">By selecting Send message, I agree to the Terms of Service and acknowledge the Privacy policy.</p>
      </div>
    </div>


```

### Body (Form)

```html
    <!-- Thank You Modal -->

    <div id="thankYouModal" class="fixed inset-0 bg-black bg-opacity-50 hidden items-center justify-center">
      <div class="bg-white rounded-2xl p-8 shadow-xl text-center max-w-sm">
        <div class="mx-auto mb-4 w-16 h-16 flex items-center justify-center rounded-full bg-green-100 text-green-600 text-3xl">✓</div>
        <h2 class="text-2xl font-bold text-gray-800 mb-2">Thank you!</h2>
        <p class="text-gray-600 mb-4">We've received your message and will get back to you soon.</p>
        <button type="button" class="bg-sky-700 text-white px-6 py-2 rounded-lg hover:bg-sky-800 transition" onclick="closeThankYouModal()">Close</button>
      </div>
    </div>
  </form>
</body>

```

### Advanced styling

Using Tailwind CSS enables faster forms due to the CSS being hosted externally.

1. Typography
   - Use `font-roboto` for consistent font family
   - Headers: `font-medium` (500 weight)
   - Body: `font-normal` (400 weight)

2. Colors
   - Brand color: `text-brand` or `bg-brand`
   - Background: `bg-gray-50` for form background
   - Text: `text-gray-900` for primary text
   - Secondary text: `text-gray-500`

3. Spacing
   - Container padding: `p-8`
   - Between fields: `mb-4`
   - Section spacing: `mb-8`

4. Layout
   - Container width: `max-w-3xl`
   - Center alignment: `mx-auto`
   - Responsive padding: `px-4 sm:px-6 lg:px-8`

     
### Accessibility

All forms should include required accessibility code to support those using assistative technologies to read and fill out forms.

- **Label every field clearly:** Use `<label>` elements linked to inputs via `for` and `id` attributes.
- **Keyboard navigation:** Ensure all interactive elements (fields, buttons, checkboxes) are reachable and usable via Tab/Shift+Tab.
- **ARIA roles and attributes:** Use ARIA attributes (e.g., `aria-required`, `aria-label`, `aria-describedby`) for custom controls or when native semantics are missing.
- **Error messages:** Make error messages visible to screen readers (e.g., use `aria-live="polite"` on error containers).
- **Contrast and focus:** Use sufficient color contrast and clear focus indicators for all controls.
- **Group related fields:** Use `<fieldset>` and `<legend>` for related groups (e.g., consent checkboxes).
- **Accessible submit button:** Ensure the submit button is a `<button>` or `<input type="submit">` and is clearly labeled.


### Credits

This documentation has been re-written from: https://learn.microsoft.com/en-gb/dynamics365/customer-insights/journeys/custom-template-attributes?WT.mc_id=DX-MVP-5003395
