"use client";

import * as React from "react";

import { Button } from "@/components/ui/button";
import { CheckIcon } from "./icons";

export const componentType = "client";

export type SendMoneyHeroProps = {
  exchangeRate: number;
  giftRate: number;
  onWhyClick?: () => void;
};

function formatNumber(value: number) {
  return new Intl.NumberFormat("en-US", {
    minimumFractionDigits: 2,
    maximumFractionDigits: 2,
  }).format(value);
}

export function SendMoneyHero({
  exchangeRate,
  giftRate,
  onWhyClick,
}: SendMoneyHeroProps) {
  return (
    <section className="hidden md:flex space-y-10  flex-col justify-between min-h-full">
      <div className="flx flex-col space-y-8">
        <div className="flex flex-wrap items-center gap-3">
          <div className="flex items-center gap-2 rounded-full border border-[#e2efe6] bg-white px-4 py-2 shadow-sm">
            <span className="flex h-5 w-5 items-center justify-center rounded-md bg-(--color-primary) text-white">
              💹
            </span>
            <span className="text-sm font-semibold text-[#1c1c1c]">
              1 USD = {formatNumber(exchangeRate)} ETB
            </span>
          </div>
          <div className="rounded-full px-2 md:px-4 py-2 text-sm whitespace-nowrap font-semibold text-white bg-linear-to-r from-[#00BA63] to-[#008579] md:bg-white">
            Gift: {formatNumber(giftRate)} ETB / 1 USD
          </div>
        </div>

        <div className="space-y-6">
          <h1 className="text-6xl font-extrabold  leading-[1.05] tracking-tight text-black sm:text-7xl">
            Send Money Home
            <br />
            Instantly
            <br />
            Without the Hassle
          </h1>
          <p className="max-w-xl text-   text-[#7C7C7C] sm:text-lg">
            Transfer money or choose meaningful gifts—all in one place,
            delivered with ease.
          </p>
          <Button
            type="button"
            variant="primaryOutline"
            className="px-6 py-3 text-sm font-semibold"
            onClick={onWhyClick}
          >
            Why Gift Ethiopia
          </Button>
        </div>
      </div>

      <div className="flex items-start gap-3 text-[#8a8a8a]">
        <span className="mt-1 h-12 w-1 rounded-full bg-(--color-primary)" />
        <p className="text-lg font-medium leading-snug">
          Safe Payments,
          <br />
          Seamless Transfer.
        </p>
      </div>
    </section>
  );
}
