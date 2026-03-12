import { TransactionsHeader } from "@/components/transactions/transactions-header";
import {
  BackLink,
  ContactCard,
  DetailGrid,
  PageSection,
  SummaryCard,
  TransactionSummaryBar,
} from "@/components/transactions/transaction-details-sections";
import { AppFooter } from "@/components/ui/app-footer";

export const componentType = "server";

export type TransactionDetails = {
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

type TransactionDetailsViewProps = {
  transaction: TransactionDetails;
  userName: string;
};

function formatMoney(value: number) {
  return value.toLocaleString("en-US", { minimumFractionDigits: 2 });
}

export function TransactionDetailsView({
  transaction,
  userName,
}: TransactionDetailsViewProps) {
  const senderItems = [
    { label: "Sender Name:", value: transaction.senderName },
    { label: "Sender Phone Number:", value: transaction.senderPhone },
  ];

  const recipientItems = [
    { label: "Recipient Name:", value: transaction.recipientName },
    { label: "Bank Name", value: "Dashen Bank" },
    { label: "Recipient Account Number:", value: "100034767337676" },
  ];

  const amountItems = [
    {
      label: "Transaction Amount in USD:",
      value: `$${formatMoney(transaction.amountUsd)}`,
    },
    {
      label: "Transaction Amount in ETB:",
      value: `${formatMoney(transaction.amountEtb)} ETB`,
    },
    {
      label: "Exchange Rate:",
      value: `${formatMoney(transaction.exchangeRate)} ETB`,
    },
  ];

  const metaItems = [
    {
      label: "Net Amount to Merchant:",
      value: `${formatMoney(transaction.amountEtb - 10)} ETB`,
    },
    {
      label: "Transaction Date & Time",
      value: transaction.transactionDateTime,
    },
  ];

  return (
    <main className="min-h-screen bg-[#efefef] p-6">
      <div className="mx-auto w-full max-w-[1400px] rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <TransactionsHeader userName={userName} />

        <div className="mt-4 flex items-center gap-3 border-b border-[#d8e9e4] pb-4 text-sm font-semibold text-[#111]">
          <BackLink />
          Transaction Detail
        </div>

        <TransactionSummaryBar transactionId={transaction.id} />

        <PageSection title="Sender Info.">
          <div className="rounded-2xl bg-[#fafafa] px-6 py-4">
            <DetailGrid items={senderItems} columns="two" />
          </div>
        </PageSection>

        <PageSection title="Recipient Info.">
          <div className="rounded-2xl bg-[#fafafa] px-6 py-4">
            <DetailGrid items={recipientItems} columns="three" />
          </div>
        </PageSection>

        <PageSection title="Transaction Info.">
          <div className="space-y-4">
            <SummaryCard items={amountItems} />
            <SummaryCard
              items={metaItems}
              status={transaction.transactionStatus}
            />
          </div>
        </PageSection>

        <ContactCard />
        <AppFooter className="mt-6 text-center text-xs text-[#b0b0b0]" />
      </div>
    </main>
  );
}
