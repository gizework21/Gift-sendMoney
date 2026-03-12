export type TransactionStatus = "pending" | "completed" | "failed";

export type Transaction = {
  id: string;
  amount: number;
  currency: string;
  status: TransactionStatus;
  createdAt: string;
};
