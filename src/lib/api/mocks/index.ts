import type { Category, Product, Order, User, OtpRequestResponse, OtpVerifyResponse, PaymentMethod, Address } from '@/types';
import { CATEGORIES, PRODUCTS } from './data';

interface ResolverArgs {
  path: string;
  body?: unknown;
  query?: Record<string, string | number | undefined>;
}

type Resolver = (args: ResolverArgs) => unknown;

const orders: Order[] = [];

function findProductsByCategory(slug: string): Product[] {
  return PRODUCTS.filter((p) => p.categorySlug === slug);
}

function findProductById(id: string): Product | undefined {
  return PRODUCTS.find((p) => p.id === id);
}

export const mockResolvers: Record<string, Resolver> = {
  // ----- Catalog -----
  'GET /categories': () => ({ data: CATEGORIES }),

  'GET /products': ({ query }) => {
    let list = PRODUCTS;
    const cat = query?.category as string | undefined;
    const search = (query?.q as string | undefined)?.toLowerCase();
    if (cat) list = list.filter((p) => p.categorySlug === cat);
    if (search) list = list.filter((p) => p.name.toLowerCase().includes(search));
    return { data: list };
  },

  'GET /products/:id': ({ path }) => {
    const id = path.split('/').pop()!;
    const product = findProductById(id);
    if (!product) throw new Error('Product not found');
    return { data: product };
  },

  'GET /categories/:id/products': ({ path }) => {
    const slug = path.split('/')[2];
    return { data: findProductsByCategory(slug) };
  },

  // ----- Auth (phone OTP, Zambian numbers) -----
  'POST /auth/otp/request': ({ body }) => {
    const { phone } = body as { phone: string };
    if (!/^\+?260\d{9}$/.test(phone.replace(/\s/g, ''))) {
      throw new Error('Invalid Zambian phone number');
    }
    const res: OtpRequestResponse = { requestId: `req_${Date.now()}`, expiresInSec: 120 };
    return { data: res };
  },

  'POST /auth/otp/verify': ({ body }) => {
    const { phone, otp } = body as { phone: string; otp: string };
    if (otp !== '1234') throw new Error('Invalid OTP. Use 1234 in mock mode.');
    const user: User = {
      id: `user_${Date.now()}`,
      phone,
      name: 'Bunzo Customer',
      addresses: [
        { label: 'Home', line1: 'Plot 42, Kabulonga Road', city: 'Lusaka', province: 'Lusaka' }
      ]
    };
    const res: OtpVerifyResponse = { token: `tok_${Date.now()}`, user };
    return { data: res };
  },

  // ----- Orders -----
  'POST /orders': ({ body }) => {
    const { items, payment, address } = body as {
      items: { productId: string; qty: number }[];
      payment: PaymentMethod;
      address: Address;
    };
    const orderItems = items
      .map((i) => {
        const product = findProductById(i.productId);
        if (!product) return null;
        return { product, qty: i.qty, lineTotal: product.price * i.qty };
      })
      .filter((x): x is NonNullable<typeof x> => x !== null);

    const subtotal = orderItems.reduce((sum, l) => sum + l.lineTotal, 0);
    const deliveryFee = subtotal >= 200 ? 0 : 15;
    const order: Order = {
      id: `BZ${String(orders.length + 1001)}`,
      userId: 'mock-user',
      items: orderItems,
      subtotal,
      deliveryFee,
      total: subtotal + deliveryFee,
      payment,
      address,
      status: 'placed',
      placedAt: new Date().toISOString(),
      etaMins: 10
    };
    orders.unshift(order);
    return { data: order };
  },

  'GET /orders': () => ({ data: orders }),

  'GET /orders/:id': ({ path }) => {
    const id = path.split('/').pop()!;
    const order = orders.find((o) => o.id === id);
    if (!order) throw new Error('Order not found');
    return { data: order };
  },

  // ----- Payments (Zambia) -----
  'POST /payments/airtel-money/initiate': ({ body }) => {
    const { orderId, phone, amount } = body as { orderId: string; phone: string; amount: number };
    return {
      data: {
        provider: 'airtel_money',
        reference: `AM-${Date.now()}`,
        orderId,
        phone,
        amount,
        status: 'pending',
        message: 'Approve the payment prompt on your Airtel Money handset.'
      }
    };
  },

  'POST /payments/mtn-momo/initiate': ({ body }) => {
    const { orderId, phone, amount } = body as { orderId: string; phone: string; amount: number };
    return {
      data: {
        provider: 'mtn_momo',
        reference: `MTN-${Date.now()}`,
        orderId,
        phone,
        amount,
        status: 'pending',
        message: 'Approve the payment in your MTN Mobile Money menu.'
      }
    };
  },

  'POST /payments/cod/confirm': ({ body }) => {
    const { orderId } = body as { orderId: string };
    return {
      data: { provider: 'cod', orderId, status: 'confirmed', message: 'Cash on Delivery confirmed.' }
    };
  }
};
