import { useQuery } from "@tanstack/react-query";

import type { BankOption } from "@/lib/constants";

type BanksResponse = {
  ok: boolean;
  data: BankOption[];
};

async function fetchBanks() {
  const response = await fetch("/api/banks");
  if (!response.ok) {
    throw new Error("Failed to fetch banks");
  }

  const data = (await response.json()) as BanksResponse;
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
