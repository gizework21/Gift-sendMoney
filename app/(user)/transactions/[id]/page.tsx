import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

import {
  TransactionDetailsView,
} from "@/components/transactions/transaction-details-view";
import { authOptions } from "@/lib/auth";
import { getTransactionById } from "@/lib/transactions";

type PageProps = {
  params: Promise<{ id: string }>;
};

export default async function Page({ params }: PageProps) {
  const { id } = await params;
  const session = await getServerSession(authOptions);
  const transaction = getTransactionById(id);
  const displayName = session?.user?.name ?? session?.user?.phone ?? "User";

  if (!transaction) {
    notFound();
  }

  return (
    <TransactionDetailsView transaction={transaction} userName={displayName} />
  );
}
