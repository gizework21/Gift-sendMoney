import type { ReactNode } from "react";

export type TransactionStatus = "pending" | "completed" | "failed";

export type Transaction = {
  id: string;
  amount: number;
  currency: string;
  status: TransactionStatus;
  createdAt: string;
};

export type TransactionRecord = {
  id: string;
  senderName: string;
  senderPhone: string;
  recipientName: string;
  recipientPhone: string;
  recipientBankName: string;
  recipientAccountNumber: string;
  amountUsd: number;
  exchangeRate: number;
  amountEtb: number;
  netAmountToMerchant: number;
  pickupBranch: string;
  transactionStatus: string;
  pickupStatus: string;
  transactionDateTime: string;
  details: string;
};

export type TransactionColumn = {
  key: keyof TransactionRecord;
  label: string;
};

export type TransactionsTableProps = {
  columns: TransactionColumn[];
  rows?: number;
};

export type TransactionsPaginationProps = {
  current?: string;
  pages?: string[];
};

export type DetailItemData = {
  label: string;
  value: string;
};

export type TransactionDetailsViewProps = {
  transaction: TransactionRecord;
  userName: string;
};

export type PageSectionProps = {
  title: string;
  children: ReactNode;
};

export type DetailGridProps = {
  items: DetailItemData[];
  columns: "two" | "three";
};

export type SummaryCardProps = {
  items: DetailItemData[];
  status?: string;
};

export type StatusItemProps = {
  label: string;
  value: string;
};

export type TransactionSummaryBarProps = {
  transactionId: string;
};

export type TransactionDetailsPageProps = {
  params: Promise<{ id: string }>;
};

export type TransactionsHeaderProps = {
  userName: string;
};
