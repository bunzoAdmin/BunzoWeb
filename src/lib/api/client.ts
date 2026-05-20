import { USE_MOCK_API, API_BASE_URL, MOCK_LATENCY_MS } from './config';
import { mockResolvers } from './mocks';

type Method = 'GET' | 'POST' | 'PUT' | 'DELETE' | 'PATCH';

interface RequestOptions {
  method?: Method;
  body?: unknown;
  headers?: Record<string, string>;
  query?: Record<string, string | number | undefined>;
}

const sleep = (ms: number) => new Promise((r) => setTimeout(r, ms));

/**
 * Universal request interceptor.
 *
 * When USE_MOCK_API is true, the request is routed to a mock resolver
 * registered under the same path. When false, an actual fetch hits
 * API_BASE_URL. Components never know the difference.
 */
export async function apiRequest<T>(path: string, opts: RequestOptions = {}): Promise<T> {
  const method = opts.method ?? 'GET';

  if (USE_MOCK_API) {
    const resolver = findResolver(method, path);
    if (!resolver) {
      throw new Error(`[mock] no resolver for ${method} ${path}`);
    }
    await sleep(MOCK_LATENCY_MS);
    return resolver({ path, body: opts.body, query: opts.query }) as T;
  }

  const url = new URL(`${API_BASE_URL}${path}`);
  if (opts.query) {
    Object.entries(opts.query).forEach(([k, v]) => {
      if (v !== undefined) url.searchParams.set(k, String(v));
    });
  }

  const res = await fetch(url.toString(), {
    method,
    headers: {
      'Content-Type': 'application/json',
      ...authHeader(),
      ...opts.headers
    },
    body: opts.body ? JSON.stringify(opts.body) : undefined,
    cache: 'no-store'
  });

  if (!res.ok) {
    const errBody = await res.text();
    throw new Error(`API ${res.status}: ${errBody}`);
  }
  return res.json() as Promise<T>;
}

function authHeader(): Record<string, string> {
  if (typeof window === 'undefined') return {};
  try {
    const raw = window.localStorage.getItem('bunzo-auth');
    if (!raw) return {};
    const { state } = JSON.parse(raw);
    return state?.token ? { Authorization: `Bearer ${state.token}` } : {};
  } catch {
    return {};
  }
}

function findResolver(method: string, path: string) {
  const exactKey = `${method} ${path}`;
  if (mockResolvers[exactKey]) return mockResolvers[exactKey];

  const segs = path.split('/').filter(Boolean);
  for (const key of Object.keys(mockResolvers)) {
    const [m, p] = key.split(' ');
    if (m !== method) continue;
    const tSegs = p.split('/').filter(Boolean);
    if (tSegs.length !== segs.length) continue;
    const match = tSegs.every((t, i) => t.startsWith(':') || t === segs[i]);
    if (match) return mockResolvers[key];
  }
  return undefined;
}
