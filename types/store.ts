import type { AuthUser } from "@/features/auth/auth.types";
import type { Transaction } from "@/features/transactions/transactions.types";
import type { ToastMessage } from "@/types/toast";

export type AuthState = {
  user: AuthUser | null;
  setUser: (user: AuthUser | null) => void;
};

export type TransactionState = {
  transactions: Transaction[];
  setTransactions: (transactions: Transaction[]) => void;
};

export type UiState = {
  isLoading: boolean;
  setLoading: (isLoading: boolean) => void;
};

export type ToastState = {
  toasts: ToastMessage[];
  addToast: (toast: Omit<ToastMessage, "id">) => string;
  removeToast: (id: string) => void;
};
