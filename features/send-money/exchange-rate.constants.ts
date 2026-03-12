import type { ExchangeRateData } from "@/features/send-money/send-money.types";

export const EXCHANGE_RATE_DATA: ExchangeRateData = {
  base: "USD",
  quote: "ETB",
  rate: 165,
  giftRate: 50,
  minUsdTransfer: 5,
  presetAmounts: [10, 25, 50, 100, 200, 300, 500, 1000],
};
