/**
 * Form Validation for Dynamics 365 Marketing Forms
 * Email field validation with visual feedback
 */

// ============================================================
// CONFIGURATION
// ============================================================

const CONFIG = {
  // Personal email domains (triggers warning)
  personalDomains: [
    'icloud.com',
    'gmail.com',
    'outlook.com',
    'yahoo.com',
    'android.com',
    'hotmail.com',
    'live.com',
    'msn.com',
    'thunderbird.net',
    'samsung.com',
    'web.de',
    'gmx.de',
    'gmx.com',
    'aol.com',
    'protonmail.com',
    'zoho.com',
    'mail.com',
    'yandex.com',
    'me.com',
    'mac.com',
    'fastmail.com',
    'tutanota.com',
    'hey.com',
    'icloud.co.uk',
    'outlook.co.uk',
    'hotmail.co.uk',
    'btinternet.com',
    'virginmedia.com',
    'ntlworld.com',
    'talktalk.net',
    'blueyonder.co.uk',
    'mail.ru',
    'qq.com',
    '163.com',
    '126.com',
    'naver.com',
    'hanmail.net',
    'daum.net',
    'seznam.cz',
    'laposte.net',
    'orange.fr',
    'free.fr',
    'sfr.fr',
    'shaw.ca',
    'rogers.com',
    'telus.net',
    'cox.net',
    'comcast.net',
    'att.net',
    'bellsouth.net'
  ],

  // Validation messages
  messages: {
    invalid: 'Please enter a valid email address',
    personal: 'Check your email address. Work email is preferred.',
    valid: 'Email address accepted'
  },

  // Icons for messages
  icons: {
    error: '❌',
    warning: '⚠',
    success: '✓'
  },

  // Border color classes
  borderColors: {
    error: 'border-red-500',
    warning: 'border-orange-500',
    success: 'border-green-500',
    default: 'border-gray-300'
  },

  // Message text color classes
  messageColors: {
    error: 'text-red-600',
    warning: 'text-orange-600',
    success: 'text-green-600'
  },

  // CSS transition class for smooth animations
  transitionClass: 'transition-all duration-300 ease-in-out',

  // Selectors
  selectors: {
    emailInput: '#emailaddress1',
    messageContainer: '#emailaddress1-message'
  }
};

// ============================================================
// VALIDATION FUNCTIONS
// ============================================================

/**
 * Validate email format using regex
 * Format: something@something.TLD
 */
function isValidEmailFormat(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Extract domain from email address
 */
function extractDomain(email) {
  const parts = email.split('@');
  return parts.length === 2 ? parts[1].toLowerCase() : '';
}

/**
 * Check if email domain is a personal email provider
 */
function isPersonalEmail(email) {
  const domain = extractDomain(email);
  return CONFIG.personalDomains.includes(domain);
}

/**
 * Validate email and return validation state
 * @returns {Object} { state: 'error'|'warning'|'success', message: string }
 */
function validateEmail(email) {
  // Check if empty
  if (!email || email.trim() === '') {
    return {
      state: 'error',
      message: CONFIG.messages.invalid
    };
  }

  // Check format
  if (!isValidEmailFormat(email)) {
    return {
      state: 'error',
      message: CONFIG.messages.invalid
    };
  }

  // Check if personal email
  if (isPersonalEmail(email)) {
    return {
      state: 'warning',
      message: CONFIG.messages.personal
    };
  }

  // Valid work email
  return {
    state: 'success',
    message: CONFIG.messages.valid
  };
}

// ============================================================
// UI UPDATE FUNCTIONS
// ============================================================

/**
 * Remove all border color classes from input
 */
function clearBorderClasses(input) {
  input.classList.remove(
    CONFIG.borderColors.error,
    CONFIG.borderColors.warning,
    CONFIG.borderColors.success,
    CONFIG.borderColors.default
  );
}

/**
 * Remove all message color classes from message container
 */
function clearMessageClasses(messageContainer) {
  messageContainer.classList.remove(
    CONFIG.messageColors.error,
    CONFIG.messageColors.warning,
    CONFIG.messageColors.success
  );
}

/**
 * Update input border based on validation state
 */
function updateBorder(input, state) {
  clearBorderClasses(input);
  
  switch(state) {
    case 'error':
      input.classList.add(CONFIG.borderColors.error);
      break;
    case 'warning':
      input.classList.add(CONFIG.borderColors.warning);
      break;
    case 'success':
      input.classList.add(CONFIG.borderColors.success);
      break;
    default:
      input.classList.add(CONFIG.borderColors.default);
  }
}

/**
 * Show validation message with fade-in animation
 */
function showMessage(messageContainer, state, message) {
  clearMessageClasses(messageContainer);
  
  // Set icon based on state
  let icon = '';
  switch(state) {
    case 'error':
      icon = CONFIG.icons.error;
      messageContainer.classList.add(CONFIG.messageColors.error);
      break;
    case 'warning':
      icon = CONFIG.icons.warning;
      messageContainer.classList.add(CONFIG.messageColors.warning);
      break;
    case 'success':
      icon = CONFIG.icons.success;
      messageContainer.classList.add(CONFIG.messageColors.success);
      break;
  }

  // Update message content
  messageContainer.innerHTML = `<span class="inline-flex items-center gap-2"><span>${icon}</span><span>${message}</span></span>`;
  
  // Fade in
  messageContainer.classList.remove('hidden', 'opacity-0');
  messageContainer.classList.add('opacity-100');
}

/**
 * Hide validation message with fade-out animation
 */
function hideMessage(messageContainer) {
  messageContainer.classList.remove('opacity-100');
  messageContainer.classList.add('opacity-0');
  
  // Hide after fade animation completes
  setTimeout(() => {
    messageContainer.classList.add('hidden');
    messageContainer.innerHTML = '';
  }, 300);
}

/**
 * Update UI based on validation result
 */
function updateUI(input, messageContainer, validationResult) {
  // Update border
  updateBorder(input, validationResult.state);
  
  // Update message
  if (validationResult.state) {
    showMessage(messageContainer, validationResult.state, validationResult.message);
  } else {
    hideMessage(messageContainer);
  }

  // Update ARIA attributes for accessibility
  if (validationResult.state === 'error') {
    input.setAttribute('aria-invalid', 'true');
  } else {
    input.setAttribute('aria-invalid', 'false');
  }
}

/**
 * Clear all validation UI
 */
function clearValidationUI(input, messageContainer) {
  clearBorderClasses(input);
  input.classList.add(CONFIG.borderColors.default);
  hideMessage(messageContainer);
  input.setAttribute('aria-invalid', 'false');
}

// ============================================================
// EVENT HANDLERS
// ============================================================

/**
 * Handle blur event on email input
 */
function handleBlur(event) {
  const input = event.target;
  const messageContainer = document.querySelector(CONFIG.selectors.messageContainer);
  
  if (!messageContainer) {
    console.error('Message container not found');
    return;
  }

  const email = input.value.trim();
  
  // If field is empty, clear validation
  if (email === '') {
    clearValidationUI(input, messageContainer);
    return;
  }

  // Validate and update UI
  const validationResult = validateEmail(email);
  updateUI(input, messageContainer, validationResult);
}

/**
 * Handle focus event on email input (clear validation on focus)
 */
function handleFocus(event) {
  // Optional: You can choose to clear validation when user focuses
  // Uncomment the lines below if you want this behavior
  
  // const input = event.target;
  // const messageContainer = document.querySelector(CONFIG.selectors.messageContainer);
  // if (messageContainer) {
  //   clearValidationUI(input, messageContainer);
  // }
}

// ============================================================
// INITIALIZATION
// ============================================================

/**
 * Initialize validation on the email input field
 */
function initValidation() {
  const emailInput = document.querySelector(CONFIG.selectors.emailInput);
  
  if (!emailInput) {
    console.error('Email input field not found');
    return;
  }

  // Add transition classes to input for smooth border animation
  emailInput.classList.add('transition-all', 'duration-300', 'ease-in-out');

  // Create message container if it doesn't exist
  let messageContainer = document.querySelector(CONFIG.selectors.messageContainer);
  if (!messageContainer) {
    messageContainer = document.createElement('div');
    messageContainer.id = 'emailaddress1-message';
    messageContainer.classList.add('hidden', 'opacity-0', 'text-sm', 'mt-2', 'transition-all', 'duration-300', 'ease-in-out');
    messageContainer.setAttribute('role', 'alert');
    messageContainer.setAttribute('aria-live', 'polite');
    
    // Insert after the email input
    emailInput.parentNode.insertBefore(messageContainer, emailInput.nextSibling);
  }

  // Add ARIA describedby to email input
  emailInput.setAttribute('aria-describedby', 'emailaddress1-message');

  // Attach event listeners
  emailInput.addEventListener('blur', handleBlur);
  emailInput.addEventListener('focus', handleFocus);

  console.log('Email validation initialized successfully');
}

// ============================================================
// AUTO-INITIALIZE
// ============================================================

// Initialize validation when DOM is ready
if (document.readyState === 'loading') {
  document.addEventListener('DOMContentLoaded', initValidation);
} else {
  // DOM is already loaded
  initValidation();
}
