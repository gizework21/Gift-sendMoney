import { UserMenu } from "@/components/admin/user-menu";
import Image from "next/image";
import Link from "next/link";

export type TransactionsHeaderProps = {
  userName: string;
};

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
          <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
            <path
              d="M12 3a5 5 0 0 1 5 5v2.5c0 .9.3 1.7.9 2.4l1.1 1.3V16H5v-1.8l1.1-1.3c.6-.7.9-1.5.9-2.4V8a5 5 0 0 1 5-5Zm0 18a2.5 2.5 0 0 0 2.4-2H9.6A2.5 2.5 0 0 0 12 21Z"
              fill="currentColor"
            />
          </svg>
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
