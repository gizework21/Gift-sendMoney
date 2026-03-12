import { UserMenu } from "@/features/admin/components/user-menu";
import Image from "next/image";
import Link from "next/link";
import { Bell } from "lucide-react";
import type { TransactionsHeaderProps } from "@/features/transactions/transactions.types";

export function TransactionsHeader({ userName }: TransactionsHeaderProps) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-6 border-b border-[#d8e9e4] pb-4">
      <div className="flex items-center gap-4">
        <Link href={"/dashboard"}>
          <Image src={"/logo.svg"} width={110} height={80} alt="logo icon" />
        </Link>
        <div>
          <h1 className="text-lg font-bold text-[#111]">GIFT ETHIOPIA</h1>
          <p className="text-xs text-[#7d7d7d]">
            Manage All Gift Ethiopia Customer Actions, Transactions, And Order
            Processing In One Place.
          </p>
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="flex h-9 w-9 items-center justify-center rounded-full border border-[#dcebe5] bg-white text-[#1c7c64]">
          <Bell className="h-4 w-4" aria-hidden="true" />
        </button>
        <UserMenu
          name={userName}
          subtitle="Gift Ethiopia Admin"
          theme="light"
        />
      </div>
    </header>
  );
}
