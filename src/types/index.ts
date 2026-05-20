export interface Subcategory {
  id: string;
  slug: string;
  name: string;
  emoji: string;
}

export interface Category {
  id: string;
  slug: string;
  name: string;
  emoji: string;
  productCount: number;
  subcategories: Subcategory[];
}

export interface Product {
  id: string;
  name: string;
  weight: string;
  price: number;
  mrp: number;
  emoji: string;
  categorySlug: string;
  subcategorySlug: string;
  deliveryMins: number;
  inStock: boolean;
  description?: string;
}

export interface CartItem {
  productId: string;
  qty: number;
}

export interface CartLine extends CartItem {
  product: Product;
  lineTotal: number;
}

export interface Address {
  label: string;
  line1: string;
  city: string;
  province: string;
}

export interface User {
  id: string;
  phone: string;
  name?: string;
  addresses: Address[];
}

export type PaymentMethod = 'airtel_money' | 'mtn_momo' | 'cod';

export type OrderStatus = 'placed' | 'packing' | 'out_for_delivery' | 'delivered' | 'cancelled';

export interface Order {
  id: string;
  userId: string;
  items: { product: Product; qty: number; lineTotal: number }[];
  subtotal: number;
  deliveryFee: number;
  total: number;
  payment: PaymentMethod;
  address: Address;
  status: OrderStatus;
  placedAt: string;
  etaMins: number;
}

export interface OtpRequestResponse {
  requestId: string;
  expiresInSec: number;
}

export interface OtpVerifyResponse {
  token: string;
  user: User;
}
