import type {
  Transaction,
  TransactionColumn,
  TransactionRecord,
} from "@/features/transactions/transactions.types";

export const TRANSACTIONS: TransactionRecord[] = Array.from({ length: 10 }).map(
  (_, index) => {
    const id = `TX-${String(10420 + index).padStart(5, "0")}`;
    const amountUsd = 300 + index * 25;
    const exchangeRate = 165;
    const amountEtb = amountUsd * exchangeRate;

    return {
      id,
      senderName: "Solomon Kebede",
      senderPhone: `+2519000000${index}`,
      recipientName: "Samson Ketema",
      recipientPhone: `+2519110000${index}`,
      recipientBankName: "Dashen Bank",
      recipientAccountNumber: `10003476733767${index}`,
      amountUsd,
      exchangeRate,
      amountEtb,
      netAmountToMerchant: amountEtb - 10,
      pickupBranch: "Addis Ababa",
      transactionStatus: "Completed",
      pickupStatus: "Delivered",
      transactionDateTime: "May 12, 2024 10:30 AM",
      details: "View",
    };
  },
);

export const MOCK_TRANSACTIONS: Transaction[] = [
  {
    id: "tx_1",
    amount: 120,
    currency: "USD",
    status: "completed",
    createdAt: new Date().toISOString(),
  },
  {
    id: "tx_2",
    amount: 75,
    currency: "USD",
    status: "pending",
    createdAt: new Date().toISOString(),
  },
];

export const TRANSACTION_COLUMNS = [
  { key: "id", label: "Transaction ID" },
  { key: "senderName", label: "Sender Name" },
  { key: "senderPhone", label: "Sender Phone Number" },
  { key: "recipientName", label: "Recipient Name" },
  { key: "recipientPhone", label: "Recipient Phone Number" },
  { key: "amountUsd", label: "Amount USD" },
  { key: "exchangeRate", label: "Exchange Rate" },
  { key: "amountEtb", label: "Amount ETB" },
  { key: "pickupBranch", label: "Pickup Branch" },
  { key: "transactionStatus", label: "Transaction Status" },
  { key: "pickupStatus", label: "Pickup Status" },
  { key: "transactionDateTime", label: "Transaction Date & Time" },
  { key: "details", label: "Details" },
] satisfies TransactionColumn[];

export function getTransactionById(id: string) {
  return TRANSACTIONS.find((transaction) => transaction.id === id) ?? null;
}
