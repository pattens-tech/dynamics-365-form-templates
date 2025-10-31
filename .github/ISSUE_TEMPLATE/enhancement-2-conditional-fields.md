---
name: Enhancement - Conditional Field Visibility
about: Add support for showing/hiding fields based on user input
title: '🔄 Add Conditional Field Visibility Support'
labels: enhancement, feature-request, medium-priority
assignees: ''
---

## 🎯 Enhancement Overview

Add support for showing/hiding form fields dynamically based on user selections, enabling adaptive form behavior.

## 💼 Business Value

- **Reduced form clutter** - Only show relevant fields
- **Personalized experience** - Forms adapt to user choices
- **Better data quality** - Collect appropriate information based on context
- **Increased flexibility** - One form template for multiple use cases
- **Higher completion rates** - Users only see fields that apply to them

## 📋 Detailed Description

Implement a declarative system for conditional field visibility using HTML data attributes. Fields can be shown or hidden based on the values of other fields.

### User Story
```
As a form administrator,
I want to show/hide fields based on user input,
So that users only see relevant questions and the form feels personalized.
```

## 🔧 Technical Approach

### HTML Attribute Syntax
```html
<!-- Show company field only if email is NOT personal -->
<div class="mb-4" 
     data-show-if="emailaddress1:not-personal"
     data-transition="fade"
     style="display: none;">
  <label for="company">Company Name</label>
  <input id="company" type="text" name="company">
</div>

<!-- Show event field only when event checkbox is checked -->
<div class="mb-4" 
     data-show-if="event_interest:checked">
  <label for="event_date">Preferred Event Date</label>
  <input id="event_date" type="date" name="event_date">
</div>

<!-- Show other text field when "Other" is selected in dropdown -->
<div class="mb-4"
     data-show-if="interest:equals:other">
  <label for="other_interest">Please specify</label>
  <input id="other_interest" type="text" name="other_interest">
</div>
```

### Condition Engine
```javascript
const CONDITION_TYPES = {
  'equals': (fieldValue, targetValue) => fieldValue === targetValue,
  'not-equals': (fieldValue, targetValue) => fieldValue !== targetValue,
  'contains': (fieldValue, targetValue) => fieldValue.includes(targetValue),
  'not-contains': (fieldValue, targetValue) => !fieldValue.includes(targetValue),
  'checked': (fieldValue) => fieldValue === true,
  'not-checked': (fieldValue) => fieldValue === false,
  'not-empty': (fieldValue) => fieldValue.trim() !== '',
  'is-empty': (fieldValue) => fieldValue.trim() === '',
  'not-personal': (fieldValue) => !isPersonalEmail(fieldValue),
  'is-personal': (fieldValue) => isPersonalEmail(fieldValue)
};
```

## ✅ Acceptance Criteria

### Core Functionality
- [ ] Support for `data-show-if` attribute on form field containers
- [ ] Multiple condition types (equals, not-equals, contains, checked, not-empty)
- [ ] Chained conditions (field C depends on field B, which depends on field A)
- [ ] Multiple conditions on single field (AND/OR logic)
- [ ] Custom condition functions (e.g., email domain checks)

### UI/UX
- [ ] Smooth CSS animations for field appearance (fade, slide)
- [ ] Configurable transition type via `data-transition` attribute
- [ ] Hidden fields maintain proper spacing
- [ ] No layout jumps when fields appear/disappear

### Validation
- [ ] Validation only applies to visible fields
- [ ] Hidden fields are not required
- [ ] Re-validation when field becomes visible
- [ ] Clear validation errors when field is hidden

### Technical
- [ ] Real-time evaluation on field changes
- [ ] Efficient DOM updates (no performance issues)
- [ ] Works with all input types (text, checkbox, radio, select)
- [ ] Maintains single-file architecture
- [ ] Well-documented code with examples

### Compatibility
- [ ] All existing Dynamics 365 integration maintained
- [ ] Works with existing form validation
- [ ] No breaking changes to existing forms
- [ ] Backward compatible (forms without conditions work as before)

## 🎨 Example Use Cases

### 1. Business vs. Personal Email
```html
<!-- Show company field for work emails -->
<div data-show-if="emailaddress1:not-personal">
  <input id="company" type="text" name="company" placeholder="Company Name">
</div>
```

### 2. Interest-Based Fields
```html
<!-- Show event date picker when user is interested in events -->
<div data-show-if="interest:equals:events">
  <input id="event_date" type="date" name="event_date">
</div>
```

### 3. Other Specification
```html
<!-- Classic "Other" text field pattern -->
<div data-show-if="industry:equals:other">
  <input id="industry_other" type="text" placeholder="Please specify">
</div>
```

### 4. Multiple Conditions (AND)
```html
<!-- Show only if both conditions are true -->
<div data-show-if="emailaddress1:not-empty AND interest:equals:demo">
  <input id="demo_date" type="date">
</div>
```

### 5. Multiple Conditions (OR)
```html
<!-- Show if either condition is true -->
<div data-show-if="role:equals:developer OR role:equals:admin">
  <input id="technical_details" type="text">
</div>
```

## 🔍 Implementation Considerations

### Performance
- Use event delegation for efficiency
- Debounce condition evaluation
- Only check conditions for fields with dependencies
- Minimize DOM queries

### Edge Cases
- Circular dependencies (A depends on B, B depends on A)
- Deeply nested conditions
- Multiple fields triggering same condition
- Initial page load state

### Accessibility
- Announce field visibility changes to screen readers
- Maintain logical tab order
- ARIA attributes for hidden fields
- Keyboard navigation support

## 📚 Documentation Requirements

- [ ] Add conditional fields section to README
- [ ] Document all supported condition types
- [ ] Provide 5+ real-world examples
- [ ] Create troubleshooting guide
- [ ] Update CHANGELOG with feature
- [ ] Add JSDoc comments to condition engine

## 🧪 Testing Requirements

New tests should cover:
- All condition types work correctly
- Chained conditions
- Multiple conditions (AND/OR)
- Field validation state changes
- Performance with many conditional fields
- Edge cases (circular dependencies, etc.)

## 🎯 Priority

**Medium-High** - This is Priority #2 enhancement based on:
- High flexibility benefit
- Enables complex use cases
- Commonly requested feature
- Builds on stable form foundation

## ⏱️ Estimated Effort

**Medium-High** - 10-16 hours
- Design: 2-3 hours
- Implementation: 6-10 hours
- Testing: 2-3 hours
- Documentation: 1-2 hours

## 🔗 Related Issues

- Complements #1 (Multi-step wizard) - can be used together
- Foundation for future "Form Builder" feature

## 📝 Additional Notes

### Configuration Object
```javascript
const CONDITIONAL_FIELDS_CONFIG = {
  enabled: true,
  defaultTransition: 'fade', // 'fade', 'slide', 'none'
  transitionDuration: 300, // milliseconds
  evaluateOnLoad: true,
  debugMode: false // Console logging for troubleshooting
};
```

### Potential Future Enhancements
- Visual form builder for conditions
- Complex boolean expressions
- Date/time comparisons
- Numeric comparisons (greater than, less than)
- Regular expression matching

---

**Created:** 2025-10-31  
**Priority:** 🥈 Medium-High (Top 3)
