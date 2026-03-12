import type { Transaction } from "@/types/transaction";

export const mockTransactions: Transaction[] = [
  { id: "tx_1", amount: 120, currency: "USD", status: "completed", createdAt: new Date().toISOString() },
  { id: "tx_2", amount: 75, currency: "USD", status: "pending", createdAt: new Date().toISOString() },
];
