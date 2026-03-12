export type ExchangeRateData = {
  base: "USD";
  quote: "ETB";
  rate: number;
  giftRate: number;
  minUsdTransfer: number;
  presetAmounts: number[];
};

const EXCHANGE_RATE_DATA: ExchangeRateData = {
  base: "USD",
  quote: "ETB",
  rate: 165,
  giftRate: 50,
  minUsdTransfer: 5,
  presetAmounts: [10, 25, 50, 100, 200, 300, 500, 1000],
};

export async function getExchangeRate(): Promise<ExchangeRateData> {
  return EXCHANGE_RATE_DATA;
}
