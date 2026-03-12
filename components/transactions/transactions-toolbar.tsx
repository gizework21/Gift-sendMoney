import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function TransactionsToolbar() {
  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-[#f9f9f9] p-4">
      <div className="flex w-full max-w-40 items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-sm">
        <svg
          viewBox="0 0 24 24"
          className="h-4 w-4 text-[#7d7d7d]"
          aria-hidden="true"
        >
          <path
            d="M15.5 14h-.8l-.3-.3a6.2 6.2 0 1 0-.7.7l.3.3v.8L19 20.5 20.5 19l-5-5Zm-5.3 0a4.3 4.3 0 1 1 0-8.6 4.3 4.3 0 0 1 0 8.6Z"
            fill="currentColor"
          />
        </svg>
        <Input
          placeholder="Search by reference, Sender name, customer name..."
          className="h-9 border-0 bg-transparent px-0 text-sm focus-visible:ring-0"
        />
      </div>

      <div className="flex items-center gap-3">
        <Button
          type="button"
          variant="primaryOutline"
          className="h-10 px-6 text-sm font-semibold"
        >
          <span className="mr-2 inline-flex h-4 w-4 items-center justify-center">
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
              <path
                d="M4 6h16v2H4V6Zm3 5h10v2H7v-2Zm3 5h4v2h-4v-2Z"
                fill="currentColor"
              />
            </svg>
          </span>
          Filter
        </Button>
        <Button
          type="button"
          variant="primary"
          className="h-10 px-6 text-sm font-semibold"
        >
          <span className="mr-2 inline-flex h-4 w-4 items-center justify-center">
            <svg viewBox="0 0 24 24" className="h-4 w-4" aria-hidden="true">
              <path
                d="M12 3v10l3-3 1.4 1.4-5.4 5.4-5.4-5.4L7 10l3 3V3h2Zm-7 14h14v4H5v-4Z"
                fill="currentColor"
              />
            </svg>
          </span>
          Export
        </Button>
      </div>
    </div>
  );
}
