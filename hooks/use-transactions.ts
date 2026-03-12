import { useQuery } from "@tanstack/react-query";

import type { TransactionRecord } from "@/lib/transactions";

export type Transaction = TransactionRecord;

async function fetchTransactions(): Promise<Transaction[]> {
  const response = await fetch("/api/transactions");
  if (!response.ok) {
    throw new Error("Failed to fetch transactions");
  }
  const data = await response.json();
  return data.data as Transaction[];
}

export function useTransactions() {
  return useQuery({
    queryKey: ["transactions"],
    queryFn: fetchTransactions,
  });
}
