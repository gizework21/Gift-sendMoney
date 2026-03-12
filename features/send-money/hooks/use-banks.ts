import { useQuery } from "@tanstack/react-query";

import type { BanksResponse } from "@/types/api";
import type { BankOption } from "@/features/send-money/send-money.types";

async function fetchBanks() {
  const response = await fetch("/api/banks");
  if (!response.ok) {
    throw new Error("Failed to fetch banks");
  }

  const data = (await response.json()) as BanksResponse<BankOption[]>;
  return data.data;
}

export function useBanks(initialData?: BankOption[]) {
  return useQuery({
    queryKey: ["banks"],
    queryFn: fetchBanks,
    initialData,
  });
}

export const UseBanks = useBanks;
