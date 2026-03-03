export function formatCurrency(
  value: number,
  options: {
    locale?: string
    currency?: string
    minimumFractionDigits?: number
    maximumFractionDigits?: number
  } = {},
): string {
  if (!Number.isFinite(value)) return ""

  const {
    locale = "en-US",
    currency = "USD",
    minimumFractionDigits,
    maximumFractionDigits,
  } = options

  return new Intl.NumberFormat(locale, {
    style: "currency",
    currency,
    ...(minimumFractionDigits === undefined ? {} : { minimumFractionDigits }),
    ...(maximumFractionDigits === undefined ? {} : { maximumFractionDigits }),
  }).format(value)
}

export const formatUSD = (value: number) => formatCurrency(value, { currency: "USD" })

