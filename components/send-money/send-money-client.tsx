"use client";

import { useEffect, useState } from "react";

import { SendMoneyCalculator } from "@/components/send-money/send-money-calculator";
import { SendMoneyHeader } from "@/components/send-money/send-money-header";
import { SendMoneyHero } from "@/components/send-money/send-money-hero";
import { SendMoneyModals } from "@/components/send-money/modals/send-money-modals";
import { useBanks } from "@/hooks/use-banks";
import { useExchangeRate } from "@/hooks/use-exchange-rate";
import type { BankOption } from "@/lib/constants";
import type { ExchangeRateData } from "@/lib/exchange-rate";
import { useSendMoneyStore } from "@/store/use-send-money-store";

export const componentType = "client";

export type SendMoneyClientProps = {
  initialBanks: BankOption[];
  initialExchangeRate: ExchangeRateData;
};

export function SendMoneyClient({
  initialBanks,
  initialExchangeRate,
}: SendMoneyClientProps) {
  const { data: banks = initialBanks } = useBanks(initialBanks);
  const { data: exchangeRateData = initialExchangeRate } =
    useExchangeRate(initialExchangeRate);

  const [usdAmountInput, setUsdAmountInput] = useState(
    String(exchangeRateData.minUsdTransfer),
  );

  const selectedBank = useSendMoneyStore((state) => state.selectedBank);
  const setSelectedBank = useSendMoneyStore((state) => state.setSelectedBank);
  const setOpenStep = useSendMoneyStore((state) => state.setOpenStep);
  const setTransferSummary = useSendMoneyStore(
    (state) => state.setTransferSummary,
  );

  const {
    rate: exchangeRate,
    giftRate,
    minUsdTransfer,
    presetAmounts,
  } = exchangeRateData;
  const usdAmount = usdAmountInput ? Number(usdAmountInput) : 0;

  useEffect(() => {
    if (!selectedBank && banks[0]?.name) {
      setSelectedBank(banks[0].name);
    }
  }, [banks, selectedBank, setSelectedBank]);

  const etbAmount = usdAmount * exchangeRate;
  const totalAmount = etbAmount + usdAmount * giftRate;
  const isAmountValid = usdAmount >= minUsdTransfer;
  const minAmountMessage = isAmountValid
    ? undefined
    : `Minimum transfer amount is $${minUsdTransfer}.`;

  useEffect(() => {
    setTransferSummary({
      usdAmount,
      exchangeRate,
      giftRate,
      etbAmount,
      totalAmount,
    });
  }, [
    etbAmount,
    exchangeRate,
    giftRate,
    setTransferSummary,
    totalAmount,
    usdAmount,
  ]);

  const onUsdChange = (value: string) => {
    const digitsOnly = value.replace(/\D/g, "");
    if (!digitsOnly) {
      setUsdAmountInput("");
      return;
    }

    setUsdAmountInput(digitsOnly.replace(/^0+(?=\d)/, ""));
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
            isAmountValid={isAmountValid}
            minUsdTransfer={minUsdTransfer}
            minAmountMessage={minAmountMessage}
            usdAmount={usdAmount}
            etbAmount={etbAmount}
            totalAmount={totalAmount}
            presets={presetAmounts}
            onUsdChange={onUsdChange}
            onPresetSelect={(amount) => setUsdAmountInput(String(amount))}
            onSendMoney={() => {
              if (!isAmountValid) return;
              setOpenStep("bank");
            }}
            usdAmountInput={usdAmountInput}
          />
        </div>
      </div>

      <SendMoneyModals banks={banks} />
    </>
  );
}
