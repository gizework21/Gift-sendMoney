import { headers } from "next/headers";
import { getServerSession } from "next-auth";

import {
  TransactionDetailsView,
  type TransactionDetails,
} from "@/components/transactions/transaction-details-view";
import { authOptions } from "@/lib/auth";

type PageProps = {
  params: { id: string };
};

const FALLBACK_TRANSACTION: TransactionDetails = {
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
    forwardedProto ??
    (process.env.NODE_ENV === "development" ? "http" : "https");

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

async function getTransaction(id: string): Promise<TransactionDetails> {
  const baseUrl = await getBaseUrl();
  if (!baseUrl) {
    return { ...FALLBACK_TRANSACTION, id };
  }

  try {
    const response = await fetch(`${baseUrl}/api/transactions`, {
      cache: "no-store",
    });

    if (response.ok) {
      const data = (await response.json()) as { data: TransactionDetails[] };
      const match = data.data.find((item) => item.id === id);
      if (match) return match;
    }
  } catch {}

  return { ...FALLBACK_TRANSACTION, id };
}

export default async function Page({ params }: PageProps) {
  const session = await getServerSession(authOptions);
  const transaction = await getTransaction(params.id);
  const displayName = session?.user?.name ?? session?.user?.phone ?? "User";

  return (
    <TransactionDetailsView transaction={transaction} userName={displayName} />
  );
}
