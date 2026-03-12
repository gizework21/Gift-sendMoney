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

export function getTransactionById(id: string) {
  return TRANSACTIONS.find((transaction) => transaction.id === id) ?? null;
}
