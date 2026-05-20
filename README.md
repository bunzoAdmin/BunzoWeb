# Bunzo 🛵

Zambia's 10-minute grocery delivery website — Next.js 15 + TypeScript + Tailwind, built to scale to millions of users with strong SEO.

## Tech Stack

| Layer | Choice | Reason |
| --- | --- | --- |
| Framework | **Next.js 15 (App Router)** | SSR + ISR for SEO and edge perf |
| Language | **TypeScript** (strict) | Type safety across the FE & API layer |
| Styling | **Tailwind CSS** | Tiny bundle, custom brand, great perf vs MUI |
| State | **Zustand** (persisted) | Lightweight, perfect for cart/auth |
| Icons | `lucide-react` | Tree-shakeable SVG icons |

> SEO note: every category and product page is statically rendered via `generateStaticParams` and revalidated every 5 minutes (ISR). Dynamic OG metadata, sitemap, and robots are all generated.

## Quickstart

```bash
cp .env.local.example .env.local
npm install
npm run dev
```

App runs at <http://localhost:3000>.

In mock mode (default), use OTP **`1234`** to log in.

## Project Structure

```
src/
  app/                        # Next.js routes (App Router)
    page.tsx                  # Home
    category/[slug]/          # Category listing
    product/[id]/             # Product detail
    cart/                     # Cart
    checkout/                 # Checkout + payment
    orders/                   # Order history
    about/                    # About / mission
    login/                    # Phone OTP login
    search/                   # Search results
    sitemap.ts                # Auto-generated sitemap
    robots.ts                 # robots.txt
  components/                 # Shared UI
  lib/
    api/
      config.ts               # USE_MOCK_API flag lives here
      client.ts               # Universal request interceptor
      endpoints.ts            # Typed API functions used by components
      mocks/
        index.ts              # Mock resolvers per endpoint
        data.ts               # Seed catalog (Zambia)
    currency.ts               # ZMW formatter (K123.45)
  store/                      # Zustand stores (cart, auth)
  types/                      # Shared TS types
```

## Mock → Real API Flag (the single switch)

All network calls go through `src/lib/api/client.ts`. It reads **one** environment variable:

```env
NEXT_PUBLIC_USE_MOCK_API=true   # mock responses
NEXT_PUBLIC_USE_MOCK_API=false  # hit NEXT_PUBLIC_API_BASE_URL
```

How it works:

1. Components only ever call typed functions in `src/lib/api/endpoints.ts` (`CatalogAPI`, `OrdersAPI`, `AuthAPI`, `PaymentsAPI`).
2. Those call `apiRequest(path, opts)` in `client.ts`.
3. `client.ts` checks the flag — either dispatches to a **mock resolver** keyed by `"METHOD /path"` in `lib/api/mocks/index.ts`, or makes a real `fetch` to `NEXT_PUBLIC_API_BASE_URL + path`.
4. **The request/response shape is the same in both modes**, so when the backend is ready you flip the flag and ship. No component changes.

When wiring the real backend, ensure these endpoints exist with matching shapes:

| Method | Path | Purpose |
| --- | --- | --- |
| GET | `/categories` | List all categories |
| GET | `/products?category=&q=` | List/search products |
| GET | `/products/:id` | Product detail |
| GET | `/categories/:slug/products` | Products in a category |
| POST | `/auth/otp/request` | Request OTP for Zambian phone (+260…) |
| POST | `/auth/otp/verify` | Verify OTP, returns `{ token, user }` |
| GET | `/orders` | Current user's orders |
| GET | `/orders/:id` | Single order |
| POST | `/orders` | Place an order |
| POST | `/payments/airtel-money/initiate` | Trigger Airtel Money push |
| POST | `/payments/mtn-momo/initiate` | Trigger MTN MoMo push |
| POST | `/payments/cod/confirm` | Confirm a COD order |

## Payment Integrations (Zambia)

Scaffolded for:

- **Airtel Money** — `POST /payments/airtel-money/initiate` (server side, uses `AIRTEL_MONEY_CLIENT_ID/SECRET`)
- **MTN Mobile Money (MoMo)** — `POST /payments/mtn-momo/initiate` (uses `MTN_MOMO_API_KEY` / `MTN_MOMO_USER_ID` / `MTN_MOMO_SUBSCRIPTION_KEY`)
- **Cash on Delivery (COD)** — `POST /payments/cod/confirm`

These payment endpoints are stubbed on the mock layer today. When the backend is ready, real implementations live behind the same URLs — no FE change needed.

## Currency & Locale

- All prices use **Zambian Kwacha (ZMW)** rendered as `K123.45` via `src/lib/currency.ts`.
- Phone numbers are validated as `+260XXXXXXXXX`.
- Locale strings (city, province, delivery times) are tailored to Lusaka.

## SEO Highlights

- Per-page `<title>` and `<description>` via `generateMetadata`.
- OpenGraph metadata for social previews.
- Static rendering with ISR (`revalidate = 300`) for category + product pages.
- Auto-generated `sitemap.xml` includes every category and product.
- `robots.txt` blocks private routes (`/cart`, `/checkout`, `/orders`, `/login`).

## Scaling Roadmap (when ready)

- Move from mock layer → backend service(s) backed by **PostgreSQL + Redis** (FE is unchanged).
- Add **Algolia / Meilisearch** for product search and swap `apiRequest('/products?q=…')` server-side.
- Add an `<Image>` CDN host (Cloudflare Images / Bunny) — already configured in `next.config.js`.
- Put Next.js on **Vercel Edge** for global low latency; static assets served from CDN.
- Real-time order tracking via **WebSockets / SSE** on `/orders/:id`.
- A/B testing via PostHog or GrowthBook.

---

© 2026 Bunzo Commerce Zambia Ltd.
