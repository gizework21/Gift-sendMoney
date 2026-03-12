export type TransactionsPaginationProps = {
  current?: string;
  pages?: string[];
};

export function TransactionsPagination({
  current = "1",
  pages = ["«", "‹", "1", "2", "3", "…", "10", "›", "»"],
}: TransactionsPaginationProps) {
  return (
    <div className="mt-6 flex items-center justify-end gap-2 text-xs">
      {pages.map((label) => (
        <button
          key={label}
          type="button"
          className={`flex h-8 w-8 items-center justify-center rounded-lg border border-[#e5e5e5] ${
            label === current
              ? "bg-(--color-primary) text-white"
              : "text-[#2a2a2a]"
          }`}
        >
          {label}
        </button>
      ))}
    </div>
  );
}
