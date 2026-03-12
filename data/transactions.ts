import type { TransactionColumn } from "@/components/transactions/transactions-table";

export const transactionColumns = [
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
