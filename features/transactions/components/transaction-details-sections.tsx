import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, Printer } from "lucide-react";
import type {
  DetailGridProps,
  DetailItemData,
  PageSectionProps,
  StatusItemProps,
  SummaryCardProps,
  TransactionSummaryBarProps,
} from "@/features/transactions/transactions.types";

export const componentType = "server";

export function BackLink() {
  return (
    <Link
      href="/transactions"
      className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-[#f2f6f4] text-[#1c1c1c]"
      aria-label="Back to transactions"
    >
      <ChevronLeft className="h-4 w-4" aria-hidden="true" />
    </Link>
  );
}

export function PageSection({ title, children }: PageSectionProps) {
  return (
    <section className="mt-6 rounded-[20px] border border-[#f0f0f0] bg-white p-6 shadow-[0_6px_20px_rgba(0,0,0,0.04)]">
      <div className="border-b border-dashed border-[#e5e5e5] pb-3 text-sm text-[#7d7d7d]">
        {title}
      </div>
      <div className="mt-4">{children}</div>
    </section>
  );
}

export function DetailGrid({ items, columns }: DetailGridProps) {
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

export function SummaryCard({ items, status }: SummaryCardProps) {
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

function StatusItem({ label, value }: StatusItemProps) {
  return (
    <div>
      <p className="text-xs text-[#9b9b9b]">{label}</p>
      <span className="mt-2 inline-flex rounded-full bg-[#d9fbe5] px-4 py-1 text-xs font-semibold text-[#1fa653]">
        {value}
      </span>
    </div>
  );
}

export function TransactionSummaryBar({
  transactionId,
}: TransactionSummaryBarProps) {
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
          <Printer className="h-4 w-4" aria-hidden="true" />
          Print Receipt
        </button>
      </div>
    </div>
  );
}

export function ContactCard() {
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
