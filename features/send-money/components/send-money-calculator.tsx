"use client";

import {
  EtbAmountCard,
  TotalAmountCard,
  UsdAmountCard,
} from "@/features/send-money/components/send-money-calculator-cards";
import { ExchangeRateBanner } from "@/features/send-money/components/send-money-calculator-banner";
import {
  CalculatorMobileFooter,
  PresetAmountButtons,
  SendMoneyAction,
} from "@/features/send-money/components/send-money-calculator-actions";
import type { SendMoneyCalculatorProps } from "@/features/send-money/send-money.types";

export const componentType = "client";

export function SendMoneyCalculator({
  exchangeRate,
  giftRate,
  isAmountValid,
  minUsdTransfer,
  minAmountMessage,
  usdAmount,
  usdAmountInput,
  etbAmount,
  totalAmount,
  presets,
  onUsdChange,
  onPresetSelect,
  onSendMoney,
}: SendMoneyCalculatorProps) {
  return (
    <div className="overflow-hidden rounded-4xl border border-[#e6efe7] bg-[#FEFEFE]">
      <ExchangeRateBanner exchangeRate={exchangeRate} giftRate={giftRate} />

      <div className="space-y-5 p-3 md:p-5">
        <UsdAmountCard
          isAmountValid={isAmountValid}
          minUsdTransfer={minUsdTransfer}
          minAmountMessage={minAmountMessage}
          onUsdChange={onUsdChange}
          usdAmountInput={usdAmountInput}
        />
        <EtbAmountCard
          etbAmount={etbAmount}
          exchangeRate={exchangeRate}
          minUsdTransfer={minUsdTransfer}
        />
        <TotalAmountCard totalAmount={totalAmount} />
        <PresetAmountButtons
          onPresetSelect={onPresetSelect}
          presets={presets}
          usdAmount={usdAmount}
        />
        <SendMoneyAction isDisabled={!isAmountValid} onSendMoney={onSendMoney} />
        <CalculatorMobileFooter />
      </div>
    </div>
  );
}
