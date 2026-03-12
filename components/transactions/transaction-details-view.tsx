import Image from "next/image";
import Link from "next/link";
import type { ReactNode } from "react";

import { TransactionsHeader } from "@/components/transactions/transactions-header";
import { AppFooter } from "@/components/ui/app-footer";

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

type DetailItemData = {
  label: string;
  value: string;
};

type TransactionDetailsViewProps = {
  transaction: TransactionDetails;
  userName: string;
};

function formatMoney(value: number) {
  return value.toLocaleString("en-US", { minimumFractionDigits: 2 });
}

function BackLink() {
  return (
    <Link
      href="/transactions"
      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f2f6f4] text-[#1c1c1c]"
      aria-label="Back to transactions"
    >
      <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
        <path
          d="M15 6l-6 6 6 6"
          stroke="currentColor"
          strokeWidth="2"
          fill="none"
          strokeLinecap="round"
          strokeLinejoin="round"
        />
      </svg>
    </Link>
  );
}

function PageSection({
  title,
  children,
}: {
  title: string;
  children: ReactNode;
}) {
  return (
    <section className="mt-6 rounded-[20px] border border-[#f0f0f0] bg-white p-6 shadow-[0_6px_20px_rgba(0,0,0,0.04)]">
      <div className="border-b border-dashed border-[#e5e5e5] pb-3 text-sm text-[#7d7d7d]">
        {title}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

function DetailGrid({
  items,
  columns,
}: {
  items: DetailItemData[];
  columns: "two" | "three";
}) {
  return (
    <div
      className={`grid gap-8 ${
        columns === "two" ? "grid-cols-2" : "grid-cols-3"
      }`}
    >
      {items.map((item) => (
        <DetailItem key={item.label} label={item.label} value={item.value} />
      ))}
    </div>
  );
}

function DetailItem({ label, value }: DetailItemData) {
  return (
    <div>
      <p className="text-xs text-[#9b9b9b]">{label}</p>
      <p className="mt-2 text-sm font-semibold text-[#111]">{value}</p>
    </div>
  );
}

function SummaryCard({
  items,
  status,
}: {
  items: DetailItemData[];
  status?: string;
}) {
  return (
    <div className="rounded-2xl bg-[#fafafa] px-6 py-4">
      <div className="grid grid-cols-3 gap-8">
        {items.map((item) => (
          <DetailItem key={item.label} label={item.label} value={item.value} />
        ))}
        {status ? <StatusItem label="Payment Status:" value={status} /> : null}
      </div>
    </div>
  );
}

function StatusItem({ label, value }: { label: string; value: string }) {
  return (
    <div>
      <p className="text-xs text-[#9b9b9b]">{label}</p>
      <span className="mt-2 inline-flex rounded-full bg-[#d9fbe5] px-4 py-1 text-xs font-semibold text-[#1fa653]">
        {value}
      </span>
    </div>
  );
}

function TransactionSummaryBar({ transactionId }: { transactionId: string }) {
  return (
    <div className="mt-6 rounded-[18px] border border-[#eef1f0] bg-[#fafafa] px-6 py-4">
      <div className="flex items-center justify-between">
        <p className="text-sm font-semibold text-[#111]">
          Transaction ID: {transactionId}
        </p>
        <button
          type="button"
          className="flex items-center gap-2 rounded-full bg-[linear-gradient(135deg,#1e3f64_0%,#0f7b79_60%,#0aa56b_100%)] px-4 py-2 text-xs font-semibold text-white shadow-sm"
        >
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <path
              d="M6 9V3h12v6H6Zm0 12v-6h12v6H6Zm12-8H6V9h12v4Z"
              fill="currentColor"
            />
          </svg>
          Print Receipt
        </button>
      </div>
    </div>
  );
}

function ContactCard() {
  return (
    <section className="mt-6 rounded-[20px] border border-[#f0f0f0] bg-white px-6 py-5">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-sm font-semibold text-[#7d7d7d]">GIFT ETHIOPIA</p>
          <p className="mt-2 text-xs text-[#9b9b9b]">
            Email: info@GiftEthiopiacontact.com
          </p>
          <p className="mt-1 text-xs text-[#9b9b9b]">
            Phone: +251 11 557 20 80
          </p>
        </div>
        <Image src="/starGift.svg" width={130} height={100} alt="icon" />
      </div>
    </section>
  );
}

export function TransactionDetailsView({
  transaction,
  userName,
}: TransactionDetailsViewProps) {
  const senderItems: DetailItemData[] = [
    { label: "Sender Name:", value: transaction.senderName },
    { label: "Sender Phone Number:", value: transaction.senderPhone },
  ];

  const recipientItems: DetailItemData[] = [
    { label: "Recipient Name:", value: transaction.recipientName },
    { label: "Bank Name", value: "Dashen Bank" },
    { label: "Recipient Account Number:", value: "100034767337676" },
  ];

  const amountItems: DetailItemData[] = [
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

  const metaItems: DetailItemData[] = [
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
