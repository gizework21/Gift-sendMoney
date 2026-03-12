"use client";

import Image from "next/image";

import { Button } from "@/components/ui/button";

export const componentType = "client";

export function PresetAmountButtons({
  onPresetSelect,
  presets,
  usdAmount,
}: {
  onPresetSelect: (amount: number) => void;
  presets: number[];
  usdAmount: number;
}) {
  return (
    <div className="flex flex-wrap gap-3">
      {presets.slice(0, 4).map((amount) => {
        const isActive = amount === usdAmount;
        return (
          <button
            key={amount}
            type="button"
            className={`rounded-full px-4 py-1.5 text-sm font-semibold shadow-sm transition ${
              isActive
                ? "bg-(--color-primary) text-white"
                : "border border-[#e6e6e6] bg-white text-[#1c1c1c]"
            }`}
            onClick={() => onPresetSelect(amount)}
          >
            ${amount.toLocaleString("en-US")}
          </button>
        );
      })}
    </div>
  );
}

export function SendMoneyAction({
  onSendMoney,
}: {
  onSendMoney: () => void;
}) {
  return (
    <Button
      type="button"
      variant="primary"
      onClick={onSendMoney}
      className="mt-2 w-full rounded-2xl py-4 text-sm font-semibold"
    >
      Send Money
    </Button>
  );
}

export function CalculatorMobileFooter() {
  return (
    <Image
      src="/footerImg.svg"
      width={397}
      height={140}
      alt="footer image"
      className="block md:hidden"
    />
  );
}
