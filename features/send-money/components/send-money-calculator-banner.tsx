"use client";

import Image from "next/image";

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

export function ExchangeRateBanner({
  exchangeRate,
  giftRate,
}: {
  exchangeRate: number;
  giftRate: number;
}) {
  return (
    <div className="flex items-center justify-between gap-4 bg-white md:bg-linear-to-b from-[#1D3557] to-[#008F5F]  px-3 py-4 font-bold text-black  md:px-6 md:text-white">
      <div className="flex items-center whitespace-nowrap gap-1 text-sm font-bold md:gap-3 sm:text-base">
        <Image
          src="/dollarIcon.svg"
          width={25}
          height={5}
          alt="us icon"
          className="hidden md:flex"
        />
        <div className="flex md:hidden">💹</div>
        <span>1 USD = {formatNumber(exchangeRate, 2, 2)} ETB</span>
      </div>
      <div className="rounded-full bg-linear-to-r from-[#00BA63] to-[#008579] px-2 py-2 text-sm whitespace-nowrap font-semibold text-white md:bg-white md:px-4">
        Gift: {formatNumber(giftRate, 2, 2)} ETB/ 1 USD
      </div>
    </div>
  );
}
