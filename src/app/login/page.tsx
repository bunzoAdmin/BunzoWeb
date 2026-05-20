'use client';

import { useState } from 'react';
import { useRouter, useSearchParams } from 'next/navigation';
import { AuthAPI } from '@/lib/api/endpoints';
import { useAuth } from '@/store/auth';

export default function LoginPage() {
  const router = useRouter();
  const search = useSearchParams();
  const next = search.get('next') ?? '/';
  const setSession = useAuth((s) => s.setSession);

  const [step, setStep] = useState<'phone' | 'otp'>('phone');
  const [phone, setPhone] = useState('');
  const [otp, setOtp] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);

  async function requestOtp(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const full = phone.startsWith('+') ? phone : `+260${phone.replace(/^0/, '')}`;
      await AuthAPI.requestOtp(full);
      setPhone(full);
      setStep('otp');
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to send OTP');
    } finally {
      setLoading(false);
    }
  }

  async function verifyOtp(e: React.FormEvent) {
    e.preventDefault();
    setError(null);
    setLoading(true);
    try {
      const { token, user } = await AuthAPI.verifyOtp(phone, otp);
      setSession(token, user);
      router.push(next);
    } catch (err) {
      setError(err instanceof Error ? err.message : 'Failed to verify OTP');
    } finally {
      setLoading(false);
    }
  }

  return (
    <div className="min-h-[70vh] flex items-center justify-center px-4">
      <div className="w-full max-w-sm bg-white border border-neutral-200 rounded-2xl p-7">
        <h1 className="text-2xl font-bold">
          {step === 'phone' ? 'Login or Sign up' : 'Verify your number'}
        </h1>
        <p className="text-neutral-500 text-sm mb-5">
          {step === 'phone'
            ? 'Get groceries delivered in 10 minutes'
            : `We sent a code to ${phone}`}
        </p>

        {step === 'phone' ? (
          <form onSubmit={requestOtp} className="space-y-3">
            <label className="block text-sm font-semibold">Phone Number</label>
            <div className="flex border border-neutral-200 rounded-lg overflow-hidden focus-within:ring-2 focus-within:ring-brand-yellow">
              <span className="bg-neutral-100 px-3 py-3 border-r border-neutral-200 font-semibold text-sm">
                +260
              </span>
              <input
                type="tel"
                inputMode="numeric"
                maxLength={10}
                required
                value={phone.replace(/^\+?260/, '')}
                onChange={(e) => setPhone(e.target.value.replace(/\D/g, ''))}
                placeholder="9XX XXX XXX"
                className="flex-1 px-3 py-3 outline-none text-sm"
              />
            </div>
            {error && <p className="text-red-600 text-xs">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-dark hover:bg-black disabled:bg-neutral-400 text-white font-bold py-3 rounded-lg"
            >
              {loading ? 'Sending…' : 'Continue'}
            </button>
          </form>
        ) : (
          <form onSubmit={verifyOtp} className="space-y-3">
            <label className="block text-sm font-semibold">Enter OTP</label>
            <input
              type="text"
              inputMode="numeric"
              maxLength={4}
              required
              value={otp}
              onChange={(e) => setOtp(e.target.value.replace(/\D/g, ''))}
              placeholder="1234"
              className="w-full border border-neutral-200 rounded-lg px-3 py-3 text-center tracking-[0.5em] text-lg outline-none focus:ring-2 focus:ring-brand-yellow"
            />
            <p className="text-xs text-neutral-500">
              In mock mode, use OTP <strong>1234</strong>.
            </p>
            {error && <p className="text-red-600 text-xs">{error}</p>}
            <button
              type="submit"
              disabled={loading}
              className="w-full bg-brand-green hover:bg-brand-green-dark disabled:bg-neutral-400 text-white font-bold py-3 rounded-lg"
            >
              {loading ? 'Verifying…' : 'Verify & Continue'}
            </button>
            <button
              type="button"
              onClick={() => setStep('phone')}
              className="w-full text-sm text-neutral-500 hover:text-brand-green"
            >
              Use a different number
            </button>
          </form>
        )}

        <p className="text-[11px] text-neutral-500 text-center mt-5">
          By continuing you agree to our Terms & Privacy Policy.
        </p>
      </div>
    </div>
  );
}
