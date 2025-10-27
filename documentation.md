## Technical Requirements

This in-depth documentation aims to provide the technical background to how the forms work and what are the basic requirements for creating and using forms used in Dynamics 365.

### Complete Form Example

[View](https://pattens-tech.github.io/dynamics-365-forms/templates/contact-form.html)

### Theme Customization

The template uses a single brand color variable that controls the entire form's color scheme. This makes it easy to match your brand with minimal effort.

**How to Change the Theme:**

1. Locate the Tailwind configuration section in the `<head>` (around line 47-63)
2. Find the brand color setting:
   ```javascript
   brand: {
       DEFAULT: /* @brand-color */ '#0078d4' /* @brand-color */
   }
   ```
3. Replace `#0078d4` with your desired hex color code
4. The entire form will automatically update (buttons, focus rings, checkboxes, etc.)

**Pre-defined Theme Colors:**

- **Blue (Default):** `#0078d4` - Professional and trustworthy
- **Corporate:** `#1e293b` - Sleek slate gray
- **Vibrant:** `#9333ea` - Bold purple
- **Minimal:** `#000000` - Classic black and white

**Technical Details:**

The template uses Tailwind CSS's custom color configuration with the `brand` class. Throughout the HTML, elements use:
- `bg-brand` - Background color
- `text-brand` - Text color
- `focus:ring-brand` - Focus ring color
- `border-brand` - Border color (when applicable)

This ensures consistent theming across all form elements with a single color definition.


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

     
