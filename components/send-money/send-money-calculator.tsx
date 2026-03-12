"use client";

import {
  EtbAmountCard,
  TotalAmountCard,
  UsdAmountCard,
} from "@/components/send-money/send-money-calculator-cards";
import { ExchangeRateBanner } from "@/components/send-money/send-money-calculator-banner";
import {
  CalculatorMobileFooter,
  PresetAmountButtons,
  SendMoneyAction,
} from "@/components/send-money/send-money-calculator-actions";

export const componentType = "client";

export type SendMoneyCalculatorProps = {
  exchangeRate: number;
  giftRate: number;
  isAmountValid: boolean;
  minUsdTransfer: number;
  minAmountMessage?: string;
  usdAmount: number;
  etbAmount: number;
  totalAmount: number;
  presets: number[];
  onUsdChange: (value: string) => void;
  onPresetSelect: (amount: number) => void;
  onSendMoney: () => void;
};

export function SendMoneyCalculator({
  exchangeRate,
  giftRate,
  isAmountValid,
  minUsdTransfer,
  minAmountMessage,
  usdAmount,
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
          usdAmount={usdAmount}
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
