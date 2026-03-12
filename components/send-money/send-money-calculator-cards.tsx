"use client";

import Image from "next/image";
import { CircleAlert } from "lucide-react";
import type { ReactNode } from "react";

export const componentType = "client";

function formatNumber(
  value: number,
  minimumFractionDigits = 0,
  maximumFractionDigits = 2,
) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits,
    maximumFractionDigits,
  }).format(value);
}

function AmountCard({
  currency,
  iconSrc,
  label,
  note,
  value,
}: {
  currency: string;
  iconSrc: string;
  label: string;
  note: ReactNode;
  value: ReactNode;
}) {
  return (
    <div className="rounded-3xl bg-white p-5 shadow-sm">
      <p className="text-sm font-medium text-[#9a9a9a]">{label}</p>
      <div className="mt-4 flex items-center justify-between gap-4">
        {value}
        <div className="flex items-center gap-2 rounded-full bg-[#f2f2f2] px-4 py-2">
          <Image src={iconSrc} width={25} height={5} alt={`${currency} icon`} />
          <span className="text-sm font-semibold text-[#1c1c1c]">
            {currency}
          </span>
        </div>
      </div>
      <div className="mt-4 flex items-center gap-2 text-xs font-medium text-(--color-primary)">
        <CircleAlert className="h-4 w-4" aria-hidden="true" />
        {note}
      </div>
    </div>
  );
}

export function UsdAmountCard({
  isAmountValid,
  minUsdTransfer,
  minAmountMessage,
  onUsdChange,
  usdAmount,
}: {
  isAmountValid: boolean;
  minUsdTransfer: number;
  minAmountMessage?: string;
  onUsdChange: (value: string) => void;
  usdAmount: number;
}) {
  return (
    <AmountCard
      currency="USD"
      iconSrc="/usIcon.svg"
      label="Enter Amount (USD)"
      note={<>Minimum Transfer Amount: ${minUsdTransfer}</>}
      value={
        <div>
          <div className="flex items-center gap-1 text-(--color-primary)">
            <span className="text-4xl font-bold">$</span>
            <input
              type="number"
              step="1"
              inputMode="numeric"
              value={usdAmount}
              onChange={(event) => onUsdChange(event.target.value)}
              min={minUsdTransfer}
              className={`w-28 bg-transparent text-5xl font-extrabold outline-none ${
                isAmountValid ? "" : "text-red-500"
              }`}
              aria-label="Amount in USD"
            />
          </div>
          {!isAmountValid && minAmountMessage ? (
            <p className="mt-2 text-xs font-medium text-red-500">
              {minAmountMessage}
            </p>
          ) : null}
        </div>
      }
    />
  );
}

export function EtbAmountCard({
  etbAmount,
  exchangeRate,
  minUsdTransfer,
}: {
  etbAmount: number;
  exchangeRate: number;
  minUsdTransfer: number;
}) {
  return (
    <AmountCard
      currency="ETB"
      iconSrc="/ethIcon.svg"
      label="Enter Amount (ETB)"
      note={
        <>
          Minimum Transfer Amount:{" "}
          {formatNumber(exchangeRate * minUsdTransfer, 2, 2)} ETB
        </>
      }
      value={
        <div className="text-[#b0b0b0]">
          <span className="text-4xl font-extrabold">
            {formatNumber(etbAmount, 2, 2)}
          </span>
          <span className="ml-2 text-3xl font-bold">ETB</span>
        </div>
      }
    />
  );
}

export function TotalAmountCard({ totalAmount }: { totalAmount: number }) {
  return (
    <div className="rounded-[22px] border border-[#e7efe7] bg-white p-4 shadow-sm">
      <div className="rounded-[18px] bg-[radial-gradient(circle_at_1px_1px,rgba(15,122,72,0.08)_1px,transparent_0)] bg-size-[24px_24px] p-4">
        <p className="text-sm font-semibold text-[#2a2a2a]">
          Total (Amount + Gift)
        </p>
        <p className="mt-2 text-2xl font-extrabold text-(--color-primary)">
          {formatNumber(totalAmount, 2, 2)}
        </p>
      </div>
    </div>
  );
}
