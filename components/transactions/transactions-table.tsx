"use client";

import { useMemo } from "react";
import { useRouter } from "next/navigation";
import { useTransactions, type Transaction } from "@/hooks/use-transactions";

export type TransactionColumn = {
  key: keyof Transaction;
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
  if (typeof value === "string") {
    return value;
  }
  return "-";
}

function getCellValue(
  row: Transaction | { id: string },
  key: keyof Transaction,
) {
  return (row as Partial<Transaction>)[key];
}

export function TransactionsTable({
  columns,
  rows = 10,
}: TransactionsTableProps) {
  const { data, isLoading } = useTransactions();
  const router = useRouter();

  const displayRows = useMemo(() => {
    if (isLoading || !data?.length) {
      return Array.from({ length: rows }).map((_, index) => ({
        id: `empty-${index}`,
      }));
    }
    return data;
  }, [data, isLoading, rows]);

  return (
    <div className="mt-5 rounded-2xl border border-[#e8f3ef] bg-white p-4">
      <div className="overflow-x-auto">
        <table className="min-w-275 w-full border-separate border-spacing-y-3 text-xs">
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
            {displayRows.map((row, index) => {
              const isPlaceholder = String(row.id ?? "").startsWith("empty-");
              return (
                <tr
                  key={row.id ?? `row-${index}`}
                  className={`rounded-2xl bg-[#f8f8f8] ${isPlaceholder ? "" : "cursor-pointer hover:bg-[#f1f5f3]"}`}
                  onClick={() => {
                    if (!isPlaceholder && row.id) {
                      router.push(`/transactions/${row.id}`);
                    }
                  }}
                >
                  {columns.map((column) => (
                    <td
                      key={`${column.key}-${index}`}
                      className="px-3 py-3 text-center text-[#7a8aa1]"
                    >
                      {formatCell(getCellValue(row, column.key))}
                    </td>
                  ))}
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
    </div>
  );
}
