/**
 * Get an environment variable safely
 * @param key The environment variable key
 * @param defaultValue Optional default value if not found
 * @returns The environment variable value or default
 */
export function getEnv(key: string, defaultValue: string = ''): string {
  // Check for client-side variables (NEXT_PUBLIC_*)
  if (typeof window !== 'undefined' && key.startsWith('NEXT_PUBLIC_')) {
    return process.env[key] || defaultValue;
  }
  
  // Server-side variables
  if (typeof window === 'undefined') {
    return process.env[key] || defaultValue;
  }
  
  return defaultValue;
}

/**
 * Get the Turnstile site key
 * @returns The Turnstile site key
 */
export function getTurnstileSiteKey(): string {
  const key = getEnv('NEXT_PUBLIC_TURNSTILE_SITE_KEY');
  if (!key) {
    console.warn('Turnstile site key is not configured');
  }
  return key;
}

/**
 * Get the Turnstile secret key (server-side only)
 * @returns The Turnstile secret key
 */
export function getTurnstileSecretKey(): string {
  const key = getEnv('TURNSTILE_SECRET_KEY');
  if (!key && typeof window === 'undefined') {
    console.warn('Turnstile secret key is not configured');
  }
  return key;
} 