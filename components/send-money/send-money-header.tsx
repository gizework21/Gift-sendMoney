"use client";

import * as React from "react";
import {
  BadgeDollarSign,
  ChevronRight,
  CircleHelp,
  ShoppingCart,
  Truck,
} from "lucide-react";

import Image from "next/image";

export type SendMoneyHeaderProps = {
  onHelpClick?: () => void;
  onDeliveryClick?: () => void;
  onCartClick?: () => void;
};

export function SendMoneyHeader({
  onHelpClick,
  onDeliveryClick,
  onCartClick,
}: SendMoneyHeaderProps) {
  return (
    <header className="flex  items-center justify-between gap-4 rounded-full md:border md:border-[#e3efe6] md:bg-white/90 px-4 md:px-6 py-3 md:shadow-[0_12px_30px_rgba(15,120,72,0.1)]">
      <div className="flex items-center gap-3">
        <Image src={"/logo.svg"} width={68} height={50} alt="logo icon" />
      </div>

      <div className="flex flex-wrap items-center gap-3">
        <button
          type="button"
          onClick={onHelpClick}
          className="flex h-10 w-10 items-center justify-center bg-white rounded-full border border-(--color-primary) text-[#1f4a73]"
        >
          <CircleHelp className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={onDeliveryClick}
          className="flex h-10 w-10 items-center justify-center bg-white rounded-full border border-(--color-primary) text-[#1f4a73]"
        >
          <Truck className="h-5 w-5" aria-hidden="true" />
        </button>
        <button
          type="button"
          onClick={onDeliveryClick}
          className="flex md:hidden h-10 w-10 items-center bg-white justify-center rounded-full border border-(--color-primary) text-[#1f4a73]"
        >
          <BadgeDollarSign className="h-8 w-8" aria-hidden="true" />
        </button>
        <Image
          src={"/bag.svg"}
          width={34}
          height={34}
          alt="bag icon"
          className="border rounded-full border-(--color-primary)"
        />
        <button
          type="button"
          onClick={onCartClick}
          className="hidden md:flex items-center gap-3 rounded-full bg-[linear-gradient(135deg,var(--color-primary-deep)_0%,var(--color-primary)_100%)] px-4 py-2 text-left text-white shadow-lg"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-full bg-white/15">
            <ShoppingCart className="h-5 w-5" aria-hidden="true" />
          </span>
          <span className="leading-tight">
            <span className="block text-sm font-semibold">View Cart</span>
            <span className="block text-xs text-white/80">Cart Detail</span>
          </span>
          <span className="ml-2 flex h-7 w-7 items-center justify-center rounded-full bg-white/15">
            <ChevronRight className="h-4 w-4" aria-hidden="true" />
          </span>
        </button>
      </div>
    </header>
  );
}
