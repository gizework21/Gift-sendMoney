"use client";

import { useMemo } from "react";

import { useTransactions } from "@/hooks/use-transactions";

export type TransactionColumn = {
  key: string;
  label: string;
};

export type TransactionsTableProps = {
  columns: TransactionColumn[];
  rows?: number;
};

function formatCell(value: unknown) {
  if (typeof value === "number") {
    return value.toLocaleString("en-US");
  }
  return value ?? "-";
}

export function TransactionsTable({ columns, rows = 10 }: TransactionsTableProps) {
  const { data, isLoading } = useTransactions();

  const displayRows = useMemo(() => {
    if (isLoading || !data?.length) {
      return Array.from({ length: rows }).map((_, index) => ({ id: `empty-${index}` }));
    }
    return data;
  }, [data, isLoading, rows]);

  return (
    <div className="mt-5 rounded-2xl border border-[#e8f3ef] bg-white p-4">
      <div className="overflow-x-auto">
        <table className="min-w-[1100px] w-full border-separate border-spacing-y-3 text-xs">
          <thead>
            <tr className="text-left text-[#2a2a2a]">
              {columns.map((column) => (
                <th
                  key={column.key}
                  className="px-3 py-2 font-semibold text-[#2a4a6c]"
                >
                  {column.label}
                </th>
              ))}
            </tr>
          </thead>
          <tbody>
            {displayRows.map((row, index) => (
              <tr key={row.id ?? `row-${index}`} className="rounded-2xl bg-[#f8f8f8]">
                {columns.map((column) => (
                  <td
                    key={`${column.key}-${index}`}
                    className="px-3 py-3 text-center text-[#7a8aa1]"
                  >
                    {formatCell((row as Record<string, unknown>)[column.key])}
                  </td>
                ))}
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
