import { useQuery } from "@tanstack/react-query";

export type Transaction = {
  id: string;
  senderName: string;
  senderPhone: string;
  recipientName: string;
  recipientPhone: string;
  amountUsd: number;
  exchangeRate: number;
  amountEtb: number;
  pickupBranch: string;
  transactionStatus: string;
  pickupStatus: string;
  transactionDateTime: string;
  details: string;
};

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
