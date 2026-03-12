import { useQuery } from "@tanstack/react-query";

import type { TransactionRecord } from "@/features/transactions/transactions.types";

async function fetchTransactions(): Promise<TransactionRecord[]> {
  const response = await fetch("/api/transactions");
  if (!response.ok) {
    throw new Error("Failed to fetch transactions");
  }
  const data = await response.json();
  return data.data as TransactionRecord[];
}

export function useTransactions() {
  return useQuery({
    queryKey: ["transactions"],
    queryFn: fetchTransactions,
  });
}
