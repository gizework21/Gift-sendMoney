import { create } from "zustand";
import type { Transaction } from "@/types/transaction";

type TransactionState = {
  transactions: Transaction[];
  setTransactions: (transactions: Transaction[]) => void;
};

export const useTransactionStore = create<TransactionState>((set) => ({
  transactions: [],
  setTransactions: (transactions) => set({ transactions }),
}));
