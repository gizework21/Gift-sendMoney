import { EXCHANGE_RATE_DATA } from "@/features/send-money/exchange-rate.constants";
import type { ExchangeRateData } from "@/features/send-money/send-money.types";

export async function getExchangeRate(): Promise<ExchangeRateData> {
  return EXCHANGE_RATE_DATA;
}
