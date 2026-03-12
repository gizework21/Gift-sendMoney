import { getServerSession } from "next-auth";
import { notFound } from "next/navigation";

import {
  TransactionDetailsView,
} from "@/features/transactions/components/transaction-details-view";
import { getTransactionById } from "@/features/transactions/transactions.constants";
import { authOptions } from "@/lib/auth";
import type { TransactionDetailsPageProps } from "@/features/transactions/transactions.types";

export default async function Page({ params }: TransactionDetailsPageProps) {
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
