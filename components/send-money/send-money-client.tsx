"use client";

import { useEffect, useState } from "react";

import { SendMoneyCalculator } from "@/components/send-money/send-money-calculator";
import { SendMoneyHeader } from "@/components/send-money/send-money-header";
import { SendMoneyHero } from "@/components/send-money/send-money-hero";
import { SendMoneyModals } from "@/components/send-money/modals/send-money-modals";
import { useSendMoneyStore } from "@/store/use-send-money-store";
import { BANKS } from "@/lib/constants";

export const componentType = "client";

export type SendMoneyClientProps = {
  exchangeRate: number;
  giftRate: number;
  minUsdTransfer: number;
  presetAmounts: number[];
};

export function SendMoneyClient({
  exchangeRate,
  giftRate,
  minUsdTransfer,
  presetAmounts,
}: SendMoneyClientProps) {
  const [usdAmount, setUsdAmount] = useState(1);

  const selectedBank = useSendMoneyStore((state) => state.selectedBank);
  const setSelectedBank = useSendMoneyStore((state) => state.setSelectedBank);
  const setOpenStep = useSendMoneyStore((state) => state.setOpenStep);

  useEffect(() => {
    if (!selectedBank && BANKS[0]?.name) {
      setSelectedBank(BANKS[0].name);
    }
  }, [selectedBank, setSelectedBank]);

  const giftAmount = usdAmount * giftRate;
  const etbAmount = usdAmount * exchangeRate;
  const totalAmount = etbAmount + giftAmount;

  const onUsdChange = (value: string) => {
    const nextValue = Number(value);
    if (Number.isNaN(nextValue)) {
      setUsdAmount(0);
      return;
    }
    setUsdAmount(nextValue);
  };

  return (
    <>
      <div className="mx-auto max-w-full px-4 py-6 sm:p-6">
        <SendMoneyHeader />

        <div className="mt-4 grid gap-8 md:mt-20 lg:grid-cols-[1.05fr_0.95fr] lg:items-start lg:gap-0">
          <SendMoneyHero exchangeRate={exchangeRate} giftRate={giftRate} />
          <SendMoneyCalculator
            exchangeRate={exchangeRate}
            giftRate={giftRate}
            minUsdTransfer={minUsdTransfer}
            usdAmount={usdAmount}
            etbAmount={etbAmount}
            totalAmount={totalAmount}
            presets={presetAmounts}
            onUsdChange={onUsdChange}
            onPresetSelect={setUsdAmount}
            onSendMoney={() => setOpenStep("bank")}
          />
        </div>
      </div>

      <SendMoneyModals />
    </>
  );
}
