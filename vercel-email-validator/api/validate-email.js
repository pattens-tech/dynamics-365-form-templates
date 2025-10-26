const dns = require('dns').promises;

/**
 * Vercel Serverless Function - Email Validation API
 * Validates email format and checks MX records
 */

// CORS headers for cross-origin requests
const corsHeaders = {
  'Access-Control-Allow-Origin': '*',
  'Access-Control-Allow-Methods': 'GET, POST, OPTIONS',
  'Access-Control-Allow-Headers': 'Content-Type',
};

/**
 * Extract domain from email
 */
function extractDomain(email) {
  const parts = email.split('@');
  return parts.length === 2 ? parts[1].toLowerCase() : '';
}

/**
 * Validate email format
 */
function isValidEmailFormat(email) {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Check if domain has valid MX records
 */
async function hasMXRecords(domain) {
  try {
    const mxRecords = await dns.resolveMx(domain);
    return mxRecords && mxRecords.length > 0;
  } catch (error) {
    // DNS lookup failed - domain doesn't exist or has no MX records
    return false;
  }
}

/**
 * Main handler function
 */
module.exports = async (req, res) => {
  // Handle CORS preflight
  if (req.method === 'OPTIONS') {
    return res.status(200).json({ success: true });
  }

  // Only allow GET and POST
  if (req.method !== 'GET' && req.method !== 'POST') {
    return res.status(405).json({ 
      error: 'Method not allowed',
      validMethods: ['GET', 'POST']
    });
  }

  // Get email from query string or body
  const email = req.method === 'GET' 
    ? req.query.email 
    : req.body?.email;

  // Validate input
  if (!email) {
    return res.status(400).json({ 
      error: 'Email parameter is required',
      example: '?email=test@example.com'
    });
  }

  // Check format
  if (!isValidEmailFormat(email)) {
    return res.status(200).json({
      email: email,
      valid: false,
      reason: 'Invalid email format',
      hasMXRecords: false
    });
  }

  // Extract domain
  const domain = extractDomain(email);

  // Check MX records
  const mxExists = await hasMXRecords(domain);

  // Return result
  return res.status(200).json({
    email: email,
    domain: domain,
    valid: mxExists,
    reason: mxExists 
      ? 'Valid email domain with MX records' 
      : 'Domain has no MX records or does not exist',
    hasMXRecords: mxExists
  });
};
