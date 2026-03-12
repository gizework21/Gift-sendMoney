import { UserMenu } from "@/components/admin/user-menu";

export type TransactionsHeaderProps = {
  userName: string;
};

export function TransactionsHeader({ userName }: TransactionsHeaderProps) {
  return (
    <header className="flex flex-wrap items-center justify-between gap-6 border-b border-[#d8e9e4] pb-4">
      <div className="flex items-center gap-4">
        <div className="flex h-12 w-12 items-center justify-center rounded-full bg-[#e9f5ee]">
          <svg viewBox="0 0 64 64" aria-hidden="true" className="h-7 w-7">
            <path
              d="M32 9c10.8 6.7 18.5 16.2 23 28.6-8.3 5.6-16.4 8.4-24.3 8.4-7.8 0-15.8-2.8-24-8.3C13.2 25.5 20.9 15.8 32 9Z"
              fill="#0aa56b"
            />
            <path
              d="M32 15.5c-2.6 2.9-4.2 6.7-4.7 11.4l4.7 6.1 4.9-6.2c-.5-4.5-2.2-8.2-4.9-11.3Z"
              fill="#ffffff"
            />
          </svg>
        </div>
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
