import { headers } from "next/headers";
import Link from "next/link";
import { getServerSession } from "next-auth";

import { TransactionsHeader } from "@/components/transactions/transactions-header";
import { AppFooter } from "@/components/ui/app-footer";
import { authOptions } from "@/lib/auth";

export const componentType = "server";

type Transaction = {
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

type PageProps = {
  params: { id: string };
};

const FALLBACK_TRANSACTION: Transaction = {
  id: "TX-10420",
  senderName: "Solomon Kebede",
  senderPhone: "+2519 (9833) (8321)",
  recipientName: "Filimon Mehari",
  recipientPhone: "+2519 (9111) (1111)",
  amountUsd: 5000,
  exchangeRate: 134,
  amountEtb: 75000,
  pickupBranch: "Addis Ababa",
  transactionStatus: "Completed",
  pickupStatus: "Delivered",
  transactionDateTime: "May 12, 2024 05:30 PM",
  details: "View",
};

async function getBaseUrl() {
  const headersList = await headers();
  const forwardedHost = headersList.get("x-forwarded-host");
  const host = forwardedHost ?? headersList.get("host");
  const forwardedProto = headersList.get("x-forwarded-proto");
  const protocol =
    forwardedProto ?? (process.env.NODE_ENV === "development" ? "http" : "https");

  if (host) {
    return `${protocol}://${host}`;
  }

  if (process.env.NEXT_PUBLIC_SITE_URL) {
    return process.env.NEXT_PUBLIC_SITE_URL;
  }

  if (process.env.VERCEL_URL) {
    return `https://${process.env.VERCEL_URL}`;
  }

  return null;
}

async function getTransaction(id: string): Promise<Transaction> {
  const baseUrl = await getBaseUrl();
  if (!baseUrl) {
    return { ...FALLBACK_TRANSACTION, id };
  }

  try {
    const response = await fetch(`${baseUrl}/api/transactions`, {
      cache: "no-store",
    });

    if (response.ok) {
      const data = (await response.json()) as { data: Transaction[] };
      const match = data.data.find((item) => item.id === id);
      if (match) return match;
    }
  } catch {
    // Ignore and fall back to sample data.
  }

  return { ...FALLBACK_TRANSACTION, id };
}

function formatMoney(value: number) {
  return value.toLocaleString("en-US", { minimumFractionDigits: 2 });
}

export default async function Page({ params }: PageProps) {
  const session = await getServerSession(authOptions);
  const transaction = await getTransaction(params.id);
  const displayName = session?.user?.name ?? session?.user?.phone ?? "User";

  return (
    <main className="min-h-screen bg-[#efefef] p-6">
      <div className="mx-auto w-full max-w-[1400px] rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <TransactionsHeader userName={displayName} />

        <div className="mt-4 flex items-center gap-3 border-b border-[#d8e9e4] pb-4 text-sm font-semibold text-[#111]">
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
          Transaction Detail
        </div>

        <div className="mt-6 rounded-[18px] border border-[#eef1f0] bg-[#fafafa] px-6 py-4">
          <div className="flex items-center justify-between">
            <p className="text-sm font-semibold text-[#111]">
              Transaction ID: {transaction.id}
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

        <section className="mt-6 rounded-[20px] border border-[#f0f0f0] bg-white p-6 shadow-[0_6px_20px_rgba(0,0,0,0.04)]">
          <div className="flex items-center justify-between border-b border-dashed border-[#e5e5e5] pb-3 text-sm text-[#7d7d7d]">
            Sender Info.
          </div>
          <div className="mt-4 rounded-[16px] bg-[#fafafa] px-6 py-4">
            <div className="grid grid-cols-2 gap-8">
              <div>
                <p className="text-xs text-[#9b9b9b]">Sender Name:</p>
                <p className="mt-2 text-sm font-semibold text-[#111]">
                  {transaction.senderName}
                </p>
              </div>
              <div>
                <p className="text-xs text-[#9b9b9b]">Sender Phone Number:</p>
                <p className="mt-2 text-sm font-semibold text-[#111]">
                  {transaction.senderPhone}
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-[20px] border border-[#f0f0f0] bg-white p-6 shadow-[0_6px_20px_rgba(0,0,0,0.04)]">
          <div className="flex items-center justify-between border-b border-dashed border-[#e5e5e5] pb-3 text-sm text-[#7d7d7d]">
            Recipient Info.
          </div>
          <div className="mt-4 rounded-[16px] bg-[#fafafa] px-6 py-4">
            <div className="grid grid-cols-3 gap-8">
              <div>
                <p className="text-xs text-[#9b9b9b]">Recipient Name:</p>
                <p className="mt-2 text-sm font-semibold text-[#111]">
                  {transaction.recipientName}
                </p>
              </div>
              <div>
                <p className="text-xs text-[#9b9b9b]">Bank Name</p>
                <p className="mt-2 text-sm font-semibold text-[#111]">
                  Dashen Bank
                </p>
              </div>
              <div>
                <p className="text-xs text-[#9b9b9b]">Recipient Account Number:</p>
                <p className="mt-2 text-sm font-semibold text-[#111]">
                  100034767337676
                </p>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-[20px] border border-[#f0f0f0] bg-white p-6 shadow-[0_6px_20px_rgba(0,0,0,0.04)]">
          <div className="flex items-center justify-between border-b border-dashed border-[#e5e5e5] pb-3 text-sm text-[#7d7d7d]">
            Transaction Info.
          </div>
          <div className="mt-4 space-y-4">
            <div className="rounded-[16px] bg-[#fafafa] px-6 py-4">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <p className="text-xs text-[#9b9b9b]">Transaction Amount in USD:</p>
                  <p className="mt-2 text-sm font-semibold text-[#111]">
                    ${formatMoney(transaction.amountUsd)}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#9b9b9b]">Transaction Amount in ETB:</p>
                  <p className="mt-2 text-sm font-semibold text-[#111]">
                    {formatMoney(transaction.amountEtb)} ETB
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#9b9b9b]">Exchange Rate:</p>
                  <p className="mt-2 text-sm font-semibold text-[#111]">
                    {formatMoney(transaction.exchangeRate)} ETB
                  </p>
                </div>
              </div>
            </div>

            <div className="rounded-[16px] bg-[#fafafa] px-6 py-4">
              <div className="grid grid-cols-3 gap-8">
                <div>
                  <p className="text-xs text-[#9b9b9b]">Net Amount to Merchant:</p>
                  <p className="mt-2 text-sm font-semibold text-[#111]">
                    {formatMoney(transaction.amountEtb - 10)} ETB
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#9b9b9b]">Transaction Date &amp; Time</p>
                  <p className="mt-2 text-sm font-semibold text-[#111]">
                    {transaction.transactionDateTime}
                  </p>
                </div>
                <div>
                  <p className="text-xs text-[#9b9b9b]">Payment Status:</p>
                  <span className="mt-2 inline-flex rounded-full bg-[#d9fbe5] px-4 py-1 text-xs font-semibold text-[#1fa653]">
                    Completed
                  </span>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section className="mt-6 rounded-[20px] border border-[#f0f0f0] bg-white px-6 py-5">
          <div className="flex items-center justify-between">
            <div>
              <p className="text-sm font-semibold text-[#7d7d7d]">
                GIFT ETHIOPIA
              </p>
              <p className="mt-2 text-xs text-[#9b9b9b]">
                Email: info@GiftEthiopiacontact.com
              </p>
              <p className="mt-1 text-xs text-[#9b9b9b]">
                Phone: +251 11 557 20 80
              </p>
            </div>
            <div className="text-right text-xs text-[#d0d0d0]">
              <svg viewBox="0 0 64 64" className="ml-auto h-12 w-12" aria-hidden="true">
                <path
                  d="M32 6c8 0 14 6 14 14 0 8-6 14-14 14S18 28 18 20c0-8 6-14 14-14Zm0 28-8 8v10h16V42l-8-8Z"
                  fill="currentColor"
                />
                <path
                  d="M22 14h20"
                  stroke="#ffffff"
                  strokeWidth="2"
                  opacity="0.6"
                />
              </svg>
              STARGIFT
            </div>
          </div>
        </section>

        <AppFooter className="mt-6 text-center text-xs text-[#b0b0b0]" />
      </div>
    </main>
  );
}
