import { create } from "zustand";
import type { TransactionState } from "@/types/store";

export const useTransactionStore = create<TransactionState>((set) => ({
  transactions: [],
  setTransactions: (transactions) => set({ transactions }),
}));
