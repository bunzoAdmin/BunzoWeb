const formatter = new Intl.NumberFormat('en-ZM', {
  style: 'currency',
  currency: 'ZMW',
  currencyDisplay: 'narrowSymbol',
  maximumFractionDigits: 2
});

export function formatZMW(amount: number): string {
  return formatter.format(amount).replace('ZMW', 'K').replace(/\s/g, '');
}

export function plainZMW(amount: number): string {
  return `K${amount.toFixed(2)}`;
}
