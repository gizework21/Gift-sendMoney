import { getServerSession } from "next-auth";
import { BackButton } from "@/components/ui/back-button";
import { TransactionsHeader } from "@/features/transactions/components/transactions-header";
import { TransactionsPagination } from "@/features/transactions/components/transactions-pagination";
import { TransactionsTable } from "@/features/transactions/components/transactions-table";
import { TransactionsToolbar } from "@/features/transactions/components/transactions-toolbar";
import { AppFooter } from "@/components/ui/app-footer";
import { TRANSACTION_COLUMNS } from "@/features/transactions/transactions.constants";
import { authOptions } from "@/lib/auth";

export default async function Page() {
  const session = await getServerSession(authOptions);
  const displayName = session?.user?.name ?? session?.user?.phone ?? "User";

  return (
    <main className="min-h-screen bg-[#efefef] p-6">
      <div className="mx-auto w-full max-w-350 rounded-[28px] bg-white p-6 shadow-[0_20px_60px_rgba(0,0,0,0.08)]">
        <TransactionsHeader userName={displayName} />

        <div className="mt-4 flex items-center gap-2 text-sm font-semibold text-[#111]">
          <BackButton href="/dashboard" />
          Transactions
        </div>

        <section className="mt-6">
          <div>
            <h2 className="text-sm font-semibold text-[#111]">
              Transaction Lists
            </h2>
            <p className="mt-1 text-xs text-[#8b8b8b]">
              Search and manage transaction lists.
            </p>
          </div>

          <TransactionsToolbar />
          <TransactionsTable columns={TRANSACTION_COLUMNS} rows={10} />
          <TransactionsPagination />
        </section>

        <AppFooter className="mt-6 text-center text-xs text-[#b0b0b0]" />
      </div>
    </main>
  );
}
