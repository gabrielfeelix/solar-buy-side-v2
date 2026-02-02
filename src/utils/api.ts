/**
 * Get the API URL based on the current environment
 * - In production (solarbuyside.com.br): uses same origin
 * - In development: uses VITE_API_URL env variable or localhost:5000
 */
export const getApiUrl = (): string => {
  // In production (deployed site), use the same origin
  if (
    window.location.hostname === 'solarbuyside.com.br' ||
    window.location.hostname === 'www.solarbuyside.com.br'
  ) {
    return window.location.origin
  }

  // In development, use env variable or localhost
  return import.meta.env.VITE_API_URL || 'http://localhost:5000'
}

export const API_URL = getApiUrl()
