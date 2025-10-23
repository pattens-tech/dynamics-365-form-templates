# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](https://keepachangelog.com/en/1.0.0/),
and this project adheres to [Semantic Versioning](https://semver.org/spec/v2.0.0.html).

## [Unreleased]

### Planned
- Event registration form template
- Preference center templates
- Multi-step form workflows
- Dark mode support
- File upload field support
- Conditional field visibility
- Integration with reCAPTCHA
- Advanced theme customization (gradients, custom fonts)

## [1.2.0] - 2025-10-23

### Changed - BREAKING (Simplified Architecture)
- **Consolidated all theme variants into a single template file**
- Removed separate theme files (contact-form-corporate.html, contact-form-vibrant.html, contact-form-minimal.html)
- Implemented one-line theme switching mechanism
- Users now change theme by editing a single color value in the template

### Added
- Clear theme configuration instructions in template header
- Inline theme switching documentation with color presets
- Theme customization section in technical documentation
- Support for infinite custom color themes

### Improved
- **Reduced code duplication** - Only one template file to maintain
- **Simplified user experience** - Change colors without switching files
- **Easier maintenance** - Bug fixes and features only need to be updated once
- **Better customization** - Users can use any hex color, not limited to presets
- Updated README with visual theme gallery and step-by-step instructions
- Enhanced documentation with theme customization technical details

### Removed
- 3 duplicate template variant files (no longer needed)
- Code duplication across multiple files

## [1.1.0] - 2025-10-23

### Added
- .gitignore file for better version control
- GitHub repository badges for license, HTML validation, stars, and forks
- CHANGELOG.md to track version history
- Color theme variants (corporate, vibrant, minimal)
- GitHub Actions workflow for automated HTML validation
- GITHUB_TOPICS.md with instructions for adding repository topics
- templates/ directory for better organization

### Changed
- Reorganized all HTML template files into templates/ folder
- Updated all documentation references to reflect new template paths
- Updated GitHub Pages URLs in README and documentation

### Enhanced
- Comprehensive documentation improvements
- Added Common Issues & Troubleshooting section
- Added concrete accessibility examples with code snippets
- Added accessibility checklist for form validation
- Enhanced README with practical customization examples

### Fixed
- Added missing `closeThankYouModal()` JavaScript function
- Added missing `</html>` closing tag in contact-form.html
- Fixed HTML header structure to match documentation
- Corrected typos in documentation ("comming" → "coming", "moddal" → "modal", etc.)

## [1.0.0] - 2024-12-15

### Added
- Initial release of Dynamics 365 Form Templates
- Contact form template with modern Tailwind CSS styling
- Tailwind CSS integration via CDN
- Google Fonts (Roboto) integration
- Thank you modal with success confirmation
- Newsletter subscription checkbox with topic tracking
- Full accessibility support (WCAG 2.1 compliant)
- Mobile responsive design
- Required Dynamics 365 meta tags and attributes
- Form field validation
- MIT License

### Documentation
- README.md with overview and basic usage
- documentation.md with technical requirements
- Form element types reference
- Default CRM field mappings
- Field properties documentation
- Styling guidelines
- Accessibility requirements
- Credits and resources

---

## Version History Summary

- **v1.1.0** - Enhanced documentation, color variants, GitHub Actions, bug fixes
- **v1.0.0** - Initial release with contact form template

---

## How to Use This Changelog

- **Added** - New features or templates
- **Changed** - Changes to existing functionality
- **Deprecated** - Soon-to-be removed features
- **Removed** - Removed features
- **Fixed** - Bug fixes
- **Security** - Security vulnerability fixes
- **Enhanced** - Improvements to existing features

---

[Unreleased]: https://github.com/pattens-tech/dynamics-365-forms/compare/v1.1.0...HEAD
[1.1.0]: https://github.com/pattens-tech/dynamics-365-forms/compare/v1.0.0...v1.1.0
[1.0.0]: https://github.com/pattens-tech/dynamics-365-forms/releases/tag/v1.0.0
