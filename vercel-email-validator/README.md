# Email Validator API for Vercel

Serverless API endpoint that validates email addresses and checks for MX records.

## Features

- ✅ Email format validation
- ✅ MX record DNS lookup
- ✅ CORS enabled for cross-origin requests
- ✅ Serverless (runs on Vercel)

## Deployment

### Prerequisites
- Vercel account
- Vercel CLI installed: `npm i -g vercel`

### Deploy Steps

1. **Navigate to directory:**
   ```bash
   cd vercel-email-validator
   ```

2. **Install Vercel CLI (if not installed):**
   ```bash
   npm i -g vercel
   ```

3. **Deploy to Vercel:**
   ```bash
   vercel
   ```

4. **Follow prompts:**
   - Set up and deploy? **Y**
   - Which scope? (select your account)
   - Link to existing project? **N**
   - Project name? (press Enter for default)
   - Directory? **. /** (current directory)

5. **Note your deployment URL:**
   ```
   https://your-project.vercel.app
   ```

## API Usage

### Endpoint
```
GET https://your-project.vercel.app/api/validate-email?email=test@example.com
```

### Request

**Query Parameter:**
- `email` (required) - Email address to validate

**Example:**
```bash
curl "https://your-project.vercel.app/api/validate-email?email=test@gmail.com"
```

### Response

**Success (Valid Email):**
```json
{
  "email": "test@gmail.com",
  "domain": "gmail.com",
  "valid": true,
  "reason": "Valid email domain with MX records",
  "hasMXRecords": true
}
```

**Invalid Format:**
```json
{
  "email": "invalid-email",
  "valid": false,
  "reason": "Invalid email format",
  "hasMXRecords": false
}
```

**No MX Records:**
```json
{
  "email": "test@nonexistent-domain-12345.com",
  "domain": "nonexistent-domain-12345.com",
  "valid": false,
  "reason": "Domain has no MX records or does not exist",
  "hasMXRecords": false
}
```

## Integration with Form Validation

Update your `form-validation.js` to call this API:

```javascript
async function validateEmailWithMX(email) {
  try {
    const response = await fetch(
      `https://your-project.vercel.app/api/validate-email?email=${encodeURIComponent(email)}`
    );
    const data = await response.json();
    return data;
  } catch (error) {
    console.error('MX validation failed:', error);
    return { valid: true }; // Fail open - don't block on API errors
  }
}
```

## Local Testing

```bash
# Install Vercel CLI
npm i -g vercel

# Run local dev server
vercel dev

# Test endpoint
curl "http://localhost:3000/api/validate-email?email=test@gmail.com"
```

## CORS

CORS is enabled for all origins (`*`). For production, restrict to your domain:

```javascript
const corsHeaders = {
  'Access-Control-Allow-Origin': 'https://yourdomain.com',
  // ...
};
```

## Rate Limiting

Consider adding rate limiting for production:
- Use Vercel Edge Config
- Use Upstash Redis
- Use middleware

## Cost

Vercel Free Tier:
- 100GB bandwidth/month
- 100 hours serverless execution/month
- Should handle thousands of validations

## Security

- No API key required (stateless validation)
- For production, add authentication if needed
- Monitor usage in Vercel dashboard
