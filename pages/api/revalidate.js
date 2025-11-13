/**
 * MindShift API Route: Incremental Static Regeneration (ISR) Revalidation
 * 
 * Triggers on-demand revalidation for statically generated pages.
 * Useful for rebuilding pages when content updates without full redeployment.
 * 
 * @endpoint POST /api/revalidate
 * 
 * @example Request
 * POST /api/revalidate
 * Content-Type: application/json
 * {
 *   "secret": "your-secret-token-here",
 *   "path": "/articles/123"
 * }
 * 
 * @example Response (Success)
 * {
 *   "revalidated": true,
 *   "path": "/articles/123",
 *   "timestamp": "2025-11-13T01:15:00.000Z"
 * }
 * 
 * @example Response (Error)
 * {
 *   "error": "Invalid secret token",
 *   "timestamp": "2025-11-13T01:15:00.000Z"
 * }
 */

export default async function handler(req, res) {
  // Logging helper
  const log = (level, message, meta = {}) => {
    const timestamp = new Date().toISOString();
    const logEntry = { timestamp, level, message, ...meta };
    
    if (level === 'error') {
      console.error(JSON.stringify(logEntry));
    } else {
      console.log(JSON.stringify(logEntry));
    }
  };

  // Only allow POST requests
  if (req.method !== 'POST') {
    log('warn', 'Invalid method', { method: req.method, ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress });
    return res.status(405).json({ 
      error: 'Method not allowed. Use POST.',
      timestamp: new Date().toISOString()
    });
  }

  try {
    // Extract request body
    const { secret, path } = req.body;

    // Validate request body structure
    if (!secret) {
      log('warn', 'Missing secret in request', { ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress });
      return res.status(400).json({ 
        error: 'Missing required field: secret',
        timestamp: new Date().toISOString()
      });
    }

    // Validate secret token
    const expectedSecret = process.env.REVALIDATE_SECRET;

    if (!expectedSecret) {
      log('error', 'REVALIDATE_SECRET environment variable not configured');
      return res.status(500).json({ 
        error: 'Revalidation service misconfigured. Contact administrator.',
        timestamp: new Date().toISOString()
      });
    }

    if (secret !== expectedSecret) {
      log('warn', 'Invalid secret token attempt', { 
        ip: req.headers['x-forwarded-for'] || req.socket.remoteAddress,
        providedSecretLength: secret.length
      });
      return res.status(401).json({ 
        error: 'Invalid secret token',
        timestamp: new Date().toISOString()
      });
    }

    // Determine path to revalidate (default to homepage)
    const targetPath = path || '/';

    // Validate path format (must start with /)
    if (!targetPath.startsWith('/')) {
      log('warn', 'Invalid path format', { path: targetPath });
      return res.status(400).json({ 
        error: 'Path must start with forward slash (e.g., /articles/123)',
        timestamp: new Date().toISOString()
      });
    }

    log('info', 'Revalidation request received', { path: targetPath });

    // Trigger Next.js revalidation
    await res.revalidate(targetPath);

    log('info', 'Revalidation successful', { path: targetPath });

    // Return success response
    return res.status(200).json({ 
      revalidated: true,
      path: targetPath,
      timestamp: new Date().toISOString()
    });

  } catch (error) {
    // Handle revalidation errors
    log('error', 'Revalidation failed', { 
      error: error.message,
      stack: error.stack,
      path: req.body?.path
    });

    // Differentiate between known error types
    if (error.message?.includes('ENOENT') || error.message?.includes('not found')) {
      return res.status(404).json({ 
        error: `Path not found or not statically generated: ${req.body?.path || '/'}`,
        timestamp: new Date().toISOString()
      });
    }

    // Generic error response
    return res.status(500).json({ 
      error: 'Revalidation failed. Check server logs.',
      message: error.message,
      timestamp: new Date().toISOString()
    });
  }
}
