import { useQuery } from "@tanstack/react-query";

import type { ExchangeRateData } from "@/lib/exchange-rate";

type ExchangeRateResponse = {
  ok: boolean;
  data: ExchangeRateData;
};

async function fetchExchangeRate() {
  const response = await fetch("/api/exchange-rate");
  if (!response.ok) {
    throw new Error("Failed to fetch exchange rate");
  }

  const data = (await response.json()) as ExchangeRateResponse;
  return data.data;
}

export function useExchangeRate(initialData?: ExchangeRateData) {
  return useQuery({
    queryKey: ["exchange-rate"],
    queryFn: fetchExchangeRate,
    initialData,
  });
}

export const UseExchangeRate = useExchangeRate;
