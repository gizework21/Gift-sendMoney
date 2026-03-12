"use client";

import { Icon } from "@iconify/react";
import { ChevronLeft } from "lucide-react";

import { ModalFooter } from "@/components/send-money/modals/modal-footer";
import { useSendMoneyStore } from "@/store/use-send-money-store";

export const componentType = "client";

function MastercardIcon() {
  return (
    <Icon icon="logos:mastercard" className="h-6 w-8" aria-hidden="true" />
  );
}

export function PaymentInfoHeader({ onBack }: { onBack: () => void }) {
  return (
    <div className="px-6 pb-4 pt-6 sm:p-6">
      <div className="md:hidden">
        <button
          type="button"
          onClick={onBack}
          className="flex h-10 w-10 items-center justify-center rounded-full border border-white bg-white shadow-sm"
          aria-label="Go back"
        >
          <ChevronLeft className="h-4 w-4" aria-hidden="true" />
        </button>
      </div>

      <div className="mt-3 md:mt-0">
        <h2 className="text-2xl font-bold text-[#111]">Payment Informations</h2>
        <p className="mt-1 text-sm text-[#6d6d6d]">
          Please enter your information and pay for your merchant
        </p>
      </div>
    </div>
  );
}

export function PaymentAmountCard() {
  const usdAmount = useSendMoneyStore((state) => state.transferSummary.usdAmount);

  return (
    <div className="rounded-3xl border border-[#edf0ef] bg-white p-5 shadow-sm">
      <div className="flex items-center justify-between">
        <div>
          <p className="text-xs font-semibold text-[#2a2a2a]">
            Payment Amount
          </p>
          <p className="mt-1 text-lg font-bold text-[#111]">
            $ {usdAmount.toFixed(2)}
          </p>
        </div>
        <div className="text-right">
          <MastercardIcon />
          <p className="text-[10px] text-[#6d6d6d]">Credit or Debit card</p>
        </div>
      </div>
    </div>
  );
}

export function PaymentInfoActions({
  isLoading,
  onBack,
}: {
  isLoading?: boolean;
  onBack: () => void;
}) {
  const usdAmount = useSendMoneyStore((state) => state.transferSummary.usdAmount);

  return (
    <ModalFooter
      isLoading={isLoading}
      primaryAction={{
        label: `Pay For $ ${usdAmount.toFixed(2)}`,
        type: "submit",
      }}
      secondaryAction={{
        label: "Back",
        onClick: onBack,
        variant: "primaryOutline",
        className: "text-[#111]",
      }}
    />
  );
}
