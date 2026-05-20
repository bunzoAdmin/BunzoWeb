/**
 * The single flag that swaps mock responses for real API calls.
 * Set NEXT_PUBLIC_USE_MOCK_API=false in .env.local when the backend is ready.
 */
export const USE_MOCK_API =
  (process.env.NEXT_PUBLIC_USE_MOCK_API ?? 'true').toLowerCase() !== 'false';

export const API_BASE_URL =
  process.env.NEXT_PUBLIC_API_BASE_URL ?? 'https://api.bunzo.zm/v1';

export const MOCK_LATENCY_MS = 250;
