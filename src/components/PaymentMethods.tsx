'use client';

import type { PaymentMethod } from '@/types';

interface Option {
  id: PaymentMethod;
  label: string;
  description: string;
  emoji: string;
}

const OPTIONS: Option[] = [
  {
    id: 'airtel_money',
    label: 'Airtel Money',
    description: 'Approve on your handset after placing the order',
    emoji: '📱'
  },
  {
    id: 'mtn_momo',
    label: 'MTN Mobile Money',
    description: 'Authorize via the MTN MoMo menu',
    emoji: '💸'
  },
  {
    id: 'cod',
    label: 'Cash on Delivery',
    description: 'Pay with Kwacha when your order arrives',
    emoji: '💵'
  }
];

interface Props {
  value: PaymentMethod;
  onChange: (m: PaymentMethod) => void;
}

export function PaymentMethods({ value, onChange }: Props) {
  return (
    <div className="space-y-2">
      {OPTIONS.map((opt) => (
        <label
          key={opt.id}
          className={`flex items-center gap-3 p-4 border rounded-lg cursor-pointer transition-colors ${
            value === opt.id
              ? 'border-brand-green bg-brand-green-light'
              : 'border-neutral-200 hover:border-neutral-400'
          }`}
        >
          <input
            type="radio"
            name="payment"
            value={opt.id}
            checked={value === opt.id}
            onChange={() => onChange(opt.id)}
            className="accent-brand-green"
          />
          <span className="text-2xl">{opt.emoji}</span>
          <span className="flex-1">
            <span className="block font-semibold text-sm">{opt.label}</span>
            <span className="block text-xs text-neutral-500">{opt.description}</span>
          </span>
        </label>
      ))}
    </div>
  );
}
