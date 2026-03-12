import { Download, Filter, Search } from "lucide-react";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export function TransactionsToolbar() {
  return (
    <div className="mt-4 flex flex-wrap items-center justify-between gap-4 rounded-2xl bg-[#f9f9f9] p-4">
      <div className="flex w-full max-w-40 items-center gap-2 rounded-2xl bg-white px-3 py-2 shadow-sm">
        <Search className="h-4 w-4 text-[#7d7d7d]" aria-hidden="true" />
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
            <Filter className="h-4 w-4" aria-hidden="true" />
          </span>
          Filter
        </Button>
        <Button
          type="button"
          variant="primary"
          className="h-10 px-6 text-sm font-semibold"
        >
          <span className="mr-2 inline-flex h-4 w-4 items-center justify-center">
            <Download className="h-4 w-4" aria-hidden="true" />
          </span>
          Export
        </Button>
      </div>
    </div>
  );
}
