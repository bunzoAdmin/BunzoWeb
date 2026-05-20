import { apiRequest } from './client';
import type {
  Category,
  Product,
  Order,
  PaymentMethod,
  Address,
  OtpRequestResponse,
  OtpVerifyResponse,
  CartItem
} from '@/types';

type Envelope<T> = { data: T };

// ----- Catalog -----
export const CatalogAPI = {
  listCategories: () =>
    apiRequest<Envelope<Category[]>>('/categories').then((r) => r.data),

  listProducts: (opts?: { category?: string; q?: string }) =>
    apiRequest<Envelope<Product[]>>('/products', { query: opts }).then((r) => r.data),

  getProduct: (id: string) =>
    apiRequest<Envelope<Product>>(`/products/${id}`).then((r) => r.data),

  productsInCategory: (slug: string) =>
    apiRequest<Envelope<Product[]>>(`/categories/${slug}/products`).then((r) => r.data)
};

// ----- Auth -----
export const AuthAPI = {
  requestOtp: (phone: string) =>
    apiRequest<Envelope<OtpRequestResponse>>('/auth/otp/request', {
      method: 'POST',
      body: { phone }
    }).then((r) => r.data),

  verifyOtp: (phone: string, otp: string) =>
    apiRequest<Envelope<OtpVerifyResponse>>('/auth/otp/verify', {
      method: 'POST',
      body: { phone, otp }
    }).then((r) => r.data)
};

// ----- Orders -----
export const OrdersAPI = {
  place: (items: CartItem[], payment: PaymentMethod, address: Address) =>
    apiRequest<Envelope<Order>>('/orders', {
      method: 'POST',
      body: { items, payment, address }
    }).then((r) => r.data),

  list: () => apiRequest<Envelope<Order[]>>('/orders').then((r) => r.data),

  get: (id: string) => apiRequest<Envelope<Order>>(`/orders/${id}`).then((r) => r.data)
};

// ----- Payments -----
export interface PaymentResult {
  provider: PaymentMethod;
  reference?: string;
  orderId: string;
  status: string;
  message: string;
}

export const PaymentsAPI = {
  airtelMoney: (orderId: string, phone: string, amount: number) =>
    apiRequest<Envelope<PaymentResult>>('/payments/airtel-money/initiate', {
      method: 'POST',
      body: { orderId, phone, amount }
    }).then((r) => r.data),

  mtnMomo: (orderId: string, phone: string, amount: number) =>
    apiRequest<Envelope<PaymentResult>>('/payments/mtn-momo/initiate', {
      method: 'POST',
      body: { orderId, phone, amount }
    }).then((r) => r.data),

  cod: (orderId: string) =>
    apiRequest<Envelope<PaymentResult>>('/payments/cod/confirm', {
      method: 'POST',
      body: { orderId }
    }).then((r) => r.data)
};
